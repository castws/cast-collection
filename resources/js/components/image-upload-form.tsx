import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { type CastType, type Gender, type ImageType } from '@/types';
import { useForm } from '@inertiajs/react';
import { Upload } from 'lucide-react';
import { FormEventHandler, useRef, useState } from 'react';

interface ImageUploadFormProps {
  imageTypes: ImageType[];
  castTypes: CastType[];
  genders: Gender[];
  onSuccess?: () => void;
}

type ImageFormData = {
  image: File | null;
  image_type_id: string;
  description: string;
  cast_type_ids: number[];
  gender_ids: number[];
};

export default function ImageUploadForm({
  imageTypes,
  castTypes,
  genders,
  onSuccess,
}: ImageUploadFormProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data, setData, post, processing, errors, reset } =
    useForm<ImageFormData>({
      image: null,
      image_type_id: '',
      description: '',
      cast_type_ids: [],
      gender_ids: [],
    });

  const handleFile = (file: File | null) => {
    setData('image', file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFile(file);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0] || null;
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const toggleCastType = (id: number) => {
    setData(
      'cast_type_ids',
      data.cast_type_ids.includes(id)
        ? data.cast_type_ids.filter((cid) => cid !== id)
        : [...data.cast_type_ids, id],
    );
  };

  const toggleGender = (id: number) => {
    setData(
      'gender_ids',
      data.gender_ids.includes(id)
        ? data.gender_ids.filter((gid) => gid !== id)
        : [...data.gender_ids, id],
    );
  };

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('images.store'), {
      forceFormData: true,
      onSuccess: () => {
        reset();
        setPreview(null);
        onSuccess?.();
      },
    });
  };

  return (
    <form onSubmit={submit} className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* Left Column - Form Fields */}
      <div className="space-y-6">
        {/* Description */}
        <div className="grid gap-2">
          <Label htmlFor="description">Description (optional)</Label>
          <textarea
            id="description"
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            placeholder="Add a description..."
          />
          <InputError message={errors.description} />
        </div>

        {/* Cast Types Multi-Select (Checkboxes) */}
        <div className="grid gap-2">
          <Label>Cast Types</Label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {castTypes.map((type) => (
              <div key={type.id} className="flex items-center gap-2">
                <Checkbox
                  id={`cast-${type.id}`}
                  checked={data.cast_type_ids.includes(type.id)}
                  onCheckedChange={() => toggleCastType(type.id)}
                />
                <Label htmlFor={`cast-${type.id}`} className="font-normal">
                  {type.name}
                </Label>
              </div>
            ))}
          </div>
          <InputError message={errors.cast_type_ids} />
        </div>

        {/* Genders Multi-Select (Checkboxes) */}
        <div className="grid gap-2">
          <Label>Genders</Label>
          <div className="flex flex-wrap gap-4">
            {genders.map((gender) => (
              <div key={gender.id} className="flex items-center gap-2">
                <Checkbox
                  id={`gender-${gender.id}`}
                  checked={data.gender_ids.includes(gender.id)}
                  onCheckedChange={() => toggleGender(gender.id)}
                />
                <Label htmlFor={`gender-${gender.id}`} className="font-normal">
                  {gender.name}
                </Label>
              </div>
            ))}
          </div>
          <InputError message={errors.gender_ids} />
        </div>

        {/* Image Type Radio Group */}
        <div className="grid gap-2">
          <Label>Image Type</Label>
          <RadioGroup
            value={data.image_type_id}
            onValueChange={(value) => setData('image_type_id', value)}
          >
            {imageTypes.map((type) => (
              <div key={type.id} className="flex items-center gap-2">
                <RadioGroupItem
                  id={`image-type-${type.id}`}
                  value={String(type.id)}
                />
                <Label
                  htmlFor={`image-type-${type.id}`}
                  className="font-normal"
                >
                  {type.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
          <InputError message={errors.image_type_id} />
        </div>

        <Button type="submit" disabled={processing}>
          {processing ? 'Uploading...' : 'Upload Image'}
        </Button>
      </div>

      {/* Right Column - Image Upload & Preview (first on mobile) */}
      <div className="order-first space-y-4 md:order-last">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {preview ? (
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border">
              <img
                src={preview}
                alt="Preview"
                className="h-auto w-full object-contain"
              />
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={openFileDialog}
              className="w-full"
            >
              Replace Image
            </Button>
          </div>
        ) : (
          <div
            onClick={openFileDialog}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`flex aspect-square cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed transition-colors ${
              isDragging
                ? 'border-primary bg-primary/5'
                : 'border-muted-foreground/25 bg-muted/50 hover:border-muted-foreground/50 hover:bg-muted'
            }`}
          >
            <Upload className="text-muted-foreground h-10 w-10" />
            <div className="text-center">
              <p className="text-sm font-medium">
                Drop your image here or click to browse
              </p>
              <p className="text-muted-foreground text-xs">
                Supports JPG, PNG, GIF, WebP
              </p>
            </div>
          </div>
        )}

        <InputError message={errors.image} />
      </div>
    </form>
  );
}

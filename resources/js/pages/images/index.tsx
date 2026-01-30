import ImageGallery from '@/components/images/image-gallery';
import UploadDialog from '@/components/images/upload-dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import AppLayout from '@/layouts/app-layout';
import {
  type CastType,
  type Gender,
  type Image,
  type ImageType,
  type PaginatedData,
  type SharedData,
} from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { CheckCircle2 } from 'lucide-react';

interface ImageProps {
  images: PaginatedData<Image>;
  imageTypes: ImageType[];
  castTypes: CastType[];
  genders: Gender[];
}

export default function Images({
  images,
  imageTypes,
  castTypes,
  genders,
}: ImageProps) {
  const { flash } = usePage<SharedData>().props;

  return (
    <AppLayout>
      <Head title="Images" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        {flash.success && (
          <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800/30 dark:bg-green-900/20 dark:text-green-100">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription>{flash.success}</AlertDescription>
          </Alert>
        )}

        <div className="flex items-center justify-between">
          <UploadDialog
            imageTypes={imageTypes}
            castTypes={castTypes}
            genders={genders}
          />
        </div>

        <ImageGallery images={images} />
      </div>
    </AppLayout>
  );
}

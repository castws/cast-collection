import ImageUploadForm from '@/components/images/image-upload-form';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { type CastType, type Gender, type ImageType } from '@/types';
import { Plus } from 'lucide-react';
import { useState } from 'react';

interface UploadDialogProps {
  imageTypes: ImageType[];
  castTypes: CastType[];
  genders: Gender[];
}

export default function UploadDialog({
  imageTypes,
  castTypes,
  genders,
}: UploadDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Upload Image
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[95vh] overflow-y-auto sm:max-w-[95vw]">
        <DialogHeader>
          <DialogTitle>Upload Image</DialogTitle>
        </DialogHeader>
        <ImageUploadForm
          imageTypes={imageTypes}
          castTypes={castTypes}
          genders={genders}
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}

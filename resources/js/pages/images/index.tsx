import ImageGallery from '@/components/images/image-gallery';
import UploadDialog from '@/components/images/upload-dialog';
import AppLayout from '@/layouts/app-layout';
import {
  type CastType,
  type Gender,
  type Image,
  type ImageType,
  type PaginatedData,
} from '@/types';
import { Head } from '@inertiajs/react';

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
  return (
    <AppLayout>
      <Head title="Images" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
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

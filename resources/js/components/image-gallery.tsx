import ImageCard from '@/components/image-card';
import Pagination from '@/components/pagination';
import { type Image, type PaginatedData } from '@/types';

interface ImageGalleryProps {
  images: PaginatedData<Image>;
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  if (images.data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-muted-foreground text-lg">No result</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.data.map((image) => (
          <ImageCard className="self-start" key={image.id} image={image} />
        ))}
      </div>

      {images.last_page > 1 && <Pagination links={images.links} />}
    </div>
  );
}

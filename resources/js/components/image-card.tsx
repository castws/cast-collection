import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { type Image } from '@/types';

interface ImageCardProps {
  image: Image;
  className?: string;
}

export default function ImageCard({ image, className }: ImageCardProps) {
  const imageUrl = `/storage/${image.file_path}`;

  const castTypes = image.cast_types.map((ct) => ct.name).join(', ');
  const genders = image.genders.map((g) => g.name).join(', ');

  return (
    <Card className={cn(className, 'gap-3 overflow-hidden py-0')}>
      <img
        src={imageUrl}
        alt={image.description || 'Uploaded image'}
        className="w-full border-b"
      />
      <CardContent className="px-4">
        {image.description && (
          <p className="mb-2 line-clamp-2 text-sm">{image.description}</p>
        )}
        <div className="flex flex-wrap gap-1 font-semibold">
          <span>{castTypes}</span>/<span>{genders}</span>/
          <span>{image.image_type.name}</span>
        </div>
      </CardContent>
      <CardFooter className="border-t px-4 py-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={image.user.avatar} />
            <AvatarFallback>{image.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-muted-foreground text-xs">
            {image.user.name}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}

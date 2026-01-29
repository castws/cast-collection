import ImageTags from '@/components/images/image-tags';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { imageUrl } from '@/lib/image-url';
import { cn } from '@/lib/utils';
import { type Image } from '@/types';
import { Link } from '@inertiajs/react';

interface ImageCardProps {
  image: Image;
  className?: string;
}

export default function ImageCard({ image, className }: ImageCardProps) {
  const src = imageUrl(image, 400);

  return (
    <Link
      href={route('images.show', image.id)}
      className={cn(className, 'block')}
    >
      <Card className="gap-3 overflow-hidden py-0 transition-shadow hover:shadow-md">
        <img
          src={src}
          alt={image.description || 'Uploaded image'}
          className="w-full border-b"
        />
        <CardContent className="px-4">
          {image.description && (
            <p className="mb-2 line-clamp-2 text-sm">{image.description}</p>
          )}
          <ImageTags
            castTypes={image.cast_types}
            genders={image.genders}
            imageType={image.image_type}
          />
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
    </Link>
  );
}

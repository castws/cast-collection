import ImageTags from '@/components/image-tags';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type Image } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { formatDistanceToNow } from 'date-fns';
import { ArrowLeft } from 'lucide-react';

interface ImageShowProps {
  image: Image;
}

export default function ImageShow({ image }: ImageShowProps) {
  const imageUrl = `/storage/${image.file_path}`;

  return (
    <AppLayout>
      <Head title={image.description || `Image #${image.id}`} />

      <div className="flex h-full flex-1 flex-col gap-6 p-4">
        <div>
          <Button variant="ghost" size="sm" asChild>
            <Link href={route('images')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Gallery
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <img
            src={imageUrl}
            alt={image.description || 'Image'}
            className="w-full object-contain"
          />

          <div className="space-y-6">
            <Card>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={image.user.avatar} />
                      <AvatarFallback>
                        {image.user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{image.user.name}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">
                  {formatDistanceToNow(new Date(image.created_at), {
                    addSuffix: true,
                  })}
                </p>

                {image.description && (
                  <p className="text-muted-foreground">{image.description}</p>
                )}

                <ImageTags
                  castTypes={image.cast_types}
                  genders={image.genders}
                  imageType={image.image_type}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

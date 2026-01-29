import ImageTags from '@/components/images/image-tags';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { imageUrl } from '@/lib/image-url';
import AppLayout from '@/layouts/app-layout';
import { type Image } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { formatDistanceToNow } from 'date-fns';
import { ArrowLeft, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

type ViewMode = 'details' | 'fit' | 'natural';

interface ImageShowProps {
  image: Image;
}

export default function ImageShow({ image }: ImageShowProps) {
  const detailImageUrl = imageUrl(image, 816);
  const fullImageUrl = imageUrl(image);
  const [viewMode, setViewMode] = useState<ViewMode>('details');

  const closeViewer = useCallback(() => setViewMode('details'), []);

  useEffect(() => {
    if (viewMode === 'details') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeViewer();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, closeViewer]);

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
            src={detailImageUrl}
            alt={image.description || 'Image'}
            className="w-full cursor-pointer object-contain"
            onClick={() => setViewMode('fit')}
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

      {viewMode !== 'details' && (
        <div className="fixed inset-0 z-50 bg-black">
          <button
            onClick={closeViewer}
            className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
          >
            <X className="h-6 w-6" />
          </button>

          {viewMode === 'fit' ? (
            <div
              className="flex h-full w-full cursor-zoom-in items-center justify-center"
              onClick={() => setViewMode('natural')}
            >
              <img
                src={fullImageUrl}
                alt={image.description || 'Image'}
                className="h-full w-full object-contain"
              />
            </div>
          ) : (
            <div
              className="h-full w-full cursor-zoom-out overflow-auto"
              onClick={() => setViewMode('fit')}
            >
              <img
                src={fullImageUrl}
                alt={image.description || 'Image'}
                className="max-w-none"
              />
            </div>
          )}
        </div>
      )}
    </AppLayout>
  );
}

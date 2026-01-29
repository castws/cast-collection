import { cn } from '@/lib/utils';
import { type CastType, type Gender, type ImageType } from '@/types';

interface ImageTagsProps {
  castTypes: CastType[];
  genders: Gender[];
  imageType: ImageType;
  className?: string;
}

export default function ImageTags({
  castTypes,
  genders,
  imageType,
  className,
}: ImageTagsProps) {
  const castTypesText = castTypes.map((ct) => ct.name).join(', ');
  const gendersText = genders.map((g) => g.name).join(', ');

  return (
    <div className={cn('flex flex-wrap gap-1 font-semibold', className)}>
      <span>{castTypesText}</span>/<span>{gendersText}</span>/
      <span>{imageType.name}</span>
    </div>
  );
}

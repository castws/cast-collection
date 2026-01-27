import { type PaginationLink } from '@/types';
import { Link } from '@inertiajs/react';

interface PaginationProps {
  links: PaginationLink[];
}

export default function Pagination({ links }: PaginationProps) {
  return (
    <nav className="flex justify-center gap-1">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url || '#'}
          className={`rounded px-3 py-2 text-sm ${
            link.active
              ? 'bg-primary text-primary-foreground'
              : link.url
                ? 'hover:bg-muted'
                : 'text-muted-foreground cursor-not-allowed'
          }`}
          preserveScroll
          dangerouslySetInnerHTML={{ __html: link.label }}
        />
      ))}
    </nav>
  );
}

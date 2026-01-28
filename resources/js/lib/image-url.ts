/**
 * Build an image URL, optionally requesting a resized version.
 */
export function imageUrl(
    image: { id: number; file_path: string },
    width?: number,
): string {
    if (width) {
        return route('images.resize', { image: image.id, width });
    }

    return `/storage/${image.file_path}`;
}

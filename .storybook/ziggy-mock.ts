/**
 * Mock implementation of ziggy-js for Storybook
 *
 * For images.resize, we return static paths since Storybook doesn't have
 * a backend to actually resize images. The sample images are served from
 * .storybook/public/images/ and available at /storage/images/
 */
export function route(name: string, params?: Record<string, unknown>): string {
  if (name === 'images.resize' && params) {
    // In Storybook, just return the static image path (no actual resizing)
    // The sample images are at /storage/images/sample-{id}.jpg
    return `/storage/images/sample-${params.image}.jpg`;
  }
  if (name === 'images.show' && params) {
    return `/images/${params}`;
  }
  return '#';
}

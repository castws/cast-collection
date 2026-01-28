import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react-vite';
import { beforeAll, vi } from 'vitest';

import * as projectAnnotations from './preview';

// Mock ziggy-js for Storybook - just return static paths
vi.mock('ziggy-js', () => ({
    route: (name: string, params?: Record<string, unknown>) => {
        if (name === 'images.resize' && params) {
            // In Storybook, just return the static image path (no actual resizing)
            return `/storage/images/sample-${params.image}.jpg`;
        }
        if (name === 'images.show' && params) {
            return `/images/${params}`;
        }
        return '#';
    },
}));

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);

beforeAll(project.beforeAll);
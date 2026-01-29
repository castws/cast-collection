import path from 'path';
import { fileURLToPath } from 'url';
import type { StorybookConfig } from '@storybook/react-vite';
import type { InlineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  "stories": [
    "../resources/js/components/**/*.mdx",
    "../resources/js/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "staticDirs": [
    { from: './public', to: '/storage' }
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite",
  async viteFinal(config: InlineConfig) {
    // Mock ziggy-js for Storybook
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      'ziggy-js': path.resolve(__dirname, 'ziggy-mock.ts'),
    };
    return config;
  },
};
export default config;
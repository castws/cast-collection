import type { Preview } from '@storybook/react-vite';
import { route as routeMock } from './ziggy-mock';
import '../resources/css/app.css';

// Provide route as a global for Storybook (matches Laravel's behavior)
declare global {
  // eslint-disable-next-line no-var
  var route: typeof routeMock;
}
globalThis.route = routeMock;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },

    backgrounds: {
      disable: true,
    },
  },

  decorators: [
    (Story) => {
      return (
        <div className="bg-background text-foreground p-4">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;

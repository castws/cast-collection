import type { Meta, StoryObj } from '@storybook/react-vite';
import AppLogo from './app-logo';

const meta: Meta<typeof AppLogo> = {
  title: 'Components/AppLogo',
  component: AppLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center">
      <AppLogo />
    </div>
  ),
};

export const InSidebarContext: Story = {
  render: () => (
    <div className="bg-sidebar text-sidebar-foreground w-64 rounded-lg p-4">
      <div className="flex items-center">
        <AppLogo />
      </div>
    </div>
  ),
};

export const OnDarkBackground: Story = {
  render: () => (
    <div className="flex items-center rounded-lg bg-neutral-900 p-4">
      <div className="dark flex items-center">
        <AppLogo />
      </div>
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="rounded-lg bg-white p-4">
        <div className="flex items-center">
          <AppLogo />
        </div>
        <p className="text-muted-foreground mt-2 text-xs">Light mode</p>
      </div>
      <div className="dark rounded-lg bg-neutral-900 p-4">
        <div className="flex items-center">
          <AppLogo />
        </div>
        <p className="text-muted-foreground mt-2 text-xs">Dark mode</p>
      </div>
    </div>
  ),
};

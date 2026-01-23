import type { Meta, StoryObj } from '@storybook/react-vite';
import AppLogoIcon from './app-logo-icon';

const meta: Meta<typeof AppLogoIcon> = {
  title: 'Components/AppLogoIcon',
  component: AppLogoIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'CSS classes for styling the icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'h-8 w-8 fill-current text-black dark:text-white',
  },
};

export const Small: Story = {
  args: {
    className: 'h-4 w-4 fill-current text-black dark:text-white',
  },
};

export const Medium: Story = {
  args: {
    className: 'h-6 w-6 fill-current text-black dark:text-white',
  },
};

export const Large: Story = {
  args: {
    className: 'h-12 w-12 fill-current text-black dark:text-white',
  },
};

export const ExtraLarge: Story = {
  args: {
    className: 'h-16 w-16 fill-current text-black dark:text-white',
  },
};

export const Colored: Story = {
  render: () => (
    <div className="flex gap-4">
      <AppLogoIcon className="h-8 w-8 fill-current text-blue-500" />
      <AppLogoIcon className="h-8 w-8 fill-current text-green-500" />
      <AppLogoIcon className="h-8 w-8 fill-current text-purple-500" />
      <AppLogoIcon className="h-8 w-8 fill-current text-red-500" />
      <AppLogoIcon className="h-8 w-8 fill-current text-orange-500" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="text-center">
        <AppLogoIcon className="h-4 w-4 fill-current" />
        <p className="text-muted-foreground mt-1 text-xs">16px</p>
      </div>
      <div className="text-center">
        <AppLogoIcon className="h-6 w-6 fill-current" />
        <p className="text-muted-foreground mt-1 text-xs">24px</p>
      </div>
      <div className="text-center">
        <AppLogoIcon className="h-8 w-8 fill-current" />
        <p className="text-muted-foreground mt-1 text-xs">32px</p>
      </div>
      <div className="text-center">
        <AppLogoIcon className="h-12 w-12 fill-current" />
        <p className="text-muted-foreground mt-1 text-xs">48px</p>
      </div>
      <div className="text-center">
        <AppLogoIcon className="h-16 w-16 fill-current" />
        <p className="text-muted-foreground mt-1 text-xs">64px</p>
      </div>
    </div>
  ),
};

export const InContainer: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-lg">
        <AppLogoIcon className="h-6 w-6 fill-current" />
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
        <AppLogoIcon className="h-6 w-6 fill-current" />
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
        <AppLogoIcon className="h-6 w-6 fill-current text-white" />
      </div>
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import AppearanceToggleTab from './appearance-tabs';

const meta: Meta<typeof AppearanceToggleTab> = {
  title: 'Components/AppearanceTabs',
  component: AppearanceToggleTab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomClass: Story = {
  args: {
    className: 'shadow-md',
  },
};

export const InSettingsContext: Story = {
  render: () => (
    <div className="w-[400px] space-y-4 rounded-lg border p-6">
      <div className="space-y-1">
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-muted-foreground text-sm">
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
      </div>
      <AppearanceToggleTab />
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="bg-card text-card-foreground w-[350px] rounded-xl border p-6 shadow">
      <div className="mb-4">
        <h4 className="font-semibold">Theme Preference</h4>
        <p className="text-muted-foreground text-sm">
          Select your preferred theme
        </p>
      </div>
      <AppearanceToggleTab />
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-4">
        <p className="text-muted-foreground mb-2 text-sm">Light background</p>
        <AppearanceToggleTab />
      </div>
      <div className="dark rounded-lg bg-neutral-900 p-4">
        <p className="text-muted-foreground mb-2 text-sm">Dark background</p>
        <AppearanceToggleTab />
      </div>
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import HeadingSmall from './heading-small';

const meta: Meta<typeof HeadingSmall> = {
  title: 'Components/HeadingSmall',
  component: HeadingSmall,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The section heading text',
    },
    description: {
      control: 'text',
      description: 'Optional description text below the title',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Section Title',
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Profile Information',
    description: 'Update your account profile information and email address.',
  },
};

export const PasswordSection: Story = {
  args: {
    title: 'Update Password',
    description:
      'Ensure your account is using a long, random password to stay secure.',
  },
};

export const DeleteAccountSection: Story = {
  args: {
    title: 'Delete Account',
    description: 'Permanently delete your account and all associated data.',
  },
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-6">
      <HeadingSmall
        title="Profile Information"
        description="Update your account's profile information and email address."
      />
      <div className="bg-muted/50 h-32 rounded-lg border border-dashed p-4">
        <span className="text-muted-foreground text-sm">
          Form content goes here
        </span>
      </div>
    </div>
  ),
};

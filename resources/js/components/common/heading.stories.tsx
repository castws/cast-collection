import type { Meta, StoryObj } from '@storybook/react-vite';
import Heading from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main heading text',
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
    title: 'Page Title',
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Settings',
    description: 'Manage your account settings and preferences.',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'This is a very long page title that might wrap to multiple lines',
    description:
      'With an equally descriptive explanation of what this page contains.',
  },
};

export const ProfileExample: Story = {
  args: {
    title: 'Profile',
    description: 'Update your profile information and email address.',
  },
};

export const DashboardExample: Story = {
  args: {
    title: 'Dashboard',
    description: 'Welcome back! Here is an overview of your activity.',
  },
};

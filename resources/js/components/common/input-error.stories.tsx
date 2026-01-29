import type { Meta, StoryObj } from '@storybook/react-vite';
import InputError from './input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof InputError> = {
  title: 'Components/InputError',
  component: InputError,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: 'The error message to display',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'This field is required.',
  },
};

export const NoMessage: Story = {
  args: {
    message: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'When no message is provided, the component renders nothing.',
      },
    },
  },
};

export const LongMessage: Story = {
  args: {
    message:
      'The password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.',
  },
};

export const EmailError: Story = {
  args: {
    message: 'Please enter a valid email address.',
  },
};

export const PasswordError: Story = {
  args: {
    message: 'The password confirmation does not match.',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        aria-invalid="true"
        className="border-red-500"
      />
      <InputError message="Please enter a valid email address." />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email2">Email</Label>
        <Input
          id="email2"
          type="email"
          placeholder="Enter your email"
          aria-invalid="true"
          className="border-red-500"
        />
        <InputError message="This email is already registered." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          aria-invalid="true"
          className="border-red-500"
        />
        <InputError message="Password must be at least 8 characters." />
      </div>
    </div>
  ),
};

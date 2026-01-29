import type { User } from '@/types';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserInfo } from './user-info';

const mockUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  email_verified_at: '2024-01-01T00:00:00.000Z',
  created_at: '2024-01-01T00:00:00.000Z',
  updated_at: '2024-01-01T00:00:00.000Z',
};

const mockUserNoAvatar: User = {
  ...mockUser,
  id: 2,
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  avatar: '',
};

const mockUserLongName: User = {
  ...mockUser,
  id: 3,
  name: 'Alexander Christopher Montgomery III',
  email: 'alexander.montgomery@verylongcompanyname.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
};

const mockUserSingleName: User = {
  ...mockUser,
  id: 4,
  name: 'Madonna',
  email: 'madonna@example.com',
  avatar: '',
};

const meta: Meta<typeof UserInfo> = {
  title: 'Components/UserInfo',
  component: UserInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showEmail: {
      control: 'boolean',
      description: 'Whether to show the email address',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: mockUser,
    showEmail: false,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <UserInfo {...args} />
    </div>
  ),
};

export const WithEmail: Story = {
  args: {
    user: mockUser,
    showEmail: true,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <UserInfo {...args} />
    </div>
  ),
};

export const FallbackAvatar: Story = {
  args: {
    user: mockUserNoAvatar,
    showEmail: false,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <UserInfo {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'When no avatar is provided, initials are displayed as fallback.',
      },
    },
  },
};

export const FallbackAvatarWithEmail: Story = {
  args: {
    user: mockUserNoAvatar,
    showEmail: true,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <UserInfo {...args} />
    </div>
  ),
};

export const LongName: Story = {
  args: {
    user: mockUserLongName,
    showEmail: true,
  },
  render: (args) => (
    <div className="flex w-[200px] items-center gap-2">
      <UserInfo {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Long names and emails are truncated to fit the container.',
      },
    },
  },
};

export const SingleName: Story = {
  args: {
    user: mockUserSingleName,
    showEmail: true,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <UserInfo {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Single names show a single initial in the fallback avatar.',
      },
    },
  },
};

export const InDropdownContext: Story = {
  render: () => (
    <div className="bg-popover text-popover-foreground w-56 rounded-md border p-1 shadow-md">
      <div className="flex items-center gap-2 px-2 py-1.5">
        <UserInfo user={mockUser} showEmail={true} />
      </div>
      <div className="bg-border my-1 h-px" />
      <div className="text-muted-foreground px-2 py-1.5 text-sm">Settings</div>
      <div className="text-muted-foreground px-2 py-1.5 text-sm">Log out</div>
    </div>
  ),
};

export const InSidebarContext: Story = {
  render: () => (
    <div className="bg-sidebar text-sidebar-foreground w-64 rounded-lg p-2">
      <div className="hover:bg-sidebar-accent flex items-center gap-2 rounded-md p-2">
        <UserInfo user={mockUser} showEmail={false} />
      </div>
    </div>
  ),
};

export const MultipleUsers: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center gap-2 rounded-md border p-2">
        <UserInfo user={mockUser} showEmail={true} />
      </div>
      <div className="flex items-center gap-2 rounded-md border p-2">
        <UserInfo user={mockUserNoAvatar} showEmail={true} />
      </div>
      <div className="flex items-center gap-2 rounded-md border p-2">
        <UserInfo user={mockUserSingleName} showEmail={true} />
      </div>
    </div>
  ),
};

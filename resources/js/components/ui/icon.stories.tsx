import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './icon';
import { Home, Settings, User, Mail, Bell, Heart, Star, Search } from 'lucide-react';

const meta: Meta<typeof Icon> = {
    title: 'UI/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        iconNode: {
            control: 'select',
            options: ['Home', 'Settings', 'User', 'Mail', 'Bell', 'Heart', 'Star', 'Search'],
            mapping: {
                Home,
                Settings,
                User,
                Mail,
                Bell,
                Heart,
                Star,
                Search,
            },
        },
        className: {
            control: 'text',
        },
    },
    args: {
        iconNode: Home,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomSize: Story = {
    args: {
        iconNode: Settings,
        className: 'size-8',
    },
};

export const WithColor: Story = {
    args: {
        iconNode: Heart,
        className: 'size-6 text-red-500',
    },
};

export const NullIcon: Story = {
    args: {
        iconNode: null,
    },
};

export const AllIcons: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Icon iconNode={Home} className="size-6" />
            <Icon iconNode={Settings} className="size-6" />
            <Icon iconNode={User} className="size-6" />
            <Icon iconNode={Mail} className="size-6" />
            <Icon iconNode={Bell} className="size-6" />
            <Icon iconNode={Heart} className="size-6" />
            <Icon iconNode={Star} className="size-6" />
            <Icon iconNode={Search} className="size-6" />
        </div>
    ),
};

export const DifferentSizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Icon iconNode={Star} className="size-4" />
            <Icon iconNode={Star} className="size-6" />
            <Icon iconNode={Star} className="size-8" />
            <Icon iconNode={Star} className="size-10" />
            <Icon iconNode={Star} className="size-12" />
        </div>
    ),
};

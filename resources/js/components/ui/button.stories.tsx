import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { Mail, Loader2, ChevronRight } from 'lucide-react';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
        },
        disabled: {
            control: 'boolean',
        },
        asChild: {
            control: 'boolean',
        },
    },
    args: {
        children: 'Button',
        variant: 'default',
        size: 'default',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Destructive: Story = {
    args: { variant: 'destructive' },
};

export const Outline: Story = {
    args: { variant: 'outline' },
};

export const Secondary: Story = {
    args: { variant: 'secondary' },
};

export const Ghost: Story = {
    args: { variant: 'ghost' },
};

export const Link: Story = {
    args: { variant: 'link' },
};

export const Small: Story = {
    args: { size: 'sm' },
};

export const Large: Story = {
    args: { size: 'lg' },
};

export const IconButton: Story = {
    args: {
        size: 'icon',
        children: <Mail className="size-4" />,
        'aria-label': 'Send email',
    },
};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <Mail className="size-4" />
                Login with Email
            </>
        ),
    },
};

export const WithIconRight: Story = {
    args: {
        children: (
            <>
                Next
                <ChevronRight className="size-4" />
            </>
        ),
    },
};

export const Disabled: Story = {
    args: { disabled: true },
};

export const Loading: Story = {
    args: {
        disabled: true,
        children: (
            <>
                <Loader2 className="animate-spin" />
                Please wait
            </>
        ),
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Icon button">
                <Mail className="size-4" />
            </Button>
        </div>
    ),
};

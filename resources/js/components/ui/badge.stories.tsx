import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';
import { Check, X, AlertCircle } from 'lucide-react';

const meta: Meta<typeof Badge> = {
    title: 'UI/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary', 'destructive', 'outline'],
        },
        asChild: {
            control: 'boolean',
        },
    },
    args: {
        children: 'Badge',
        variant: 'default',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
    args: { variant: 'secondary' },
};

export const Destructive: Story = {
    args: { variant: 'destructive' },
};

export const Outline: Story = {
    args: { variant: 'outline' },
};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <Check />
                Verified
            </>
        ),
    },
};

export const DestructiveWithIcon: Story = {
    args: {
        variant: 'destructive',
        children: (
            <>
                <X />
                Rejected
            </>
        ),
    },
};

export const OutlineWithIcon: Story = {
    args: {
        variant: 'outline',
        children: (
            <>
                <AlertCircle />
                Pending
            </>
        ),
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
        </div>
    ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlaceholderPattern } from './placeholder-pattern';

const meta: Meta<typeof PlaceholderPattern> = {
    title: 'UI/PlaceholderPattern',
    component: PlaceholderPattern,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: 'h-32 w-64 stroke-muted-foreground/20',
    },
};

export const Large: Story = {
    args: {
        className: 'h-64 w-full stroke-muted-foreground/20',
    },
};

export const InCard: Story = {
    render: () => (
        <div className="border-border overflow-hidden rounded-lg border">
            <PlaceholderPattern className="h-48 w-80 stroke-muted-foreground/20" />
        </div>
    ),
};

export const AsBackground: Story = {
    render: () => (
        <div className="relative h-48 w-80 overflow-hidden rounded-lg">
            <PlaceholderPattern className="absolute inset-0 size-full stroke-muted-foreground/20" />
            <div className="relative flex h-full items-center justify-center">
                <span className="bg-background/80 rounded px-4 py-2 text-sm font-medium">
                    Content overlay
                </span>
            </div>
        </div>
    ),
};

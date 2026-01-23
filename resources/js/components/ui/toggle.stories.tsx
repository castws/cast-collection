import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './toggle';
import { Bold, Italic, Underline } from 'lucide-react';

const meta: Meta<typeof Toggle> = {
    title: 'UI/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'outline'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
        pressed: {
            control: 'boolean',
        },
    },
    args: {
        'aria-label': 'Toggle bold',
        children: <Bold className="size-4" />,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outline: Story = {
    args: { variant: 'outline' },
};

export const Small: Story = {
    args: { size: 'sm' },
};

export const Large: Story = {
    args: { size: 'lg' },
};

export const Pressed: Story = {
    args: { defaultPressed: true },
};

export const Disabled: Story = {
    args: { disabled: true },
};

export const WithText: Story = {
    args: {
        children: (
            <>
                <Italic className="size-4" />
                Italic
            </>
        ),
        'aria-label': 'Toggle italic',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <span className="text-muted-foreground w-20 text-sm">Default:</span>
                <Toggle aria-label="Toggle bold">
                    <Bold className="size-4" />
                </Toggle>
                <Toggle aria-label="Toggle italic">
                    <Italic className="size-4" />
                </Toggle>
                <Toggle aria-label="Toggle underline">
                    <Underline className="size-4" />
                </Toggle>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-muted-foreground w-20 text-sm">Outline:</span>
                <Toggle variant="outline" aria-label="Toggle bold">
                    <Bold className="size-4" />
                </Toggle>
                <Toggle variant="outline" aria-label="Toggle italic">
                    <Italic className="size-4" />
                </Toggle>
                <Toggle variant="outline" aria-label="Toggle underline">
                    <Underline className="size-4" />
                </Toggle>
            </div>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Toggle size="sm" aria-label="Toggle bold small">
                <Bold className="size-4" />
            </Toggle>
            <Toggle size="default" aria-label="Toggle bold default">
                <Bold className="size-4" />
            </Toggle>
            <Toggle size="lg" aria-label="Toggle bold large">
                <Bold className="size-4" />
            </Toggle>
        </div>
    ),
};

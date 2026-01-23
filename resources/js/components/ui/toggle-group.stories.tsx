import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Underline } from 'lucide-react';
import type { ComponentProps } from 'react';

type ToggleGroupProps = ComponentProps<typeof ToggleGroup>;

const meta: Meta<ToggleGroupProps> = {
    title: 'UI/ToggleGroup',
    component: ToggleGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['single', 'multiple'],
        },
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
    },
    args: {
        type: 'single',
    },
};

export default meta;
type Story = StoryObj<ToggleGroupProps>;

export const Single: Story = {
    render: (args: ToggleGroupProps) => (
        <ToggleGroup {...args}>
            <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="size-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Multiple: Story = {
    args: {
        type: 'multiple',
    },
    render: (args: ToggleGroupProps) => (
        <ToggleGroup {...args}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="size-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Outline: Story = {
    args: {
        variant: 'outline',
    },
    render: (args: ToggleGroupProps) => (
        <ToggleGroup {...args}>
            <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="size-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Small: Story = {
    args: {
        size: 'sm',
    },
    render: (args: ToggleGroupProps) => (
        <ToggleGroup {...args}>
            <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="size-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
    render: (args: ToggleGroupProps) => (
        <ToggleGroup {...args}>
            <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="size-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: (args: ToggleGroupProps) => (
        <ToggleGroup {...args}>
            <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="size-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const WithDefaultValue: Story = {
    render: () => (
        <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="size-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

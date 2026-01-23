import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './label';
import { Input } from './input';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Label> = {
    title: 'UI/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        children: 'Label',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInput: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Enter your name" />
        </div>
    ),
};

export const WithCheckbox: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
    ),
};

export const Required: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="required-field">
                Required Field <span className="text-destructive">*</span>
            </Label>
            <Input type="text" id="required-field" required />
        </div>
    ),
};

export const DisabledContext: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5" data-disabled="true">
            <Label htmlFor="disabled">Disabled Label</Label>
            <Input type="text" id="disabled" disabled placeholder="Disabled input" />
        </div>
    ),
};

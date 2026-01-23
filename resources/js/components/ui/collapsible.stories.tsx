import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible';
import { Button } from './button';
import { ChevronsUpDown } from 'lucide-react';

const meta: Meta<typeof Collapsible> = {
    title: 'UI/Collapsible',
    component: Collapsible,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Collapsible className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <ChevronsUpDown className="size-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @stitches/react
                </div>
            </CollapsibleContent>
        </Collapsible>
    ),
};

export const DefaultOpen: Story = {
    render: () => (
        <Collapsible className="w-[350px] space-y-2" defaultOpen>
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">Expanded by default</h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <ChevronsUpDown className="size-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 text-sm shadow-sm">
                    This content is visible by default because the Collapsible has defaultOpen set to
                    true.
                </div>
            </CollapsibleContent>
        </Collapsible>
    ),
};

export const Controlled: Story = {
    render: function ControlledCollapsible() {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className="w-[350px] space-y-4">
                <Button onClick={() => setIsOpen(!isOpen)} variant="outline">
                    {isOpen ? 'Close' : 'Open'} externally
                </Button>
                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
                    <div className="flex items-center justify-between space-x-4 px-4">
                        <h4 className="text-sm font-semibold">Controlled Collapsible</h4>
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm">
                                <ChevronsUpDown className="size-4" />
                                <span className="sr-only">Toggle</span>
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="space-y-2">
                        <div className="rounded-md border px-4 py-2 text-sm shadow-sm">
                            This collapsible is controlled by external state. You can toggle it using
                            the button above or the trigger button.
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => (
        <Collapsible className="w-[350px] space-y-2" disabled>
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">Disabled Collapsible</h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" disabled>
                        <ChevronsUpDown className="size-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 text-sm shadow-sm">
                    This content cannot be toggled because the Collapsible is disabled.
                </div>
            </CollapsibleContent>
        </Collapsible>
    ),
};

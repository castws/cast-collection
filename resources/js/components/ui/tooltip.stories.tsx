import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip';
import { Button } from './button';
import { Plus } from 'lucide-react';

const meta: Meta<typeof Tooltip> = {
    title: 'UI/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Add to library</p>
            </TooltipContent>
        </Tooltip>
    ),
};

export const WithIcon: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                    <Plus className="size-4" />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Add new item</p>
            </TooltipContent>
        </Tooltip>
    ),
};

export const Positions: Story = {
    render: () => (
        <div className="flex items-center gap-8">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Top</Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                    <p>Tooltip on top</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                    <p>Tooltip on right</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    <p>Tooltip on bottom</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Left</Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                    <p>Tooltip on left</p>
                </TooltipContent>
            </Tooltip>
        </div>
    ),
};

export const WithDelay: Story = {
    render: () => (
        <TooltipProvider delayDuration={500}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover (500ms delay)</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>This tooltip has a 500ms delay</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
};

export const LongContent: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline">Long tooltip</Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>
                    This is a longer tooltip that contains more detailed information about the action
                    or element.
                </p>
            </TooltipContent>
        </Tooltip>
    ),
};

export const MultipleTooltips: Story = {
    render: () => (
        <TooltipProvider>
            <div className="flex gap-2">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">First</Button>
                    </TooltipTrigger>
                    <TooltipContent>First tooltip</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Second</Button>
                    </TooltipTrigger>
                    <TooltipContent>Second tooltip</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Third</Button>
                    </TooltipTrigger>
                    <TooltipContent>Third tooltip</TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    ),
};

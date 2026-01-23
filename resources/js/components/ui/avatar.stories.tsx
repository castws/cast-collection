import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';

const meta: Meta<typeof Avatar> = {
    title: 'UI/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    ),
};

export const WithFallback: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="/broken-image.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
    ),
};

export const FallbackOnly: Story = {
    render: () => (
        <Avatar>
            <AvatarFallback>AB</AvatarFallback>
        </Avatar>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar className="size-6">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="size-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="size-10">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="size-12">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="size-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    ),
};

export const Group: Story = {
    render: () => (
        <div className="flex -space-x-2">
            <Avatar className="border-background border-2">
                <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Avatar className="border-background border-2">
                <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <Avatar className="border-background border-2">
                <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <Avatar className="border-background border-2">
                <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <Avatar className="border-background border-2">
                <AvatarFallback>+3</AvatarFallback>
            </Avatar>
        </div>
    ),
};

export const WithStatus: Story = {
    render: () => (
        <div className="relative">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-green-500" />
        </div>
    ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
    SheetClose,
} from './sheet';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';

const meta: Meta<typeof Sheet> = {
    title: 'UI/Sheet',
    component: Sheet,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Right</Button>
            </SheetTrigger>
            <SheetContent side="right">
                <SheetHeader>
                    <SheetTitle>Edit Profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 px-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    ),
};

export const Left: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Left</Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription>Browse through the available sections.</SheetDescription>
                </SheetHeader>
                <nav className="grid gap-2 px-4 py-4">
                    <a href="#" className="hover:bg-accent rounded-md p-2">
                        Dashboard
                    </a>
                    <a href="#" className="hover:bg-accent rounded-md p-2">
                        Projects
                    </a>
                    <a href="#" className="hover:bg-accent rounded-md p-2">
                        Settings
                    </a>
                    <a href="#" className="hover:bg-accent rounded-md p-2">
                        Help
                    </a>
                </nav>
            </SheetContent>
        </Sheet>
    ),
};

export const Top: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Top</Button>
            </SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                    <SheetTitle>Notifications</SheetTitle>
                    <SheetDescription>You have 3 new notifications.</SheetDescription>
                </SheetHeader>
                <div className="px-4 py-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary size-2 rounded-full" />
                            <p className="text-sm">New comment on your post</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary size-2 rounded-full" />
                            <p className="text-sm">Someone mentioned you</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary size-2 rounded-full" />
                            <p className="text-sm">Your report is ready</p>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    ),
};

export const Bottom: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Bottom</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
                <SheetHeader>
                    <SheetTitle>Cookie Preferences</SheetTitle>
                    <SheetDescription>
                        Manage your cookie settings. You can enable or disable different types of
                        cookies below.
                    </SheetDescription>
                </SheetHeader>
                <div className="px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Essential Cookies</p>
                            <p className="text-muted-foreground text-sm">
                                Required for the website to function
                            </p>
                        </div>
                        <Button variant="outline" size="sm" disabled>
                            Always On
                        </Button>
                    </div>
                </div>
                <SheetFooter>
                    <Button variant="outline">Reject All</Button>
                    <Button>Accept All</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    ),
};

export const AllSides: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">Top</Button>
                </SheetTrigger>
                <SheetContent side="top">
                    <SheetHeader>
                        <SheetTitle>Top Sheet</SheetTitle>
                        <SheetDescription>This sheet opens from the top.</SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">Right</Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <SheetHeader>
                        <SheetTitle>Right Sheet</SheetTitle>
                        <SheetDescription>This sheet opens from the right.</SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                    <SheetHeader>
                        <SheetTitle>Bottom Sheet</SheetTitle>
                        <SheetDescription>This sheet opens from the bottom.</SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">Left</Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Left Sheet</SheetTitle>
                        <SheetDescription>This sheet opens from the left.</SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    ),
};

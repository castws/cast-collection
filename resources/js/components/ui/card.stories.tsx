import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';

const meta: Meta<typeof Card> = {
    title: 'UI/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card content goes here.</p>
            </CardContent>
            <CardFooter>
                <Button>Action</Button>
            </CardFooter>
        </Card>
    ),
};

export const WithForm: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Enter your email below to create your account.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Create account</Button>
            </CardFooter>
        </Card>
    ),
};

export const HeaderOnly: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
        </Card>
    ),
};

export const ContentOnly: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardContent>
                <p className="text-muted-foreground text-sm">
                    This card only has content, no header or footer.
                </p>
            </CardContent>
        </Card>
    ),
};

export const WithFooterActions: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Delete Account</CardTitle>
                <CardDescription>This action cannot be undone.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-sm">
                    Are you sure you want to delete your account? All of your data will be permanently removed.
                </p>
            </CardContent>
            <CardFooter className="justify-between">
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Delete</Button>
            </CardFooter>
        </Card>
    ),
};

export const Stats: Story = {
    render: () => (
        <div className="grid gap-4 md:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardDescription>Total Revenue</CardDescription>
                    <CardTitle className="text-2xl">$45,231.89</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-xs">+20.1% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardDescription>Subscriptions</CardDescription>
                    <CardTitle className="text-2xl">+2,350</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-xs">+180.1% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardDescription>Active Now</CardDescription>
                    <CardTitle className="text-2xl">+573</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-xs">+201 since last hour</p>
                </CardContent>
            </Card>
        </div>
    ),
};

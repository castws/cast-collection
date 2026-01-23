import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertTitle, AlertDescription } from './alert';
import { AlertCircle, CheckCircle2, Info as InfoIcon, Terminal, TriangleAlert } from 'lucide-react';

const meta: Meta<typeof Alert> = {
    title: 'UI/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Alert className="w-[450px]">
            <Terminal className="size-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
        </Alert>
    ),
};

export const Destructive: Story = {
    render: () => (
        <Alert variant="destructive" className="w-[450px]">
            <AlertCircle className="size-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
        </Alert>
    ),
};

export const Info: Story = {
    render: () => (
        <Alert className="w-[450px]">
            <InfoIcon className="size-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
                This is an informational alert. It provides additional context or details.
            </AlertDescription>
        </Alert>
    ),
};

export const Success: Story = {
    render: () => (
        <Alert className="w-[450px]">
            <CheckCircle2 className="size-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Your changes have been saved successfully.</AlertDescription>
        </Alert>
    ),
};

export const Warning: Story = {
    render: () => (
        <Alert className="w-[450px]">
            <TriangleAlert className="size-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
                Your account is nearing its storage limit. Consider upgrading your plan.
            </AlertDescription>
        </Alert>
    ),
};

export const WithoutIcon: Story = {
    render: () => (
        <Alert className="w-[450px]">
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>This alert does not include an icon.</AlertDescription>
        </Alert>
    ),
};

export const TitleOnly: Story = {
    render: () => (
        <Alert className="w-[450px]">
            <InfoIcon className="size-4" />
            <AlertTitle>This alert only has a title, no description.</AlertTitle>
        </Alert>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex w-[450px] flex-col gap-4">
            <Alert>
                <InfoIcon className="size-4" />
                <AlertTitle>Default</AlertTitle>
                <AlertDescription>This is the default alert variant.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
                <AlertCircle className="size-4" />
                <AlertTitle>Destructive</AlertTitle>
                <AlertDescription>This is the destructive alert variant.</AlertDescription>
            </Alert>
        </div>
    ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import AppearanceToggleDropdown from './appearance-dropdown';

const meta: Meta<typeof AppearanceToggleDropdown> = {
    title: 'Components/AppearanceDropdown',
    component: AppearanceToggleDropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Additional CSS classes',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InHeader: Story = {
    render: () => (
        <div className="flex w-[400px] items-center justify-between rounded-lg border px-4 py-2">
            <span className="font-medium">My Application</span>
            <div className="flex items-center gap-2">
                <AppearanceToggleDropdown />
            </div>
        </div>
    ),
};

export const InNavbar: Story = {
    render: () => (
        <nav className="bg-background flex w-full items-center justify-between border-b px-6 py-3">
            <div className="flex items-center gap-6">
                <span className="text-lg font-bold">Logo</span>
                <div className="text-muted-foreground flex gap-4 text-sm">
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>
            </div>
            <AppearanceToggleDropdown />
        </nav>
    ),
};

export const WithOtherActions: Story = {
    render: () => (
        <div className="flex items-center gap-1">
            <button className="hover:bg-accent rounded-md p-2">
                <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </button>
            <button className="hover:bg-accent rounded-md p-2">
                <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>
            </button>
            <AppearanceToggleDropdown />
        </div>
    ),
};

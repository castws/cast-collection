import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInput,
    SidebarInset,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSkeleton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from './sidebar';
import {
    Home,
    Inbox,
    Calendar,
    Search,
    Settings,
    User,
    ChevronDown,
    Plus,
    MoreHorizontal,
    Folder,
    FileText,
    LogOut,
} from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible';

const meta: Meta<typeof SidebarProvider> = {
    title: 'UI/Sidebar',
    component: SidebarProvider,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className="h-[600px] w-full">
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg">
                                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    A
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-semibold">Acme Inc</span>
                                    <span className="text-xs">Enterprise</span>
                                </div>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Platform</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton isActive tooltip="Home">
                                        <Home />
                                        <span>Home</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton tooltip="Inbox">
                                        <Inbox />
                                        <span>Inbox</span>
                                    </SidebarMenuButton>
                                    <SidebarMenuBadge>24</SidebarMenuBadge>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton tooltip="Calendar">
                                        <Calendar />
                                        <span>Calendar</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton tooltip="Search">
                                        <Search />
                                        <span>Search</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton tooltip="Settings">
                                        <Settings />
                                        <span>Settings</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <User />
                                <span>John Doe</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
                <SidebarRail />
            </Sidebar>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                    <span className="text-muted-foreground text-sm">Dashboard</span>
                </header>
                <main className="flex-1 p-4">
                    <p className="text-muted-foreground">Main content area</p>
                </main>
            </SidebarInset>
        </SidebarProvider>
    ),
};

export const WithSearch: Story = {
    render: () => (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <SidebarInput placeholder="Search..." />
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <Home />
                                        <span>Home</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <Inbox />
                                        <span>Inbox</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <main className="flex-1 p-4">
                    <p className="text-muted-foreground">Content</p>
                </main>
            </SidebarInset>
        </SidebarProvider>
    ),
};

export const WithCollapsibleGroup: Story = {
    render: () => (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <Collapsible defaultOpen className="group/collapsible">
                        <SidebarGroup>
                            <SidebarGroupLabel asChild>
                                <CollapsibleTrigger className="flex w-full items-center">
                                    Projects
                                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>
                            <CollapsibleContent>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        <SidebarMenuItem>
                                            <SidebarMenuButton>
                                                <Folder />
                                                <span>Project Alpha</span>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                        <SidebarMenuItem>
                                            <SidebarMenuButton>
                                                <Folder />
                                                <span>Project Beta</span>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                        <SidebarMenuItem>
                                            <SidebarMenuButton>
                                                <Folder />
                                                <span>Project Gamma</span>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>
                        </SidebarGroup>
                    </Collapsible>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <main className="flex-1 p-4">
                    <p className="text-muted-foreground">Content</p>
                </main>
            </SidebarInset>
        </SidebarProvider>
    ),
};

export const WithSubmenus: Story = {
    render: () => (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Documents</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <Folder />
                                        <span>My Files</span>
                                    </SidebarMenuButton>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubItem>
                                            <SidebarMenuSubButton isActive>
                                                <FileText />
                                                <span>Document.pdf</span>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                        <SidebarMenuSubItem>
                                            <SidebarMenuSubButton>
                                                <FileText />
                                                <span>Report.docx</span>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                        <SidebarMenuSubItem>
                                            <SidebarMenuSubButton>
                                                <FileText />
                                                <span>Data.xlsx</span>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <main className="flex-1 p-4">
                    <p className="text-muted-foreground">Content</p>
                </main>
            </SidebarInset>
        </SidebarProvider>
    ),
};

export const WithActions: Story = {
    render: () => (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Projects</SidebarGroupLabel>
                        <SidebarGroupAction title="Add Project">
                            <Plus />
                        </SidebarGroupAction>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <Folder />
                                        <span>Project Alpha</span>
                                    </SidebarMenuButton>
                                    <SidebarMenuAction showOnHover title="More options">
                                        <MoreHorizontal />
                                    </SidebarMenuAction>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <Folder />
                                        <span>Project Beta</span>
                                    </SidebarMenuButton>
                                    <SidebarMenuAction showOnHover title="More options">
                                        <MoreHorizontal />
                                    </SidebarMenuAction>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <main className="flex-1 p-4">
                    <p className="text-muted-foreground">Content</p>
                </main>
            </SidebarInset>
        </SidebarProvider>
    ),
};

export const FloatingVariant: Story = {
    render: () => (
        <SidebarProvider>
            <Sidebar variant="floating">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg">
                                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    F
                                </div>
                                <span className="font-semibold">Floating</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <Home />
                                        <span>Home</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <Settings />
                                        <span>Settings</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <main className="flex-1 p-4">
                    <p className="text-muted-foreground">Floating variant sidebar</p>
                </main>
            </SidebarInset>
        </SidebarProvider>
    ),
};

export const InsetVariant: Story = {
    render: () => (
        <SidebarProvider>
            <Sidebar variant="inset">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg">
                                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    I
                                </div>
                                <span className="font-semibold">Inset</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <Home />
                                        <span>Home</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <Settings />
                                        <span>Settings</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <main className="flex-1 p-4">
                    <p className="text-muted-foreground">Inset variant sidebar</p>
                </main>
            </SidebarInset>
        </SidebarProvider>
    ),
};

export const RightSide: Story = {
    render: () => (
        <SidebarProvider>
            <SidebarInset>
                <main className="flex-1 p-4">
                    <p className="text-muted-foreground">Content on the left</p>
                </main>
            </SidebarInset>
            <Sidebar side="right">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg">
                                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    R
                                </div>
                                <span className="font-semibold">Right Sidebar</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <Home />
                                        <span>Home</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
    ),
};

export const Skeleton: Story = {
    render: () => (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Loading...</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <SidebarMenuItem key={i}>
                                        <SidebarMenuSkeleton showIcon />
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <main className="flex-1 p-4">
                    <p className="text-muted-foreground">Skeleton loading state</p>
                </main>
            </SidebarInset>
        </SidebarProvider>
    ),
};

export const CollapsedByDefault: Story = {
    render: () => (
        <SidebarProvider defaultOpen={false}>
            <Sidebar collapsible="icon">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton tooltip="Home">
                                        <Home />
                                        <span>Home</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton tooltip="Inbox">
                                        <Inbox />
                                        <span>Inbox</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton tooltip="Settings">
                                        <Settings />
                                        <span>Settings</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton tooltip="Logout">
                                <LogOut />
                                <span>Logout</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
                <SidebarRail />
            </Sidebar>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                    <span className="text-muted-foreground text-sm">
                        Collapsed by default (icon mode)
                    </span>
                </header>
                <main className="flex-1 p-4">
                    <p className="text-muted-foreground">
                        Use the toggle button or Ctrl+B to expand
                    </p>
                </main>
            </SidebarInset>
        </SidebarProvider>
    ),
};

import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fragment } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

/**
 * This story demonstrates the Breadcrumbs pattern used in the app.
 * The actual Breadcrumbs component uses Inertia's Link component,
 * so we recreate the pattern here with regular anchor tags for Storybook.
 */

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItemType[];
}

function BreadcrumbsDemo({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <>
      {breadcrumbs.length > 0 && (
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <Fragment key={index}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{item.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={item.href}>
                        {item.title}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </>
  );
}

const meta: Meta<typeof BreadcrumbsDemo> = {
  title: 'Components/Breadcrumbs',
  component: BreadcrumbsDemo,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleItem: Story = {
  args: {
    breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }],
  },
};

export const TwoLevels: Story = {
  args: {
    breadcrumbs: [
      { title: 'Dashboard', href: '/dashboard' },
      { title: 'Settings', href: '/settings' },
    ],
  },
};

export const ThreeLevels: Story = {
  args: {
    breadcrumbs: [
      { title: 'Dashboard', href: '/dashboard' },
      { title: 'Settings', href: '/settings' },
      { title: 'Profile', href: '/settings/profile' },
    ],
  },
};

export const FourLevels: Story = {
  args: {
    breadcrumbs: [
      { title: 'Dashboard', href: '/dashboard' },
      { title: 'Projects', href: '/projects' },
      { title: 'Website Redesign', href: '/projects/123' },
      { title: 'Tasks', href: '/projects/123/tasks' },
    ],
  },
};

export const Empty: Story = {
  args: {
    breadcrumbs: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'When the breadcrumbs array is empty, nothing is rendered.',
      },
    },
  },
};

export const LongTitles: Story = {
  args: {
    breadcrumbs: [
      { title: 'Application Dashboard', href: '/dashboard' },
      { title: 'User Management Settings', href: '/settings' },
      { title: 'Profile Configuration Options', href: '/settings/profile' },
    ],
  },
};

export const InHeader: Story = {
  render: () => (
    <div className="border-b pb-4">
      <div className="flex h-12 items-center gap-4">
        <button className="hover:bg-accent rounded-md p-2">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <BreadcrumbsDemo
          breadcrumbs={[
            { title: 'Dashboard', href: '/dashboard' },
            { title: 'Settings', href: '/settings' },
            { title: 'Profile', href: '/settings/profile' },
          ]}
        />
      </div>
    </div>
  ),
};

export const SettingsExample: Story = {
  args: {
    breadcrumbs: [
      { title: 'Settings', href: '/settings' },
      { title: 'Profile', href: '/settings/profile' },
    ],
  },
};

export const ECommerceExample: Story = {
  args: {
    breadcrumbs: [
      { title: 'Home', href: '/' },
      { title: 'Electronics', href: '/category/electronics' },
      { title: 'Laptops', href: '/category/electronics/laptops' },
      { title: 'MacBook Pro 16"', href: '/product/macbook-pro-16' },
    ],
  },
};

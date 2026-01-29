import type { PaginationLink } from '@/types';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Pagination from './pagination';

const createPaginationLinks = (
  currentPage: number,
  totalPages: number,
): PaginationLink[] => {
  return [
    {
      url: currentPage > 1 ? `/images?page=${currentPage - 1}` : null,
      label: '&laquo; Previous',
      active: false,
    },
    ...Array.from({ length: totalPages }, (_, i) => ({
      url: `/images?page=${i + 1}`,
      label: String(i + 1),
      active: i + 1 === currentPage,
    })),
    {
      url: currentPage < totalPages ? `/images?page=${currentPage + 1}` : null,
      label: 'Next &raquo;',
      active: false,
    },
  ];
};

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: createPaginationLinks(1, 5),
  },
};

export const MiddlePage: Story = {
  args: {
    links: createPaginationLinks(3, 5),
  },
};

export const LastPage: Story = {
  args: {
    links: createPaginationLinks(5, 5),
  },
};

export const TwoPages: Story = {
  args: {
    links: createPaginationLinks(1, 2),
  },
};

export const ManyPages: Story = {
  args: {
    links: createPaginationLinks(5, 10),
  },
};

export const SinglePage: Story = {
  args: {
    links: createPaginationLinks(1, 1),
  },
};

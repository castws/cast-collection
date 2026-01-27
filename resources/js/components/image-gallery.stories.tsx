import type { Image, PaginatedData } from '@/types';
import type { Meta, StoryObj } from '@storybook/react-vite';
import ImageGallery from './image-gallery';

const mockUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  avatar: undefined,
  email_verified_at: '2024-01-01',
  created_at: '2024-01-01',
  updated_at: '2024-01-01',
};

const mockImageType = {
  id: 1,
  name: 'Recreational',
};

const mockCastTypes = [
  { id: 1, name: 'LLC' },
  { id: 2, name: 'DHS' },
];

const mockGenders = [
  { id: 1, name: 'Male' },
];

const createMockImage = (id: number, overrides?: Partial<Image>): Image => ({
  id,
  user_id: 1,
  image_type_id: 1,
  description: `This is a sample description for image ${id}`,
  file_path: `images/sample-${id}.jpg`,
  created_at: '2024-01-01',
  updated_at: '2024-01-01',
  deleted_at: null,
  user: mockUser,
  image_type: mockImageType,
  cast_types: mockCastTypes,
  genders: mockGenders,
  ...overrides,
});

const createMockPaginatedData = (
  images: Image[],
  page = 1,
  perPage = 12,
  total?: number,
): PaginatedData<Image> => {
  const actualTotal = total ?? images.length;
  const lastPage = Math.ceil(actualTotal / perPage);

  return {
    data: images,
    current_page: page,
    first_page_url: '/dashboard?page=1',
    from: images.length > 0 ? (page - 1) * perPage + 1 : null,
    last_page: lastPage,
    last_page_url: `/dashboard?page=${lastPage}`,
    links: [
      {
        url: page > 1 ? `/dashboard?page=${page - 1}` : null,
        label: '&laquo; Previous',
        active: false,
      },
      ...Array.from({ length: lastPage }, (_, i) => ({
        url: `/dashboard?page=${i + 1}`,
        label: String(i + 1),
        active: i + 1 === page,
      })),
      {
        url: page < lastPage ? `/dashboard?page=${page + 1}` : null,
        label: 'Next &raquo;',
        active: false,
      },
    ],
    next_page_url: page < lastPage ? `/dashboard?page=${page + 1}` : null,
    path: '/dashboard',
    per_page: perPage,
    prev_page_url: page > 1 ? `/dashboard?page=${page - 1}` : null,
    to: images.length > 0 ? Math.min(page * perPage, actualTotal) : null,
    total: actualTotal,
  };
};

const meta: Meta<typeof ImageGallery> = {
  title: 'Components/ImageGallery',
  component: ImageGallery,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: createMockPaginatedData([
      createMockImage(1),
      createMockImage(2),
      createMockImage(3),
      createMockImage(4),
    ]),
  },
};

export const Empty: Story = {
  args: {
    images: createMockPaginatedData([]),
  },
};

export const SingleImage: Story = {
  args: {
    images: createMockPaginatedData([createMockImage(1)]),
  },
};

export const WithPagination: Story = {
  args: {
    images: createMockPaginatedData(
      Array.from({ length: 8 }, (_, i) =>
        createMockImage((i % 4) + 1),
      ).toSorted(() => Math.random() - 0.5),
      1,
      12,
      36,
    ),
  },
};

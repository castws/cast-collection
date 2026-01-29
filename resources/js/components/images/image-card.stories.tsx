import type { Image } from '@/types';
import type { Meta, StoryObj } from '@storybook/react-vite';
import ImageCard from './image-card';

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
  name: 'Real',
};

const mockCastTypes = [
  { id: 1, name: 'LAC' },
  { id: 2, name: 'LLWC' },
];

const mockGenders = [
  { id: 1, name: 'Female' },
];

const createMockImage = (id: number, overrides?: Partial<Image>): Image => ({
  id,
  user_id: 1,
  image_type_id: 1,
  description: `This is a sample description for image ${id}`,
  // Uses sample image from .storybook/public/images/ (served at /storage)
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

const meta: Meta<typeof ImageCard> = {
  title: 'Components/ImageCard',
  component: ImageCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: createMockImage(1),
  },
};

export const WithoutDescription: Story = {
  args: {
    image: createMockImage(1, { description: null }),
  },
};

export const LongDescription: Story = {
  args: {
    image: createMockImage(1, {
      description:
        'This is a very long description that should be truncated after two lines to maintain a consistent card height across the gallery grid layout.',
    }),
  },
};

export const SingleCastType: Story = {
  args: {
    image: createMockImage(1, {
      cast_types: [
        { id: 1, name: 'LLC' },
      ],
    }),
  },
};

export const ManyCastTypes: Story = {
  args: {
    image: createMockImage(1, {
      cast_types: [
        { id: 1, name: 'LLC' },
        { id: 2, name: 'LAT' },
        { id: 3, name: 'Minerva' },
        { id: 4, name: 'Other' },
      ],
    }),
  },
};

export const DifferentImageSize: Story = {
  args: {
    image: createMockImage(2),
  },
};

export const WithAvatar: Story = {
  args: {
    image: createMockImage(1, {
      user: {
        ...mockUser,
        avatar: 'https://i.pravatar.cc/150?img=1',
      },
    }),
  },
};

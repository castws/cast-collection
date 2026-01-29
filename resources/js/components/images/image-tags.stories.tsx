import type { Meta, StoryObj } from '@storybook/react-vite';
import ImageTags from './image-tags';

const meta: Meta<typeof ImageTags> = {
  title: 'Components/ImageTags',
  component: ImageTags,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockCastTypes = [
  { id: 1, name: 'LLC' },
  { id: 2, name: 'LAC' },
];

const mockGenders = [{ id: 1, name: 'Female' }];

const mockImageType = {
  id: 1,
  name: 'Photo',
};

export const Default: Story = {
  args: {
    castTypes: mockCastTypes,
    genders: mockGenders,
    imageType: mockImageType,
  },
};

export const SingleCastType: Story = {
  args: {
    castTypes: [{ id: 1, name: 'LLC' }],
    genders: [{ id: 1, name: 'Male' }],
    imageType: { id: 2, name: 'Illustration' },
  },
};

export const MultipleTags: Story = {
  args: {
    castTypes: [
      { id: 1, name: 'LLC' },
      { id: 2, name: 'LAC' },
      { id: 3, name: 'DHS' },
    ],
    genders: [
      { id: 1, name: 'Female' },
      { id: 2, name: 'Male' },
    ],
    imageType: { id: 1, name: 'Photo' },
  },
};

export const WithCustomClassName: Story = {
  args: {
    castTypes: mockCastTypes,
    genders: mockGenders,
    imageType: mockImageType,
    className: 'text-blue-500',
  },
};

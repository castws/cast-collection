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
  { id: 1, name: 'Arm', created_at: '', updated_at: '' },
  { id: 2, name: 'Leg', created_at: '', updated_at: '' },
];

const mockGenders = [
  { id: 1, name: 'Female', created_at: '', updated_at: '' },
];

const mockImageType = {
  id: 1,
  name: 'Photo',
  created_at: '',
  updated_at: '',
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
    castTypes: [{ id: 1, name: 'Full Body', created_at: '', updated_at: '' }],
    genders: [{ id: 1, name: 'Male', created_at: '', updated_at: '' }],
    imageType: { id: 2, name: 'Illustration', created_at: '', updated_at: '' },
  },
};

export const MultipleTags: Story = {
  args: {
    castTypes: [
      { id: 1, name: 'Arm', created_at: '', updated_at: '' },
      { id: 2, name: 'Leg', created_at: '', updated_at: '' },
      { id: 3, name: 'Torso', created_at: '', updated_at: '' },
    ],
    genders: [
      { id: 1, name: 'Female', created_at: '', updated_at: '' },
      { id: 2, name: 'Male', created_at: '', updated_at: '' },
    ],
    imageType: { id: 1, name: 'Photo', created_at: '', updated_at: '' },
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

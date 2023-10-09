import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Button';

const meta = {
  title: 'Components/Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    primary: false,
  },
};

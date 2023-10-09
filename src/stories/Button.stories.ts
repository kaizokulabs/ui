import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Button';

const meta = {
  title: 'Components/Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    children: 'Secondary',
  },
};

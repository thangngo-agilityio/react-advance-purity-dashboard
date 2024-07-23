
import { Meta, StoryObj } from "@storybook/react";

// Component
import Header from ".";

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  tags: ['autodocs'],
  component: Header,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    name: 'Home'
  }
}

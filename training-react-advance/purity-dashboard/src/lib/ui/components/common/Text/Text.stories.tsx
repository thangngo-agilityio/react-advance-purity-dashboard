
import { Meta, StoryObj } from "@storybook/react";

// Component
import { Text } from "..";

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  tags: ['autodocs'],
  component: Text,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: 'Default text'
  }
}

export const Small: Story = {
  args: {
    content: 'Small text',
    size: 'textSm',
  }
}

export const Large: Story = {
  args: {
    content: 'Large text',
    size: 'textLg',
  }
}

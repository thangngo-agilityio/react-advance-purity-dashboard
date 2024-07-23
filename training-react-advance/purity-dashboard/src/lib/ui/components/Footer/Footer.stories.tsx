
import { Meta, StoryObj } from "@storybook/react";

// Component
import Footer from ".";

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  tags: ['autodocs'],
  component: Footer,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {}
}


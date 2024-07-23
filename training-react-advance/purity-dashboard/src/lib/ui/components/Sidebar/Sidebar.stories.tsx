
import { Meta, StoryObj } from "@storybook/react";

// Component
import Sidebar from ".";
import { SIDEBAR_LIST } from "@/lib/constants";

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  tags: ['autodocs'],
  component: Sidebar,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {

}


import { Meta, StoryObj } from "@storybook/react";

// Component
import CardProject from ".";
import { PROJECT_DATA_MOCK } from "@/lib/mocks";

const meta: Meta<typeof CardProject> = {
  title: 'Components/CardProject',
  tags: ['autodocs'],
  component: CardProject,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardProject>;

export const Default: Story = {
  args: {
    data: PROJECT_DATA_MOCK
  }
}


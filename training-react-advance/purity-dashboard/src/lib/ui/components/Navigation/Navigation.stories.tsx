
import { Meta, StoryObj } from "@storybook/react";

// Component
import { Navigation, Text } from "..";
import { PhoneIcon } from "@chakra-ui/icons";

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  tags: ['autodocs'],
  component: Navigation,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    leftIcon: <PhoneIcon />,
    children: 'Content 1',
  }
}

export const Small: Story = {
  args: {
    leftIcon: <PhoneIcon />,
    children: 'Content 2',
  }
}

export const Large: Story = {
  args: {
    leftIcon: <PhoneIcon />,
    children: 'Content 3',
  }
}

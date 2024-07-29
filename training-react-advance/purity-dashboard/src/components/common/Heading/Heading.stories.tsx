import { Meta, StoryObj } from "@storybook/react";

// Component
import { Heading } from "..";


const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  tags: ['autodocs'],
  component: Heading,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    title: 'Default'
  }
}

export const Secondary: Story = {
  args: {
    title: 'Secondary',
    variant: 'secondary',
    size: 'xl'
  }
}

export const Tertiary: Story = {
  args: {
    title: 'Tertiary',
    variant: 'tertiary',
    size: 'xl'
  }
}

// export const Default: Story = {
//   args: {
//     title: 'Default'
//   }
// }

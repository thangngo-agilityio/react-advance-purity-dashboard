import { Meta, StoryObj } from "@storybook/react";

// Component
import { HeadingComponent } from ".";


const meta: Meta<typeof HeadingComponent> = {
  title: 'Components/Heading',
  tags: ['autodocs'],
  component: HeadingComponent,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeadingComponent>;

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

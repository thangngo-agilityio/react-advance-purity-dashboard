
import { Meta, StoryObj } from "@storybook/react";

// Component
import CardProject from ".";

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
    src: 'https://cdnphoto.dantri.com.vn/Sc0fkdclY1YFlbStFH1H6BRmqy8=/thumb_w/1020/2023/09/23/11-captivating-living-room-interiors-that-showcase-the-contemporary-american-style-in-la-houses-edited-1695456072855.jpeg',
    alt: 'living room',
    projectNumber: 1,
    projectName: 'Modern',
    description: 'As Uber works through a huge amount of internal management turmoil'
  }
}


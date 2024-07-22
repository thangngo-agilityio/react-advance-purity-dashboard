import type { Meta, StoryObj } from '@storybook/react';

// components
import ButtonIcon from '.';
import { PhoneIcon } from '@chakra-ui/icons';


const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/ButtonIcon',
  tags: ['autodocs'],
  component: ButtonIcon,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonIcon>;


export const Default: Story = {
  args: {
    icon: <PhoneIcon />
  },
};

export const Active: Story = {
  args: {
    icon: <PhoneIcon />,
    isActive: true
  },
};


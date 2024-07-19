import type { Meta, StoryObj } from '@storybook/react';
import { AddIcon } from '@chakra-ui/icons';
import { ButtonComponent } from '.';

// components


const meta: Meta<typeof ButtonComponent> = {
  title: 'Custom Components/Button',
  tags: ['autodocs'],
  component: ButtonComponent,
  argTypes: {
    onClick: {
      description: 'The click event handling function',
      action: 'clicked',
    },

    children: {
      description:
        'The children of the button, e.g. text, react components, etc.',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;


export const Primary: Story = {
  args: {
    size: 'md',
    children: 'Primary Button',
  },
};


export const Secondary: Story = {
  args: {
    size: 'md',
    children: 'Secondary Button',
    variant: 'secondary'
  }
}

export const Tertiary: Story = {
  args: {
    size: 'md',
    children: 'Tertiary Button',
    variant: 'tertiary'
  }
}

export const IconPrimary: Story = {
  args: {
    leftIcon: <AddIcon />,
    size: 'md',
    children: 'Icon Button',
    variant: 'iconPrimary'
  }
}

export const Disable: Story = {
  args: {
    size: 'xs',
    children: 'Disabled Button',
    isDisabled: true,
  },
};

export const Loading: Story = {
  args: {
    size: 'lg',
    children: 'Loading Button',
    isLoading: true,
  },
};

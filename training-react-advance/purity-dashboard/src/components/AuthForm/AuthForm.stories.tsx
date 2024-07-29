
import { Meta, StoryObj } from "@storybook/react";

// Component
import AuthForm from ".";

const meta: Meta<typeof AuthForm> = {
  title: 'Components/AuthForm',
  tags: ['autodocs'],
  component: AuthForm,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof AuthForm>;

export const LoginType: Story = {
  args: {}
}

export const RegisterType: Story = {
  args: {
    isRegister: true
  }
}


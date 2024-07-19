import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: 400,
  },
  sizes: {
    textSm: {
      fontSize: 'sm',
    },
    textMd: {
      fontSize: 'md',
    },
    textLg: {
      fontSize: 'lg',
    },
  },
  variants: {
    primary: {
      color: 'text.400',
    },
    secondary: {
      color: 'text.100',
    },
  },
  defaultProps: {
    size: 'textMd',
    variant: 'primary',
  },
});

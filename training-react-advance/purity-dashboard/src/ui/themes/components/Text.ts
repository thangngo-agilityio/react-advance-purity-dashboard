import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: 400,
    fontFamily: 'body',
  },
  sizes: {
    textXs: {
      fontSize: 'xs',
    },
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
    tertiary: {
      color: 'text.500',
    },
  },
  defaultProps: {
    size: 'textMd',
    variant: 'primary',
  },
});

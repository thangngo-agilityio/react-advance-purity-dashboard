import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: 'heading',
  },

  sizes: {
    md: {
      fontsize: 'md',
    },
    lg: {
      fontsize: 'lg',
    },
    xl: {
      fontsize: 'xl',
    },
  },
  variants: {
    primary: {
      color: 'text.200',
    },
    secondary: {
      color: 'text.100',
    },
    tertiary: {
      color: 'text.300',
    },
  },

  defaultProps: {
    size: 'lg',
    variant: 'primary',
  },
});

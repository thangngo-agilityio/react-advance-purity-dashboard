import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: 'heading',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  sizes: {
    md: {
      fontSize: 'md',
    },
    lg: {
      fontSize: 'lg',
    },
    xl: {
      fontSize: 'xl',
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

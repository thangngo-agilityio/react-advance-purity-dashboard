import { defineStyleConfig } from '@chakra-ui/react';
import { px } from 'framer-motion';

export const Link = defineStyleConfig({
  baseStyle: {
    textDecoration: 'none !important',
    py: '12px',
    px: '16px',
  },
  variants: {
    default: {
      color: 'text.400',
      backgroundColor: 'transparent',
    },
    active: {
      color: 'text.200',
      backgroundColor: 'background.100',
    },
  },
});

import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  baseStyle: {
    fontFamily: 'body',
    px: '20px',
    py: '15px',
    borderRadius: 'lg',
    borderWidth: '1px',
    borderColor: 'border.200',
    _placeholder: {
      color: 'text.400',
    },
  },
});

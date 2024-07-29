import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  track: {
    bg: 'background.700',
    _checked: {
      bg: 'background.800',
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });

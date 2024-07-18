import { extendTheme } from '@chakra-ui/react';

// Themes
import { components } from './components';
import { bases } from './bases';

export const theme = extendTheme({
  ...bases,
  components,
});

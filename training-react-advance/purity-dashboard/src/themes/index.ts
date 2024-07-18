import { extendTheme } from '@chakra-ui/react';

// Themes
import { components } from './components';
import { bases } from './bases';

export const theme = extendTheme({
  ...bases,
  components,

  fonts: {
    heading: `'Helvetica', sans-serif`,
    body: `'Helvetica Bold', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'body',
      },
    },
  },
});

import { baseTheme, ThemeOverride } from '@chakra-ui/react';

export const fontSizes: ThemeOverride['fontSizes'] = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '32px',
};

export const font = {
  body: `'Helvetica', ${baseTheme.fonts.body}, sans-serif`,
  heading: `'Helvetica Bold', ${baseTheme.fonts.heading}, sans-serif`,
};

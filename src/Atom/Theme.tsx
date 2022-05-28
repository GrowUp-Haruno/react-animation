import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
  },
  shadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
  offsetShadow: `0.1875rem 0.185rem #000000`,
  offsetShinkShadow: `-0.1875rem -0.185rem #000000`,
  letterSpace: '1.5em',
} as const;

export const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
  },
  shadow: 'rgba(0, 0, 0, 0.5)',
} as const;

export const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

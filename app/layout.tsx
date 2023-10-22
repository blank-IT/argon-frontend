'use client';
// 임시 cilent side

import { ReactNode } from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import { StyledComponentsRegistry } from '@styles/libs';

import { global, theme } from '@styles/theme';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Global styles={global} />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;

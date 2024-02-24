'use client';
// 임시 cilent side

import { ReactNode } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { ApolloProvider } from '@apollo/client';

import client from '@utils/apollo-client';
import { StyledComponentsRegistry } from '@styles/libs';

import { global, theme } from '@styles/theme';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Global styles={global} />
          <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>{children}</ApolloProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;

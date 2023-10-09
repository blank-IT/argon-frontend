'use client';

import { Inter } from 'next/font/google';
import { Global, ThemeProvider } from '@emotion/react';

import { global, theme } from '@styles/theme';

// import type { Metadata } from 'next';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Global styles={global} />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}

import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '#/styles/globalStyles';
import LayoutProvider from '#/contexts/LayoutContext';
import { theme } from '#/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LayoutProvider>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </LayoutProvider>
    </ThemeProvider>
  );
}

export default MyApp;

import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import smoothscroll from 'smoothscroll-polyfill';

import GlobalStyle from '#/styles/globalStyles';
import { theme } from '#/styles/theme';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  smoothscroll.polyfill();
  // disableScroll.off();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

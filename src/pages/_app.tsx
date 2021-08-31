import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import smoothscroll from 'smoothscroll-polyfill';
import GlobalStyle from '#/styles/globalStyles';
import LayoutProvider from '#/contexts/LayoutContext';
import ExperienceProvider from '#/contexts/ExperienceContext';
import ContactCardProvider from '#/contexts/ContactCardContext';
import { theme } from '#/styles/theme';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <LayoutProvider>
        <ExperienceProvider>
          <ContactCardProvider>
            <GlobalStyle />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </ContactCardProvider>
        </ExperienceProvider>
      </LayoutProvider>
    </ThemeProvider>
  );
}

export default MyApp;

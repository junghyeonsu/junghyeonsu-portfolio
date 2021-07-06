import { DefaultTheme } from 'styled-components';
import { GAUGE_BLACK_COLOR, GAUGE_WHITE_COLOR } from '#/colors';

const theme: DefaultTheme = {
  basicWidth: '320px',

  color: {
    main: 'white',
    sub: '#fff',
  },

  scrollGauge: {
    white: GAUGE_WHITE_COLOR,
    dark: GAUGE_BLACK_COLOR,
  },
};

const nextTheme: DefaultTheme = {
  basicWidth: '320px',

  color: {
    main: '#1c1f25',
    sub: '#fff',
  },
};

export { theme, nextTheme };

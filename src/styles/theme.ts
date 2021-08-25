import { DefaultTheme } from 'styled-components';
import { BLACK_TEXT_COLOR, WHITE_TEXT_COLOR } from '#/colors';

const theme: DefaultTheme = {
  basicWidth: '320px',

  color: {
    main: 'white',
    sub: '#fff',
  },

  common: {
    white: {
      text: WHITE_TEXT_COLOR,
    },
    dark: {
      text: BLACK_TEXT_COLOR,
    },
  },

  scrollGauge: {
    white: WHITE_TEXT_COLOR,
    dark: BLACK_TEXT_COLOR,
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

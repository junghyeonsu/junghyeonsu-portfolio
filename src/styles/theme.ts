import { DefaultTheme } from 'styled-components';
import { BLACK_TEXT_COLOR, WHITE_TEXT_COLOR } from '#/colors';

const size = {
  mobile: '600px',
  desktop: '1080px',
};

const theme: DefaultTheme = {
  mobile: `screen and (max-width: ${size.mobile})`,
  tablet: `screen and (max-width: ${size.desktop})`,
  desktop: `screen and (min-width: ${size.desktop})`,

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

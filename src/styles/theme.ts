import { DefaultTheme } from 'styled-components';
import { BLACK_TEXT_COLOR, WHITE_TEXT_COLOR } from '#/colors';

const size = {
  mobile: '600px',
  laptop: '1200px',
  desktop: '1800px',
};

const theme: DefaultTheme = {
  mobile: `screen and (max-width: ${size.mobile})`,
  laptop: `screen and (max-width: ${size.laptop})`,
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

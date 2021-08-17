import React, { useMemo } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { useContactCardContext } from '#/contexts/ContactCardContext';

import { COMMON_TRANSITION, CONTACT_ARTICLE_AREA } from '#/constants';
import { BLACK_TEXT_COLOR, WHITE_TEXT_COLOR } from '#/colors';

const Container = styled.div`
  position: fixed;
  font-weight: bold;
  font-size: 2.3vw;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  transition: ${COMMON_TRANSITION};
  z-index: 5;
`;

const ScrollGauge = () => {
  const { scrollGauge, isWhiteColor, currentArea }: any = useLayoutContext(); // eslint-disable-line 
  const { color }: any = useContactCardContext(); // eslint-disable-line

  const gaugeColor = useMemo(() => {
    if (currentArea === CONTACT_ARTICLE_AREA) return color.card;

    return isWhiteColor ? WHITE_TEXT_COLOR : BLACK_TEXT_COLOR;
  }, [isWhiteColor, currentArea, color]);

  return <Container style={{ color: gaugeColor }}>{scrollGauge}</Container>;
};

export default ScrollGauge;

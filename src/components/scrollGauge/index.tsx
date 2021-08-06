import React, { useMemo } from 'react';
import styled from 'styled-components';

import { COMMON_TRANSITION } from '#/constants';
import { useLayoutContext } from '#/contexts/LayoutContext';
import { BLACK_TEXT_COLOR, WHITE_TEXT_COLOR } from '#/colors';

const Container = styled.div`
  position: fixed;
  font-weight: bold;
  font-size: 2.3vw;
  bottom: 10px;
  right: 10px;
  transition: ${COMMON_TRANSITION};
  z-index: 5;
`;

const ScrollGauge = () => {
  const { scrollGauge, isWhiteColor }: any = useLayoutContext(); // eslint-disable-line 
  const gaugeColor = useMemo(
    () => (isWhiteColor ? WHITE_TEXT_COLOR : BLACK_TEXT_COLOR),
    [isWhiteColor],
  );

  return <Container style={{ color: gaugeColor }}>{scrollGauge}</Container>;
};

export default ScrollGauge;

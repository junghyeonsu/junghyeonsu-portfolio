import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import {
  INTRO_ARTICLE_AREA,
  SKILL_ARTICLE_AREA,
  EXP_ARTICLE_AREA,
  CONTACT_ARTICLE_AREA,
} from '#/constants';
import { GAUGE_BLACK_COLOR, GAUGE_WHITE_COLOR } from '#/colors';

const Container = styled.article`
  position: fixed;
  font-weight: bold;
  font-size: 25px;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  transition: all 0.5s ease;
`;

const ScrollGauge = () => {
  const { scrollGauge, currentArea }: any = useLayoutContext(); // eslint-disable-line 
  const [gaugeColor, setGaugeColor] = useState<string>(GAUGE_WHITE_COLOR);

  useEffect(() => {
    if (
      currentArea === INTRO_ARTICLE_AREA ||
      currentArea === EXP_ARTICLE_AREA
    ) {
      setGaugeColor(GAUGE_WHITE_COLOR);
    } else if (
      currentArea === SKILL_ARTICLE_AREA ||
      currentArea === CONTACT_ARTICLE_AREA
    ) {
      setGaugeColor(GAUGE_BLACK_COLOR);
    }
  }, [currentArea]);

  return <Container style={{ color: gaugeColor }}>{scrollGauge}</Container>;
};

export default ScrollGauge;

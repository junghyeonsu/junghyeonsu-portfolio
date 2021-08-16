import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { useContactCardContext } from '#/contexts/ContactCardContext';

import { CONTACT_ARTICLE_AREA } from '#/constants';
import { BLACK_UNACTIVE_TEXT_COLOR, WHITE_UNACTIVE_TEXT_COLOR } from '#/colors';

const Container = styled.div`
  position: fixed;
  font-size: 1.2vw;
  bottom: 38px;
  right: 11px;
  padding: 10px;
  color: gray;
`;

const ScrollTimer = () => {
  const [counter, setCounter] = useState(14);
  const { isWhiteColor, currentArea }: any = useLayoutContext(); // eslint-disable-line 
  const { color }: any = useContactCardContext(); // eslint-disable-line

  const timerColor = useMemo(() => {
    if (currentArea === CONTACT_ARTICLE_AREA) return color.text;

    return isWhiteColor ? WHITE_UNACTIVE_TEXT_COLOR : BLACK_UNACTIVE_TEXT_COLOR;
  }, [isWhiteColor, currentArea, color]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(counter - 1);
    }, 100);
    return () => clearTimeout(timer);
  });

  return <Container style={{ color: timerColor }}>{counter}</Container>;
};

export default ScrollTimer;

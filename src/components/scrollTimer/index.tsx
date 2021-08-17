import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
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
  const { isWhiteColor }: any = useLayoutContext(); // eslint-disable-line 
  const timerColor = useMemo(
    () =>
      isWhiteColor ? WHITE_UNACTIVE_TEXT_COLOR : BLACK_UNACTIVE_TEXT_COLOR,
    [isWhiteColor],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(counter - 1);
    }, 100);
    return () => clearTimeout(timer);
  });

  return <Container style={{ color: timerColor }}>{counter}</Container>;
};

export default ScrollTimer;

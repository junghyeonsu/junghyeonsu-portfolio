import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';

import { PAGE_ORDER, COMMON_TRANSITION } from '#/constants';
import { useLayoutContext } from '#/contexts/LayoutContext';
import {
  WHITE_TEXT_COLOR,
  WHITE_UNACTIVE_TEXT_COLOR,
  BLACK_TEXT_COLOR,
  BLACK_UNACTIVE_TEXT_COLOR,
} from '#/colors';

interface ProgressItemProps {
  text: string;
  order: number;
  onClick: () => void;
}

const Container = styled.div`
  position: absolute;
  right: 0.7vw;
  white-space: nowrap;
  transition: ${COMMON_TRANSITION};
`;

const ProgressItem = ({ text, order, onClick }: ProgressItemProps) => {
  const { isWhiteColor, currentArea }: any = useLayoutContext(); // eslint-disable-line 
  const [itemColor, setItemColor] = useState('');
  const isActive = useMemo(
    () => PAGE_ORDER[order].page === currentArea,
    [currentArea, order],
  );

  useEffect(() => {
    // active & white
    if (isActive && isWhiteColor) {
      setItemColor(WHITE_TEXT_COLOR);
    }
    // unactive & white
    else if (!isActive && isWhiteColor) {
      setItemColor(WHITE_UNACTIVE_TEXT_COLOR);
    }
    // active & black
    else if (isActive && !isWhiteColor) {
      setItemColor(BLACK_TEXT_COLOR);
    }
    // unactive & black
    else if (!isActive && !isWhiteColor) {
      setItemColor(BLACK_UNACTIVE_TEXT_COLOR);
    }
  }, [currentArea, order, isActive, isWhiteColor]);

  return (
    <Container
      onClick={onClick}
      style={{
        top: `${order * (97 / (PAGE_ORDER.length - 1))}%`,
        color: `${itemColor}`,
        fontWeight: `${isActive ? 'bold' : 'normal'}`,
        fontSize: `${isActive ? '1vw' : '0.5vw'}`,
      }}
    >
      {text}
    </Container>
  );
};

export default ProgressItem;

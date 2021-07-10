import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { ACTIVE_BAR_WHITE, ACTIVE_BAR_BLACK } from '#/colors';
import {
  COMMON_TRANSITION,
  PAGE_ORDER,
  PROGRESS_BAR_HEIGHT,
} from '#/constants';

const Container = styled.div`
  position: fixed;
  width: 0.3vw;
  top: 28vh;
  right: 10px;
  background: #f7ff5c;
  transition: ${COMMON_TRANSITION};
`;

const ActiveProgressBar = () => {
  const { currentArea, isWhiteColor } = useLayoutContext();
  const [pageOrder, setPageOrder] = useState(0);

  useEffect(() => {
    PAGE_ORDER.forEach((i, idx) => {
      if (i.page === currentArea) {
        setPageOrder(idx);
      }
    });
  }, [currentArea]);

  const barColor = useMemo(
    () => (isWhiteColor ? ACTIVE_BAR_WHITE : ACTIVE_BAR_BLACK),
    [isWhiteColor],
  );

  return (
    <Container
      style={{
        height: `${
          pageOrder * (PROGRESS_BAR_HEIGHT / (PAGE_ORDER.length - 1))
        }vh`,
        background: `${barColor}`,
      }}
    />
  );
};

export default ActiveProgressBar;

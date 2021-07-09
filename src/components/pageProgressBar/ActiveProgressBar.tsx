import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
// import { BLACK_TEXT_COLOR, WHITE_TEXT_COLOR } from '#/colors';
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
  const { currentArea } = useLayoutContext();
  const [pageOrder, setPageOrder] = useState(0);

  useEffect(() => {
    PAGE_ORDER.forEach((i, idx) => {
      if (i.page === currentArea) {
        setPageOrder(idx);
      }
    });
  }, [currentArea]);

  // 0 = 0
  // 1 = 33
  // 2 = 66
  // 3 = 99
  return (
    <Container
      style={{
        height: `${
          pageOrder * (PROGRESS_BAR_HEIGHT / (PAGE_ORDER.length - 1))
        }vh`,
      }}
    />
  );
};

export default ActiveProgressBar;

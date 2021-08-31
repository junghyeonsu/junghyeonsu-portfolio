import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { useContactCardContext } from '#/contexts/ContactCardContext';

import { ACTIVE_BAR_WHITE, ACTIVE_BAR_BLACK } from '#/colors';
import {
  COMMON_TRANSITION,
  PAGE_ORDER,
  PROGRESS_BAR_HEIGHT,
  PROGRESS_BAR_TOP,
  CONTACT_ARTICLE_AREA,
} from '#/constants';

const Container = styled.div`
  position: fixed;
  width: 0.4vw;
  top: ${PROGRESS_BAR_TOP}vh;
  right: 2vw;
  transition: ${COMMON_TRANSITION};
  z-index: 6;

  @media ${props => props.theme.mobile} {
    right: 6.5vw;
    width: 0.6vw;
  }
`;

const ActiveProgressBar = () => {
  const { currentArea, isWhiteColor } = useLayoutContext();
  const { color }: any = useContactCardContext(); // eslint-disable-line

  const [pageOrder, setPageOrder] = useState(0);

  useEffect(() => {
    PAGE_ORDER.forEach((i, idx) => {
      if (i.page === currentArea) {
        setPageOrder(idx);
      }
    });
  }, [currentArea]);

  const barColor = useMemo(() => {
    if (currentArea === CONTACT_ARTICLE_AREA) return color.point;

    return isWhiteColor ? ACTIVE_BAR_WHITE : ACTIVE_BAR_BLACK;
  }, [isWhiteColor, currentArea, color]);

  return (
    <Container
      style={{
        height: `${
          pageOrder * (PROGRESS_BAR_HEIGHT / (PAGE_ORDER.length - 1)) + 0.5
        }vh`,
        background: barColor,
      }}
    />
  );
};

export default ActiveProgressBar;

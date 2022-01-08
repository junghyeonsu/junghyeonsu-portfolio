import React, { useEffect, useCallback, useState, useMemo } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { useLayoutContext } from '#/contexts/LayoutContext';

import { UNDER_LINE_COLOR } from '#/colors';

interface ContainerProps {
  progress: number;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1px;
  transform: scaleX(${(props: ContainerProps) => props.progress});
  height: 3px;
  background-color: ${UNDER_LINE_COLOR};
  z-index: 999;
`;

const ScrollProgressBar = () => {
  const { windowWidth }: any = useLayoutContext(); // eslint-disable-line
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);

  const handleScroll = useCallback(() => {
    setCurrentScrollPosition(document.documentElement.scrollTop);
  }, []);

  const progress = useMemo(
    () => (windowWidth / 100) * ((currentScrollPosition / pageHeight) * 100),
    [currentScrollPosition, pageHeight, windowWidth],
  );

  useEffect(() => {
    setPageHeight(document.body.scrollHeight - window.innerHeight);
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener('scroll', _.throttle(handleScroll, 50)); // eslint-disable-line no-undef
    return () => {
      window.removeEventListener('scroll', handleScroll); // eslint-disable-line no-undef
    };
  }, [handleScroll]);

  return <Container progress={progress * 2} />;
};

export default ScrollProgressBar;

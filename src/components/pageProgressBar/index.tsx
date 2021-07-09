import React, { useMemo } from 'react';
import styled from 'styled-components';

import ProgressItem from './progressItem';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { BLACK_TEXT_COLOR, WHITE_TEXT_COLOR } from '#/colors';
import { COMMON_TRANSITION } from '#/constants';

const Container = styled.div`
  position: fixed;
  width: 0.3vw;
  height: 50vh;
  right: 10px;
  top: 28vh;
  transition: ${COMMON_TRANSITION};
`;

const PageProgressBar = () => {
  const { isWhiteColor }: any = useLayoutContext(); // eslint-disable-line 
  const barColor = useMemo(
    () => (isWhiteColor ? WHITE_TEXT_COLOR : BLACK_TEXT_COLOR),
    [isWhiteColor],
  );

  return (
    <Container style={{ background: barColor }}>
      <ProgressItem text="Introduction" order={0} />
      <ProgressItem text="Skills" order={1} />
      <ProgressItem text="Experiences" order={2} />
      <ProgressItem text="Contact" order={3} />
    </Container>
  );
};

export default PageProgressBar;

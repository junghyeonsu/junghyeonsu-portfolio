import React from 'react';
import styled from 'styled-components';

import { FadeInContent } from '#/components/common/gsap';
import { FADE_IN_DELAY } from '#/constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #2b2b2b;
`;

const Component = () => {
  return (
    <FadeInContent delay={FADE_IN_DELAY}>
      <Container>Hackerton</Container>
    </FadeInContent>
  );
};

export default Component;

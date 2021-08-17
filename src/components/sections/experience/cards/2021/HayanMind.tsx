import React from 'react';
import styled from 'styled-components';

import { FadeInContent } from '#/components/common/gsap';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: firebrick;
`;

const Component = () => {
  return (
    <FadeInContent delay={2.5}>
      <Container>HayanMind</Container>
    </FadeInContent>
  );
};

export default Component;

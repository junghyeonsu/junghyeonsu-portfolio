import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { BLACK_BACKGROUND_COLOR, WHITE_TEXT_COLOR } from '#/colors';
import { COMMON_BODY_WIDTH } from '#/constants';

import { HeaderText, BodyText } from '#/components/common/gsap';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${BLACK_BACKGROUND_COLOR};
  color: ${WHITE_TEXT_COLOR};
`;

const Body = styled.div`
  width: ${COMMON_BODY_WIDTH}vw;
`;

const Introduction = () => {
  const { setIntroductionOffsetTop }: any = useLayoutContext(); // eslint-disable-line 
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    console.log('setIntroductionOffsetTop:', containerOffsetTop); // eslint-disable-line
    setIntroductionOffsetTop(containerOffsetTop);
  }, [setIntroductionOffsetTop]);

  return (
    <Container ref={containerRef}>
      <Body>
        <HeaderText delay={1}>정현수입니다</HeaderText>
        <BodyText delay={2}>저는</BodyText>
        <BodyText delay={2.4}>저는</BodyText>
        <BodyText delay={2.8}>저는</BodyText>
      </Body>
    </Container>
  );
};

export default Introduction;

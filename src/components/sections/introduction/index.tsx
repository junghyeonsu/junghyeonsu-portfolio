import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useLayoutContext } from '#/contexts/LayoutContext';
import { BLACK_BACKGROUND_COLOR, WHITE_TEXT_COLOR, UNDER_LINE_COLOR } from '#/colors';
import { COMMON_BODY_WIDTH } from '#/constants';
import { FadeInContent, Underline } from '#/components/common/gsap';
import FadeInBodyText from '#/components/sections/introduction/FadeInBodyText';
import FadeInHeaderText from '#/components/sections/introduction/FadeInHeaderText';
import SvgWithGsap from '#/components/sections/introduction/SvgWithGsap';
import YellowPoint from '#/components/common/YellowPoint';

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 110vh;
  width: 100vw;
  background-color: ${BLACK_BACKGROUND_COLOR};
  color: ${WHITE_TEXT_COLOR};
`;

const Body = styled.div`
  width: ${COMMON_BODY_WIDTH}vw;
  z-index: 5;

  @media ${props => props.theme.mobile} {
    width: 90vw;
    -webkit-text-stroke: 0.1px #000;
  }
`;

const Introduction = () => {
  const { setIntroductionOffsetTop, windowWidth }: any = useLayoutContext(); // eslint-disable-line
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    setIntroductionOffsetTop(containerOffsetTop);
  }, [setIntroductionOffsetTop, windowWidth]);

  return (
    <Container ref={containerRef}>
      <Body>
        <FadeInHeaderText delay={1}>
          <Underline color={UNDER_LINE_COLOR} delay={4}>
            정현수
          </Underline>
          <span style={{ fontSize: '4vw' }}>입니다</span>
          <YellowPoint>.</YellowPoint>
        </FadeInHeaderText>
        <FadeInBodyText delay={2}>
          많은 사람들에게 영향을 주는 서비스를 만드는
          <YellowPoint>,</YellowPoint>
        </FadeInBodyText>
        <FadeInBodyText delay={2.4}>
          무언가를 예쁘게 꾸미고 디자인하는
          <YellowPoint>,</YellowPoint>
        </FadeInBodyText>
        <FadeInBodyText delay={2.8}>
          끊임없이 아이디어를 내고 기획을 잘하는
          <YellowPoint>,</YellowPoint>
        </FadeInBodyText>
        <FadeInBodyText delay={3.2}>
          개발자를 꿈꾸고 있습니다<YellowPoint>.</YellowPoint>
        </FadeInBodyText>
      </Body>
      <FadeInContent delay={1.9}>
        <SvgWithGsap delay={2} />
      </FadeInContent>
    </Container>
  );
};

export default Introduction;

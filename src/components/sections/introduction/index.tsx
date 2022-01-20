import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useLayoutContext } from '#/contexts/LayoutContext';
import { BLACK_BACKGROUND_COLOR, UNDER_LINE_COLOR } from '#/colors';
import { LAST_UPDATED } from '#/constants';
import { FadeInContent, Underline } from '#/components/common/gsap';
import FadeInBodyText from '#/components/sections/introduction/FadeInBodyText';
import FadeInHeaderText from '#/components/sections/introduction/FadeInHeaderText';
import YellowPoint from '#/components/common/YellowPoint';

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${BLACK_BACKGROUND_COLOR};
  color: white;

  @media ${props => props.theme.mobile} {
    flex-direction: column;
  }
`;

const Left = styled.div`
  position: absolute;
  left: 0;
  width: 50vw;
  z-index: 5;
  text-align: center;

  @media ${props => props.theme.mobile} {
    position: relative;
    width: 90vw;
    -webkit-text-stroke: 0.1px #000;
  }
`;

const Right = styled.div`
  position: absolute;
  right: 0;
  width: 40vw;
  z-index: 5;
  text-align: left;

  @media ${props => props.theme.mobile} {
    position: relative;
    text-align: center;
    width: 90vw;
    -webkit-text-stroke: 0.1px #000;
  }
`;

const ImageBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.5;
  width: 100vw;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

const LeftCircle = styled.div`
  position: absolute;
  top: 40px;
  left: 50px;
  width: 10vw;
  height: 10vw;
  border-top: white 4px solid;
  border-left: white 2px solid;
`;

const RightCircle = styled.div`
  position: absolute;
  bottom: 40px;
  right: 50px;
  width: 10vw;
  height: 10vw;
  border-bottom: white 4px solid;
  border-right: white 2px solid;
`;

const LastUpdated = styled.p`
  position: absolute;
  bottom: 40px;
  left: 50px;
  color: rgba(255, 255, 255, 0.7);

  @media ${props => props.theme.mobile} {
    display: none;
  }
`;

const Link = styled.a`
  color: #a6cfff;
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
      <Left>
        <FadeInHeaderText delay={2}>
          <span style={{ fontSize: '3vw' }}>기록과 공유를 좋아하는</span>
        </FadeInHeaderText>
        <FadeInHeaderText delay={3}>
          <Underline color={UNDER_LINE_COLOR} delay={3.6}>정현수</Underline>
          <span style={{ fontSize: '4vw' }}>입니다</span>
          <YellowPoint>.</YellowPoint>
        </FadeInHeaderText>
      </Left>
      <Right>
        <FadeInHeaderText delay={4}>
          <span style={{ fontSize: '4vw' }}>Contact</span>
          <YellowPoint>.</YellowPoint>
        </FadeInHeaderText>
        <FadeInBodyText delay={5}>
          <div>  
            <p style={{ fontSize: '1.7vw' }}>
              Email:{' '}
              <Link href="mailto:jung660317@naver.com">jung660317@naver.com</Link>
            </p>
            <p style={{ fontSize: '1.7vw' }}>
              GitHub:{' '}
              <Link href="https://github.com/junghyeonsu" target="_blank">junghyeonsu</Link>
            </p>
            <p style={{ fontSize: '1.7vw' }}>
              Tistory Blog:{' '}
              <Link href="https://junghyeonsu.tistory.com/" target="_blank">현수 세상</Link>
            </p>
            <p style={{ fontSize: '1.7vw' }}>
              Velog:{' '}
              <Link href="https://velog.io/@junghyeonsu" target="_blank">정현수</Link>
            </p>

          </div>
        </FadeInBodyText>
      </Right>
      <FadeInContent delay={1}>
        <ImageBox>
          <img src="/hyeonsu.jpeg" alt="hyeonsu" draggable={false} />
        </ImageBox>
      </FadeInContent>
      <FadeInContent delay={2}>
        <LeftCircle />
      </FadeInContent>
      <FadeInContent delay={2}>
        <RightCircle />
      </FadeInContent>
      <FadeInContent delay={2}>
        <LastUpdated>Last update: {LAST_UPDATED}</LastUpdated>
      </FadeInContent>
    </Container>
  );
};

export default Introduction;

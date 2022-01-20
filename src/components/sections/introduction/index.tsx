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
  left: 10vw;
  width: 40vw;
  z-index: 5;
  text-align: left;

  @media ${props => props.theme.mobile} {
    position: relative;
    width: 90vw;
    -webkit-text-stroke: 0.1px #000;
  }
`;

const Right = styled.div`
  position: absolute;
  right: 10vw;
  width: 40vw;
  z-index: 5;
  text-align: right;

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
  text-decoration: underline;

  :hover {
    color: rgba(255, 255, 255, 0.7);
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
      <Left>
        <FadeInHeaderText delay={2.7}>
          <span style={{ fontSize: '3vw' }}>기록과 공유를 좋아하는</span>
        </FadeInHeaderText>
        <FadeInHeaderText delay={3.4}>
          <Underline color={UNDER_LINE_COLOR} delay={4}>정현수</Underline>
          <span style={{ fontSize: '4vw' }}>입니다</span>
          <YellowPoint>.</YellowPoint>
        </FadeInHeaderText>
        <FadeInBodyText delay={4.2}>
          <p style={{ fontSize: '1.5vw' }}>충남대학교 졸업을 앞두고 있고, 학부 3학년부터 프론트엔드에 관심을 가져 열심히 배워가고 있습니다. 학교에 다니면서 다양한 프로젝트와 스타트업 인턴을 통해서 실무를 경험했습니다.</p>
          <p style={{ fontSize: '1.5vw' }}>새로운 기술에 대한 두려움이 없으며, 배운 모든 것을 기록하고 공유하는 것을 좋아합니다. 공유의 중요성을 잘 알기에 항상 새기고 실천하려고 노력합니다.</p>
        </FadeInBodyText>
      </Left>
      <Right>
        <FadeInHeaderText delay={5}>
          <span style={{ fontSize: '4vw' }}>Contact</span>
          <YellowPoint>.</YellowPoint>
        </FadeInHeaderText>
        <FadeInBodyText delay={5.8}>
          <div>  
            <p style={{ fontSize: '1.7vw' }}>
              Email:{' '}
              <Link href="mailto:jung660317@naver.com">jung660317@naver.com</Link>
            </p>
            <p style={{ fontSize: '1.7vw' }}>
              <Link href="https://github.com/junghyeonsu" target="_blank">GitHub</Link>
            </p>
            <p style={{ fontSize: '1.7vw' }}>
              <Link href="https://junghyeonsu.tistory.com/" target="_blank">Tistory Blog</Link>
            </p>
            <p style={{ fontSize: '1.7vw' }}>
              <Link href="https://velog.io/@junghyeonsu" target="_blank">Velog</Link>
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

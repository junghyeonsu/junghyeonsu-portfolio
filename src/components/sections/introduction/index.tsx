import React, { useRef, useEffect } from 'react';
import { useLayoutContext } from '#/contexts/LayoutContext';
import { UNDER_LINE_COLOR } from '#/colors';
import { LAST_UPDATED } from '#/constants';
import { FadeInContent, Underline } from '#/components/common/gsap';
import YellowPoint from '#/components/common/YellowPoint';
import FadeInBodyText from '#/components/sections/introduction/FadeInBodyText';
import FadeInHeaderText from '#/components/sections/introduction/FadeInHeaderText';
import * as Styled from './styled';

const Introduction = () => {
  const { setIntroductionOffsetTop, windowWidth }: any = useLayoutContext(); // eslint-disable-line
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    setIntroductionOffsetTop(containerOffsetTop);
  }, [setIntroductionOffsetTop, windowWidth]);

  return (
    <Styled.Container ref={containerRef}>
      <FadeInContent delay={1}>
        <Styled.Sidebar>
          <Styled.LinkContainer>
            <Styled.Link href="https://github.com/junghyeonsu" target="_blank">
              GitHub<YellowPoint>.</YellowPoint>
            </Styled.Link>
            <Styled.Link href="https://junghyeonsu.tistory.com/" target="_blank">
              Tistory Blog<YellowPoint>.</YellowPoint>
            </Styled.Link>
            <Styled.Link href="https://velog.io/@junghyeonsu" target="_blank">
              Velog<YellowPoint>.</YellowPoint>
            </Styled.Link>
            <Styled.Link
              href="https://www.youtube.com/channel/UCkC6sYPPSvpnRprmp2GcXZw"
              target="_blank"
            >
              YouTube<YellowPoint>.</YellowPoint>
            </Styled.Link>
          </Styled.LinkContainer>

          <Styled.BottomContainer>
            <Styled.Email href="mailto:jung660317@naver.com">jung660317@naver.com</Styled.Email>
            <Styled.LastUpdated>Last update: {LAST_UPDATED}</Styled.LastUpdated>
          </Styled.BottomContainer>
        </Styled.Sidebar>
      </FadeInContent>
      <Styled.Main>
        <FadeInHeaderText delay={1.5}>
          <Styled.SubTitle>기록과 공유를 좋아하는</Styled.SubTitle>
        </FadeInHeaderText>
        <FadeInHeaderText delay={1.9}>
          <Styled.Title>
            <Underline color={UNDER_LINE_COLOR} delay={2.4}>
              정현수
            </Underline>
          </Styled.Title>
          <Styled.SubTitle>입니다.</Styled.SubTitle>
        </FadeInHeaderText>
        <FadeInBodyText delay={2.6}>
          <Styled.BodyTextContainer>
            <Styled.BodyText>프론트엔드 개발자를 희망하고 있습니다.</Styled.BodyText>
            <Styled.BodyText>배운 모든 것을 기록하고 공유하는 것을 좋아합니다.</Styled.BodyText>
            <Styled.BodyText>
              공유의 중요성을 잘 알기에 항상 새기고 실천하려고 노력합니다.
            </Styled.BodyText>
          </Styled.BodyTextContainer>
        </FadeInBodyText>
        <Styled.ImageBox>
          <FadeInContent delay={1}>
            <img src="/hyeonsu.jpeg" alt="hyeonsu-background" draggable={false} />
          </FadeInContent>
        </Styled.ImageBox>
      </Styled.Main>
    </Styled.Container>
  );
};

export default Introduction;

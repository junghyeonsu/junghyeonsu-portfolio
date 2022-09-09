import React from 'react';

import { Explain, InlineLinkText } from '../../common';
import * as Styled from '../../styled';

const MyTechBlog = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>블로그</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="정현수-기술-블로그">
        <InlineLinkText href="https://junghyeonsu-dev.vercel.app/">정현수 기술 블로그</InlineLinkText>
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain>2022/04/06일 직접 깃허브 블로그 배포 완료</Explain>
        <Explain>많은 기능들을 적용해보고 싶은 욕심에 직접 제작</Explain>
        <Explain>앞으로 대부분의 포스팅 해당 블로그에 올릴 예정</Explain>
        <Explain>Next.JS + emotion + chakra UI + vercel로 제작</Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default MyTechBlog;

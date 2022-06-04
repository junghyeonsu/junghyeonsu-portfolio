import React from 'react';
import * as Styled from '../../styled';
import { Explain, Links } from '../../common';

const LINKS = [
  {
    text: '공부한 내용 올리는 레파지토리',
    href: 'https://github.com/junghyeonsu/video-lectures',
  },
];

const VideoLectures = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>개인 공부</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="영상-강의-정리">영상 강의 정리</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2022년 2월 16일 - 진행중</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>영상 강의 들었던 내용들을 정리하고 기록하는 레파지토리</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default VideoLectures;

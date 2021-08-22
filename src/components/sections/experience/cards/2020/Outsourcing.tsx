import React from 'react';
import styled from 'styled-components';

import { FadeInContent } from '#/components/common/gsap';
import { FADE_IN_DELAY } from '#/constants';

import CardContainer from '#/components/sections/experience/cards/CardContainer';
import CardHeader from '#/components/sections/experience/cards/CardHeader';
import CardBody from '#/components/sections/experience/cards/CardBody';
import CardBodyText from '#/components/sections/experience/cards/CardBodyText';
import CardBodyTextContainer from '#/components/sections/experience/cards/CardBodyTextContainer';
import Hyperlink from '#/components/sections/experience/cards/Hyperlink';
import HyperlinkContainer from '#/components/sections/experience/cards/HyperlinkContainer';
import SkillList from '#/components/sections/experience/cards/SkillList';
import SkillItem from '#/components/sections/experience/cards/SkillItem';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ff7e28;
`;

const data = {
  title: '가온 Travel 외주 작업',
  date: '2020년 9월 - 2020년 11월',
  bodyTexts: [
    '비대면 퀴즈 웹 애플리케이션 제작',
    '모바일에서 동작하는 웹 애플리케이션을 위해 반응형으로 제작',
    '관리자 페이지를 만들어 퀴즈와 퀴즈 정답 관리',
  ],
  hyperlinks: [
    {
      href: ' https://github.com/junghyeonsu/tour_react_app',
      text: '깃허브 레파지토리',
    },
    {
      href: 'https://www.youtube.com/watch?v=decpJ3a0ow0',
      text: '행사 영상',
    },
  ],
  skills: [
    'React',
    'MobX',
    'Axios',
    'Material UI',
    'MongoDB',
    'AWS EC2',
    'NodeJS',
  ],
};

const Component = () => {
  return (
    <FadeInContent delay={FADE_IN_DELAY}>
      <Container>
        <CardContainer>
          <CardHeader title={data.title} date={data.date} />
          <CardBody>
            <CardBodyTextContainer>
              {data.bodyTexts.map(bodyText => {
                return <CardBodyText text={bodyText} key={bodyText} />;
              })}
            </CardBodyTextContainer>
            <HyperlinkContainer>
              {data.hyperlinks.map(hyperlink => {
                return (
                  <Hyperlink
                    key={hyperlink.text}
                    href={hyperlink.href}
                    text={hyperlink.text}
                  />
                );
              })}
            </HyperlinkContainer>
          </CardBody>
          <SkillList>
            {data.skills.map(skill => {
              return <SkillItem key={skill} skill={skill} />;
            })}
          </SkillList>
        </CardContainer>
      </Container>
    </FadeInContent>
  );
};

export default Component;

import React from 'react';
import styled from 'styled-components';

import { FadeInContent } from '#/components/common/gsap';
import { FADE_IN_DELAY } from '#/constants';

import CardContainer from '#/components/sections/experience/cards/CardContainer';
import CardHeader from '#/components/sections/experience/cards/CardHeader';
import CardBody from '#/components/sections/experience/cards/CardBody';
import Hyperlink from '#/components/sections/experience/cards/Hyperlink';
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

const Component = () => {
  return (
    <FadeInContent delay={FADE_IN_DELAY}>
      {/* 이름 */}
      {/* 기간 */}
      {/* 내용  */}
      {/* 사용기술  */}
      {/* IF 블로그 */}
      {/* 하얀마인드는 명함 */}
      {/* 깃허브 주소 */}
      <Container>
        <CardContainer>
          <CardHeader title="외주 작업" date="2020 ~ 2021" />
          <CardBody>
            바디입니다.
            <Hyperlink href="#" text="링크입니다" />
          </CardBody>
          <SkillList>
            <SkillItem skill="React" />
          </SkillList>
        </CardContainer>
      </Container>
    </FadeInContent>
  );
};

export default Component;

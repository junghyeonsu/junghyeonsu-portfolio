import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { BLACK_TEXT_COLOR } from '#/colors';
import { SKILL_ARTICLE_AREA, BOLD_TEXT } from '#/constants';
import { FadeInContent } from '#/components/common/gsap';
import { useLayoutContext } from '#/contexts/LayoutContext';
import SkillBar from '#/components/sections/skill/SkillBar';
import SkillGrowingBar from '#/components/sections/skill/SkillGrowingBar';

interface SkillItemProps {
  exp: number;
  delay: number;
  skill: string;
}

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65vw;
  color: ${BLACK_TEXT_COLOR};
`;

const SkillNameContainer = styled.div`
  width: 15vw;
`;

const SkillBarContainer = styled.div`
  width: 50vw;
  height: 2vw;
  margin-left: 1.5vw;
  position: relative;
`;

const Skill = styled.p`
  text-align: right;
  font-size: 1.5vw;
  font-family: ${BOLD_TEXT};
`;

// usage: 스킬 한 줄을 담고있는 컴포넌트
// exp: 숙련도
// delay: 실행 딜레이 ex: 2, 2.5 (GSAP가 아니라면 1000 곱해줘야 함)
// skill: 기술 스택 이름
const SkillItem = ({ exp, delay, skill }: SkillItemProps) => {
  const [barGuage, setBarGuage] = useState<number>(0);

  const { currentArea }: any = useLayoutContext(); // eslint-disable-line 

  useEffect(() => {
    if (SKILL_ARTICLE_AREA === currentArea) {
      setTimeout(() => {
        setBarGuage(exp);
      }, delay * 1000);
    } else {
      setTimeout(() => {
        setBarGuage(0);
      }, 150);
    }
  }, [currentArea, delay, exp]);

  return (
    <FadeInContent delay={delay}>
      <ItemContainer>
        <SkillNameContainer>
          <Skill>{skill}</Skill>
        </SkillNameContainer>
        <SkillBarContainer>
          <SkillBar />
          <SkillGrowingBar delay={delay} barGuage={barGuage} />
        </SkillBarContainer>
      </ItemContainer>
    </FadeInContent>
  );
};

export default SkillItem;

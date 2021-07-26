import React, { useState } from 'react';
import styled from 'styled-components';

import { BLACK_TEXT_COLOR } from '#/colors';
import { SKILL_ARTICLE_AREA } from '#/constants';
import { FadeInContent } from '#/components/common/gsap';
import Counter from '#/components/common/counter';

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
`;

const FullBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44vw;
  height: 2vw;
  background-color: #ffffff;
  z-index: 0;
`;

const ExpBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => (44 / 100) * props.barGuage}vw;
  height: 2vw;
  background-color: #fff346;
  transition: width 3s ease;
  z-index: 1;
`;

const Exp = styled.p`
  width: 5vw;
  font-size: 1.5vw;
  text-align: center;
`;

// usage: 스킬 한 줄을 담고있는 컴포넌트
// exp: 숙련도
// delay: 실행 딜레이 ex: 2, 2.5 (GSAP가 아니라면 1000 곱해줘야 함)
// skill: 기술 스택 이름
const SkillItem = ({ exp, delay, skill }: SkillItemProps) => {
  const [barGuage, setBarGuage] = useState<number>(0);
  return (
    <FadeInContent delay={delay}>
      <ItemContainer>
        <SkillNameContainer>
          <Skill>{skill}</Skill>
        </SkillNameContainer>
        <SkillBarContainer>
          <FullBar />
          <ExpBar barGuage={barGuage} />
        </SkillBarContainer>
        <Exp>
          <Counter
            number={exp}
            delay={delay + 1.5}
            trigger={SKILL_ARTICLE_AREA}
            setGuage={setBarGuage}
          />
        </Exp>
      </ItemContainer>
    </FadeInContent>
  );
};

export default SkillItem;

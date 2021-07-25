import React from 'react';
import styled from 'styled-components';

import { BLACK_TEXT_COLOR } from '#/colors';
import { SKILL_ARTICLE_AREA } from '#/constants';
import { BounceFadeInText, FadeInContent } from '#/components/common/gsap';
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Skill = styled.p`
  text-align: right;
  font-size: 1.5vw;
`;

const Bar = styled.div`
  width: 44vw;
`;

const Exp = styled.p`
  width: 5vw;
  font-size: 1.5vw;
  text-align: center;
`;

const SkillItem = ({ exp, delay, skill }: SkillItemProps) => {
  return (
    <ItemContainer>
      {/* <BounceFadeInText delay={delay}>{children}</BounceFadeInText> */}
      <SkillNameContainer>
        <Skill>{skill}</Skill>
      </SkillNameContainer>
      <SkillBarContainer>
        <Bar>BAR</Bar>
        {/* <FadeInContent delay={delay}> */}
        <Exp>
          <Counter number={exp} delay={delay} trigger={SKILL_ARTICLE_AREA} />
        </Exp>
        {/* </FadeInContent> */}
      </SkillBarContainer>
    </ItemContainer>
  );
};

export default SkillItem;

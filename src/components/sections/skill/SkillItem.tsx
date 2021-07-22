import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

import { BLACK_TEXT_COLOR } from '#/colors';

import { BounceFadeInText } from '#/components/common/gsap';

interface SkillItemProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  delay: number;
}

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${BLACK_TEXT_COLOR};
`;

const SkillItem = ({ children, delay }: SkillItemProps) => {
  return (
    <Skill>
      <BounceFadeInText delay={delay}>{children}</BounceFadeInText>
    </Skill>
  );
};

export default SkillItem;

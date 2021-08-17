import React from 'react';
import styled from 'styled-components';

import { useExperienceContext } from '#/contexts/ExperienceContext';

import { REGULAR_TEXT } from '#/constants';

interface Color {
  color: string;
}

interface HyperlinkProps {
  skill: string;
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px;
  height: 30px;
  column-gap: 5px;
  border-radius: 7px;
  background-color: ${(props: Color) => props.color};
  transition: all 0.3s ease;

  :hover {
    transform: scale(1.03);
  }
`;

const Skill = styled.span`
  font-family: ${REGULAR_TEXT};
`;

const SkillItem = ({ skill }: HyperlinkProps) => {
    const { lineColor }: any = useExperienceContext(); // eslint-disable-line
  return (
    <Container color={lineColor}>
      <Skill>{skill}</Skill>
    </Container>
  );
};

export default SkillItem;

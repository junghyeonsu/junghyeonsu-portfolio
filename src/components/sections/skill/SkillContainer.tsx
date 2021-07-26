import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

import { BLACK_TEXT_COLOR } from '#/colors';

interface Props {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
}

const Skills = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${BLACK_TEXT_COLOR};
`;

const SkillContainer = ({ children }: Props) => {
  return <Skills>{children}</Skills>;
};

export default SkillContainer;
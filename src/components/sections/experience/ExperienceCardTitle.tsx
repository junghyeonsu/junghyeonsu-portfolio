import React from 'react';
import styled from 'styled-components';

import { WHITE_TEXT_COLOR } from '#/colors';
import { BOLD_TEXT } from '#/constants';

interface CardTitleProps {
  children: React.ReactNode;
}

const Title = styled.h1`
  position: absolute;
  top: 30px;
  left: 60px;
  font-size: 40px;
  color: ${WHITE_TEXT_COLOR};
  font-family: ${BOLD_TEXT};

  @media ${props => props.theme.mobile} {
    font-size: 5vw;
  }
`;

const ExperienceCardTitle = ({ children }: CardTitleProps) => {
  return <Title>{children}</Title>;
};

export default ExperienceCardTitle;

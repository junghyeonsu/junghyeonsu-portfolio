import React from 'react';
import styled from 'styled-components';
import YellowPoint from '#/components/YellowPoint';

import { BOLD_TEXT } from '#/constants';

const StyledExperienceTitle = styled.h1`
  width: 1100px;
  font-size: 80px;
  font-family: ${BOLD_TEXT};
  margin: 0;

  @media ${props => props.theme.mobile} {
    font-size: 40px;
  }
`;

const Divide = styled.div`
  width: 1100px;
  height: 6.5px;
  margin-top: 30px;
  background-color: #f8cd07;
`;

const ExperienceTitle = ({ title }: { title: string }) => {
  return (
    <StyledExperienceTitle>
      {title}
      <YellowPoint>.</YellowPoint>
      <Divide />
    </StyledExperienceTitle>
  );
};

export default ExperienceTitle;

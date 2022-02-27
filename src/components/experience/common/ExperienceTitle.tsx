import React from 'react';
import styled from 'styled-components';
import YellowPoint from '#/components/YellowPoint';

import { BOLD_TEXT } from '#/constants';

export const StyledExperienceTitle = styled.div`
  text-align: left;
  width: 100%;
  font-family: ${BOLD_TEXT};
  font-size: 100px;
  z-index: 5;

  @media ${props => props.theme.mobile} {
    font-size: 40px;
    text-align: left;
    padding: 50px;
  }
`;

const ExperienceTitle = ({ title }: { title: string }) => {
  return (
    <StyledExperienceTitle>
      {title}
      <YellowPoint>.</YellowPoint>
    </StyledExperienceTitle>
  );
};

export default ExperienceTitle;

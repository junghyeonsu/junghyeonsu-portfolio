import React from 'react';
import styled from 'styled-components';
import YellowPoint from '#/components/YellowPoint';

import { BOLD_TEXT, DESKTOP_CONTENT_WIDTH } from '#/constants';

const StyledExperienceTitle = styled.h1`
  width: ${DESKTOP_CONTENT_WIDTH};
  font-size: 70px;
  font-family: ${BOLD_TEXT};
  margin: 0;

  @media ${props => props.theme.desktop} {
    width: ${DESKTOP_CONTENT_WIDTH};
  }

  @media ${props => props.theme.tablet} {
    width: 80vw;
  }

  @media ${props => props.theme.mobile} {
    width: 90vw;
    font-size: 50px;
  }
`;

const Divide = styled.div`
  width: ${DESKTOP_CONTENT_WIDTH};
  height: 6.5px;
  margin-top: 30px;
  background-color: #f8cd07;

  @media ${props => props.theme.desktop} {
    width: ${DESKTOP_CONTENT_WIDTH};
  }

  @media ${props => props.theme.tablet} {
    width: 80vw;
  }

  @media ${props => props.theme.mobile} {
    width: 90vw;
  }
`;

const ExperienceTitle = ({ title }: { title: string }) => {
  return (
    <StyledExperienceTitle id={title}>
      {title}
      <YellowPoint>.</YellowPoint>
      <Divide />
    </StyledExperienceTitle>
  );
};

export default ExperienceTitle;

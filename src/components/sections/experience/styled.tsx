import styled from 'styled-components';

import { BOLD_TEXT } from '#/constants';

// All

export const ExperienceContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5vw;
  z-index: 5;
`;

export const ExperienceTitle = styled.div`
  text-align: left;
  width: 100%;
  font-family: ${BOLD_TEXT};
  font-size: 80px;
  z-index: 5;

  @media ${props => props.theme.mobile} {
    font-size: 40px;
    text-align: left;
    padding: 50px;
  }
`;

// Card

export const ExperienceCard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  width: 1100px;
  background-color: white;

  @media ${props => props.theme.laptop} {
    width: 80vw;
  }
`;

export const ExperienceCardTopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExperienceCardTitleType = styled.span`
  font-size: 26px;
`;

export const ExperienceCardTitle = styled.h1`
  font-size: 40px;
  margin: 0;
  font-family: ${BOLD_TEXT};

  @media ${props => props.theme.mobile} {
    font-size: 5vw;
  }
`;

export const ExperienceCardPeriod = styled.span`
  font-size: 20px;
  color: #6e6e6e;
`;

export const HyperlinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

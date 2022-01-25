import styled from 'styled-components';

import { BOLD_TEXT } from '#/constants';
import { BLACK_TEXT_COLOR } from '#/colors';

// All

export const ExperienceContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${BLACK_TEXT_COLOR};
  margin-right: 5vw;
  row-gap: 1vw;
  z-index: 5;
`;

export const ExperienceTitle = styled.div`
  text-align: center;
  width: 100%;
  padding: 100px;
  font-family: ${BOLD_TEXT};
  font-size: 60px;
  z-index: 5;

  @media ${props => props.theme.mobile} {
    font-size: 40px;
    text-align: center;
    padding: 50px;
  }
`;

// Card

export const ExperienceCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 1100px;
  background-color: rgba(255, 255, 255, 0.705);
  box-shadow: 17px 20px 13px -4px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),4px -1px 15px -3px rgba(0,0,0,0.1);
  border-radius: 30px;
  color: rgba(0, 0, 0, 0.8);

  @media ${props => props.theme.laptop} {
    width: 80vw;
  }
`;

export const ExperienceCardTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-between;
`;

export const ExperienceCardTitleType = styled.span`
  font-size: 26px;
`;

export const ExperienceCardTitle = styled.h1`
  font-size: 40px;
  margin: 0;
  color: ${BLACK_TEXT_COLOR};
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

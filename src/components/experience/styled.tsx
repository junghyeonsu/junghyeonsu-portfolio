import styled from 'styled-components';

import { BOLD_TEXT } from '#/constants';

// All
export const Container = styled.article`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: rgb(245, 245, 245);
  color: black;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  row-gap: 70px;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
`;

// Card

export const ExperienceCard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  width: 1100px;
  background-color: rgb(245, 245, 245);

  @media ${props => props.theme.laptop} {
    width: 80vw;
  }
`;

export const ExperienceCardTopContainer = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 20px;
`;

export const ExperienceCardTitleType = styled.span`
  font-size: 30px;
`;

export const ExperienceCardTitle = styled.h2`
  font-size: 50px;
  margin: 0;
  font-family: ${BOLD_TEXT};
  /* 
  @media ${props => props.theme.mobile} {
    font-size: 5vw;
  } */
`;

export const ExperienceCardSubTitle = styled.h3`
  font-size: 40px;
  margin: 0;
  font-family: ${BOLD_TEXT};
`;

export const ExperienceCardPeriod = styled.span`
  font-size: 20px;
  color: #000000;
`;

export const ExperienceCardExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

export const HyperLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SkillItem = styled.div`
  &:after {
    content: '·';
    margin: 0 6px;
  }

  &:last-child::after {
    content: '';
    margin: 0;
  }
`;

export const SkillIcon = styled.img`
  object-fit: contain;
  width: 50px;
  height: 50px;
`;

import styled from 'styled-components';

import { BOLD_TEXT, DESKTOP_CONTENT_WIDTH } from '#/constants';

// All
export const Container = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  background-color: rgb(245, 245, 245);
`;

export const TableOfContents = styled.nav`
  position: sticky;
  top: 0;
  width: 20vw;
  height: 100vh;
`;

export const Contents = styled.article`
  display: flex;
  flex-direction: column;
  width: 80vw;
  padding: 40px;
  color: black;
`;

export const ExperienceContainer = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 70px;
  margin-top: 50px;
  margin-bottom: 100px;

  @media ${props => props.theme.mobile} {
    row-gap: 55px;
  }
`;

// Card

export const ExperienceCard = styled.article`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  width: ${DESKTOP_CONTENT_WIDTH};
  background-color: rgb(245, 245, 245);

  @media ${props => props.theme.desktop} {
    width: ${DESKTOP_CONTENT_WIDTH};
  }

  @media ${props => props.theme.tablet} {
    width: 80vw;
  }

  @media ${props => props.theme.mobile} {
    width: 80vw;
  }
`;

export const ExperienceCardTopContainer = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 25px;

  @media ${props => props.theme.mobile} {
    row-gap: 15px;
  }
`;

export const ExperienceCardTitleType = styled.span`
  font-size: 24px;

  @media ${props => props.theme.mobile} {
    font-size: 20px;
  }
`;

export const ExperienceCardTitle = styled.h2`
  display: flex;
  align-items: center;
  column-gap: 20px;
  font-size: 40px;
  margin: 0;
  font-family: ${BOLD_TEXT};

  @media ${props => props.theme.mobile} {
    font-size: 32px;
  }
`;

export const ExperienceCardSubTitle = styled.h3`
  font-size: 30px;
  margin: 0;
  font-family: ${BOLD_TEXT};
`;

export const ExperienceCardPeriod = styled.span`
  font-size: 18px;

  @media ${props => props.theme.mobile} {
    font-size: 16px;
  }
`;

export const ExperienceCardExplainContainer = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

export const HyperLinkContainer = styled.article`
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

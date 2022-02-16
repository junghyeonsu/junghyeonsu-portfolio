import styled from 'styled-components';
import LinkIcon from '@material-ui/icons/Link';
import CheckIcon from '@material-ui/icons/Check';

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
  font-size: 100px;
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

export const ExperienceCardTitle = styled.h1`
  font-size: 50px;
  margin: 0;
  font-family: ${BOLD_TEXT};

  @media ${props => props.theme.mobile} {
    font-size: 5vw;
  }
`;

export const ExperienceCardPeriod = styled.span`
  font-size: 20px;
  color: #000000;
`;

export const ExperienceCardExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const ExperienceCardExplain = styled.span`
  display: flex;
  column-gap: 10px;
  font-size: 23px;
`;

export const ExplainCheckIcon = styled(CheckIcon)`
  color: rgb(255, 174, 0);
`;

export const HyperLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const HyperLink = styled.a`
  display: flex;
  column-gap: 10px;

  text-decoration: none;
  font-size: 23px;
  width: fit-content;

  background: linear-gradient(to right, transparent 50%, rgb(255, 218, 55) 50%);
  background-size: 200%;
  background-position: 0 0;

  transition: 0.25s ease;

  :hover {
    background-position: -100% 0;
  }
`;

export const HyperLinkIcon = styled(LinkIcon)``;

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styled from 'styled-components';

import { BOLD_TEXT } from '#/constants';

export const Container = styled.section`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #202224;
  color: white;

  @media ${props => props.theme.tablet} {
    flex-direction: column;
    height: 150vh;
  }
`;

// Sidebar

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  height: 100%;

  @media ${props => props.theme.tablet} {
    width: 100vw;
    height: 100%;
    row-gap: 30px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin-top: 57px;
  font-family: ${BOLD_TEXT};
  row-gap: 15px;

  @media ${props => props.theme.tablet} {
    row-gap: 5px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  width: 100%;
  height: 100%;
  font-size: 30px;
  text-align: left;
  padding: 10px;

  background: linear-gradient(to right, transparent 50%, rgb(248, 205, 7) 50%);
  background-size: 200%;
  background-position: 0 0;

  transition: 0.25s ease;

  :hover {
    background-position: -100% 0;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const Email = styled.a`
  text-decoration: none;
  font-size: 16px;

  :hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const LastUpdated = styled.p`
  color: rgba(255, 255, 255, 0.7);
`;

// Main

export const Main = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 100%;

  @media ${props => props.theme.tablet} {
    width: 100vw;
    height: 200vh;
  }

  @media ${props => props.theme.mobile} {
    width: 100vw;
    height: 200vh;
  }
`;

export const SubTitle = styled.span`
  font-size: 50px;

  @media ${props => props.theme.tablet} {
    font-size: 40px;
  }

  @media ${props => props.theme.mobile} {
    font-size: 28px;
  }
`;

export const Title = styled.span`
  font-size: 85px;

  @media ${props => props.theme.tablet} {
    font-size: 70px;
  }

  @media ${props => props.theme.mobile} {
    font-size: 38px;
  }
`;

export const BodyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BodyText = styled.span`
  font-size: 30px;

  @media ${props => props.theme.tablet} {
    font-size: 23px;
  }

  @media ${props => props.theme.mobile} {
    font-size: 14px;
  }
`;

export const ImageBox = styled.div`
  position: fixed;
  left: 20%;
  top: 0;
  opacity: 0.5;
  width: 100vw;

  img {
    width: 80vw;
    height: 100vh;
    object-fit: cover;
  }

  @media ${props => props.theme.tablet} {
    position: absolute;
    left: 0;
    img {
      width: 100vw;
    }
  }

  @media ${props => props.theme.mobile} {
    position: absolute;
    left: 0;
    img {
      width: 100vw;
    }
  }
`;

export const DownAnimatedArrow = styled(KeyboardArrowDownIcon)`
  margin-top: 100px;
  animation: bounce 1.5s ease infinite;
  color: white;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-27px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

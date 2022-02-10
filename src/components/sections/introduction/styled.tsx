import styled from 'styled-components';

import { BOLD_TEXT } from '#/constants';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #202224;
  color: white;

  @media ${props => props.theme.mobile} {
    flex-direction: column;
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
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 57px;
  font-family: ${BOLD_TEXT};
  row-gap: 15px;
`;

export const Link = styled.a`
  transition: 0.2s color ease;
  text-decoration: none;
  font-size: 30px;

  :hover {
    color: rgba(255, 255, 255, 0.3);
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

export const Main = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 100%;
`;

export const SubTitle = styled.span`
  font-size: 3vw;
`;

export const Title = styled.span`
  font-size: 6vw;
`;

export const BodyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BodyText = styled.span`
  font-size: 30px;
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
`;

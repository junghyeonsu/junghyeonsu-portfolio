import styled from 'styled-components';
import { UNDER_LINE_COLOR } from '#/colors';
import { BOLD_TEXT } from '#/constants';

interface ContainerProps {
  visible: boolean;
  isOver1600px: boolean;
}

interface H3CircleProps {
  active: boolean;
  isOver1600px: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  position: fixed;
  flex-direction: column;
  right: 20px;
  top: 20px;
  height: 50vh;
  justify-content: space-between;
  align-items: ${({ isOver1600px }) => (isOver1600px ? '' : 'flex-end')};
  transition: all 0.1s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

export const AnchorContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Anchor = styled.a`
  text-decoration: none;
`;

export const H1 = styled.div`
  font-size: 16px;
  font-family: ${BOLD_TEXT};
  transition: all 0.2s ease;
  transform: ${({ active }: { active: boolean }) => (active ? 'scale(1.15)' : '')};
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const H2 = styled.div`
  font-size: 15px;
  transition: all 0.2s ease;
  color: ${({ active }: { active: boolean }) => (active ? UNDER_LINE_COLOR : '#6e6e6e')};

  :hover {
    color: ${({ active }: { active: boolean }) => (active ? UNDER_LINE_COLOR : '#b8b8b8')};
  }
`;

export const H2Circle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${({ active }: { active: boolean }) => (active ? UNDER_LINE_COLOR : '#6e6e6e')};
`;

export const H3 = styled.div`
  position: relative;
  left: 20px;
  font-size: 15px;
  transition: all 0.2s ease;
  color: ${({ active }: { active: boolean }) => (active ? UNDER_LINE_COLOR : '#6e6e6e')};

  :hover {
    color: ${({ active }: { active: boolean }) => (active ? UNDER_LINE_COLOR : '#b8b8b8')};
  }
`;

export const H3Circle = styled.div<H3CircleProps>`
  position: relative;
  left: ${({ isOver1600px }) => (isOver1600px ? '20px' : '0px')};
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? UNDER_LINE_COLOR : '#6e6e6e')};
`;

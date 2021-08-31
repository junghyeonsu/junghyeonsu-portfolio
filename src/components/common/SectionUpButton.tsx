import React, { useMemo } from 'react';
import styled from 'styled-components';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useLayoutContext } from '#/contexts/LayoutContext';
import { SKILL_ARTICLE_AREA } from '#/constants';

interface Color {
  isWhiteColor: boolean;
}

const Container = styled.div`
  display: none;
  position: fixed;
  top: 23vh;
  right: 3vw;
  z-index: 10;
  color: ${(props: Color) =>
    props.isWhiteColor ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'};
  padding: 1vw;
  border-radius: 10px;
  transition: all 0.3s ease;
  animation: wiggleAtTop 1s ease infinite;

  @media ${props => props.theme.mobile} {
    display: block;
  }

  :hover {
    background: ${(props: Color) =>
      props.isWhiteColor ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    color: ${(props: Color) =>
      props.isWhiteColor ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
  }

  @keyframes wiggleAtTop {
    0% {
      top: 23vh;
    }

    50% {
      top: 22vh;
    }

    100% {
      top: 23vh;
    }
  }
`;

const SectionUpButton = () => {
  const { onClickSectionUpButton, currentArea }: any = useLayoutContext(); // eslint-disable-line

  const isWhiteColor = useMemo(() => {
    if (currentArea === SKILL_ARTICLE_AREA) return false;
    return true;
  }, [currentArea]);

  return (
    <Container isWhiteColor={isWhiteColor} onClick={onClickSectionUpButton}>
      <ExpandLessIcon />
    </Container>
  );
};

export default SectionUpButton;

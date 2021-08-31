import React, { useMemo } from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useLayoutContext } from '#/contexts/LayoutContext';
import { SKILL_ARTICLE_AREA } from '#/constants';

interface Color {
  isWhiteColor: boolean;
}

const Container = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: ${(props: Color) =>
    props.isWhiteColor ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'};
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  animation: wiggleAtBottom 1s ease infinite;

  @media ${props => props.theme.mobile} {
    display: block;
  }

  :hover {
    background: ${(props: Color) =>
      props.isWhiteColor ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    color: ${(props: Color) =>
      props.isWhiteColor ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
  }

  @keyframes wiggleAtBottom {
    0% {
      bottom: 0;
    }

    50% {
      bottom: 5px;
    }

    100% {
      bottom: 0;
    }
  }
`;

const SectionDownButton = () => {
  const { onClickSectionDownButton, currentArea }: any = useLayoutContext(); // eslint-disable-line

  const isWhiteColor = useMemo(() => {
    if (currentArea === SKILL_ARTICLE_AREA) return false;
    return true;
  }, [currentArea]);

  return (
    <Container isWhiteColor={isWhiteColor} onClick={onClickSectionDownButton}>
      <ExpandMoreIcon />
    </Container>
  );
};

export default SectionDownButton;

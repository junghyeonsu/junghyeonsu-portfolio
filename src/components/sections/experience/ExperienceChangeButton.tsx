import React from 'react';
import styled from 'styled-components';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { useExperienceContext } from '#/contexts/ExperienceContext';
import { WHITE_UNACTIVE_TEXT_COLOR, WHITE_HOVER_TEXT_COLOR } from '#/colors';

const LeftButton = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  color: ${WHITE_UNACTIVE_TEXT_COLOR};
  animation: wiggleToLeft 1s infinite;
  padding: 10px;
  transition: all 0.3s ease;

  :hover {
    cursor: pointer;
    color: ${WHITE_HOVER_TEXT_COLOR};
    background-color: rgba(237, 242, 247, 0.1);
  }

  @keyframes wiggleToLeft {
    0% {
      left: 5%;
    }

    50% {
      left: 4.5%;
    }

    100% {
      left: 5%;
    }
  }
`;

const RightButton = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  color: ${WHITE_UNACTIVE_TEXT_COLOR};
  animation: wiggleToRight 1s infinite;
  padding: 10px;
  transition: all 0.3s ease;

  :hover {
    cursor: pointer;
    color: ${WHITE_HOVER_TEXT_COLOR};
    background-color: rgba(237, 242, 247, 0.1);
  }

  @keyframes wiggleToRight {
    0% {
      right: 5%;
    }

    50% {
      right: 4.5%;
    }

    100% {
      right: 5%;
    }
  }
`;

const ExperienceProgress = () => {
  const { onClickLeft, onClickRight }: any = useExperienceContext(); // eslint-disable-line
  return (
    <>
      <LeftButton onClick={onClickLeft}>
        <ChevronLeftIcon fontSize="large" />
      </LeftButton>
      <RightButton onClick={onClickRight}>
        <ChevronRightIcon fontSize="large" />
      </RightButton>
    </>
  );
};

export default ExperienceProgress;

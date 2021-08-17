import React from 'react';
import styled from 'styled-components';

import { Underline } from '#/components/common/gsap';
import { BOLD_TEXT, REGULAR_TEXT, UNDER_LINE_DELAY } from '#/constants';
import { WHITE_UNACTIVE_TEXT_COLOR, WHITE_HOVER_TEXT_COLOR } from '#/colors';

import { useExperienceContext } from '#/contexts/ExperienceContext';

interface UnSelectYearProps {
  isActive: boolean;
}

const YearContainer = styled.div`
  display: flex;
  align-items: baseline;
  position: absolute;
  top: 8%;
  right: 5%;
  z-index: 5;
  column-gap: 10px;
`;

const UnSelectYear = styled.div`
  font-size: 2vw;
  color: ${WHITE_UNACTIVE_TEXT_COLOR};
  font-family: ${REGULAR_TEXT};
  padding: 10px;
  border-radius: 2px;
  transition: all 0.3s ease;
  animation: init 3s ease;

  :hover {
    color: ${(props: UnSelectYearProps) =>
      props.isActive ? WHITE_HOVER_TEXT_COLOR : ''};
    background-color: ${(props: UnSelectYearProps) =>
      props.isActive ? 'rgba(255, 255, 255, 0.1)' : ''};
    cursor: ${(props: UnSelectYearProps) =>
      props.isActive ? 'pointer' : 'not-allowed'};
  }

  @keyframes init {
    0% {
      color: rgba(255, 255, 255, 0.1);
      background-color: rgba(255, 255, 255, 0);
    }
    80% {
      color: rgba(255, 255, 255, 0.1);
      background-color: rgba(255, 255, 255, 0);
    }
    90% {
      color: rgba(255, 255, 255, 0.9);
      background-color: rgba(255, 255, 255, 0.1);
    }
    100% {
      color: ${WHITE_UNACTIVE_TEXT_COLOR};
      background-color: rgba(255, 255, 255, 0);
    }
  }
`;

const SelectYear = styled.div`
  font-size: 3.4vw;
  font-family: ${BOLD_TEXT};
`;

const YEAR_LIST = [2020, 2021];

const ExperienceYearSelect = () => {
  // eslint-disable-next-line
  const { year, onClickYear, isActive, lineColor }: any =
    useExperienceContext();

  return (
    <YearContainer>
      {YEAR_LIST.map(yearItem => {
        return year === yearItem ? (
          <Underline key={yearItem} color={lineColor} delay={UNDER_LINE_DELAY}>
            <SelectYear>{yearItem}</SelectYear>
          </Underline>
        ) : (
          <UnSelectYear
            isActive={isActive}
            key={yearItem}
            onClick={isActive ? () => onClickYear(yearItem) : undefined}
          >
            {yearItem}
          </UnSelectYear>
        );
      })}
    </YearContainer>
  );
};

export default ExperienceYearSelect;

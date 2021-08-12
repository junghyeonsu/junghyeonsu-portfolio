import React, { useMemo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { Underline } from '#/components/common/gsap';
import { BOLD_TEXT, REGULAR_TEXT } from '#/constants';
import { WHITE_UNACTIVE_TEXT_COLOR, WHITE_HOVER_TEXT_COLOR } from '#/colors';
import { useExperienceContext } from '#/contexts/ExperienceContext';

interface YearContainerProps {
  delay: number;
}

const YearContainer = styled.div`
  display: flex;
  align-items: baseline;
  position: absolute;
  top: 8.2%;
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

  :hover {
    color: ${WHITE_HOVER_TEXT_COLOR};
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

const SelectYear = styled.div`
  font-size: 3vw;
  font-family: ${BOLD_TEXT};
`;

const ExperienceYearSelect = ({ delay }: YearContainerProps) => {
  const target = useRef(null);
  const { year, onClick2019, onClick2020, onClick2021 }: any = // eslint-disable-line
    useExperienceContext();

  useEffect(() => {
    gsap.from(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'restart reverse restart restart',
      },
      top: '-3%',
      opacity: 0,
      delay,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, [delay]);

  const YearOf2019 = useMemo(() => {
    return year === 2019 ? (
      <Underline delay={0.7}>
        <SelectYear>2019</SelectYear>
      </Underline>
    ) : (
      <UnSelectYear onClick={onClick2019}>2019</UnSelectYear>
    );
  }, [year, onClick2019]);

  const YearOf2020 = useMemo(() => {
    return year === 2020 ? (
      <Underline delay={0.7}>
        <SelectYear>2020</SelectYear>
      </Underline>
    ) : (
      <UnSelectYear onClick={onClick2020}>2020</UnSelectYear>
    );
  }, [year, onClick2020]);

  const YearOf2021 = useMemo(() => {
    return year === 2021 ? (
      <Underline delay={0.7}>
        <SelectYear>2021</SelectYear>
      </Underline>
    ) : (
      <UnSelectYear onClick={onClick2021}>2021</UnSelectYear>
    );
  }, [year, onClick2021]);

  return (
    <YearContainer ref={target}>
      {YearOf2019}
      {YearOf2020}
      {YearOf2021}
    </YearContainer>
  );
};

export default ExperienceYearSelect;

import React, {
  useState,
  useCallback,
  useMemo,
  SetStateAction,
  Dispatch,
} from 'react';
import styled from 'styled-components';

import { BOLD_TEXT } from '#/constants';
import ExperienceCard from '#/components/sections/experience/ExperienceCard';

interface Props {
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
}

interface ContainerProps {
  xLocation: number;
}

const ExperiencesOf2019 = [
  { id: 1, card: <ExperienceCard index={1} /> },
  { id: 2, card: <ExperienceCard index={2} /> },
  { id: 3, card: <ExperienceCard index={3} /> },
];

const ExperiencesOf2020 = [
  { id: 1, card: <ExperienceCard index={4} /> },
  { id: 2, card: <ExperienceCard index={5} /> },
  { id: 3, card: <ExperienceCard index={6} /> },
];

const ExperiencesOf2021 = [
  { id: 1, card: <ExperienceCard index={7} /> },
  { id: 2, card: <ExperienceCard index={8} /> },
  { id: 3, card: <ExperienceCard index={9} /> },
];

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 0;
  transition: transform 1s ease;
  transform: translateX(${(props: ContainerProps) => props.xLocation}vw)
    translateY(-50%);
`;

const YearContainer = styled.div`
  position: absolute;
  top: 8%;
  right: 5%;
  z-index: 5;
`;

const Year = styled.div`
  font-size: 2vw;
  font-family: ${BOLD_TEXT};
`;

const ButtonCotainer = styled.div`
  z-index: 5;
  display: flex;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

const Button = styled.button``;

const ExperienceCardList = ({ year, setYear }: Props) => {
  const [xLocation, setXLocation] = useState<number>(0);
  const onClickLeft = useCallback(() => {
    setXLocation(xLocation + 100);
  }, [xLocation]);

  const onClickRight = useCallback(() => {
    setXLocation(xLocation - 100);
  }, [xLocation]);

  const onClick2019 = useCallback(() => {
    setYear(2019);
  }, [setYear]);

  const onClick2020 = useCallback(() => {
    setYear(2020);
  }, [setYear]);

  const onClick2021 = useCallback(() => {
    setYear(2021);
  }, [setYear]);

  const nowExperienceList = useMemo(() => {
    switch (year) {
      case 2019:
        return ExperiencesOf2019;
      case 2020:
        return ExperiencesOf2020;
      case 2021:
        return ExperiencesOf2021;
      default:
        break;
    }
    return ExperiencesOf2019;
  }, [year]);

  return (
    <>
      <YearContainer>
        <Year>Now {year}</Year>
        <Year onClick={onClick2019}>See 2019</Year>
        <Year onClick={onClick2020}>See 2020</Year>
        <Year onClick={onClick2021}>See 2021</Year>
      </YearContainer>
      <Container xLocation={xLocation}>
        {nowExperienceList.map(experience => (
          <div key={experience.id}>{experience.card}</div>
        ))}
      </Container>
      <ButtonCotainer>
        <Button onClick={onClickLeft}>왼쪽</Button>
        <Button onClick={onClickRight}>오른쪽</Button>
      </ButtonCotainer>
    </>
  );
};

export default ExperienceCardList;

import React, {
  useContext,
  useCallback,
  useEffect,
  createContext,
  useState,
  ReactChild,
  ReactChildren,
  ReactElement,
} from 'react';

import Outsourcing from '#/components/sections/experience/cards/2020/Outsourcing';
import SatrecInitiative from '#/components/sections/experience/cards/2020/SatrecInitiative';
import Hackerton from '#/components/sections/experience/cards/2021/Hackerton';
import HayanMind from '#/components/sections/experience/cards/2021/HayanMind';
import Portfolio from '#/components/sections/experience/cards/2021/Portfolio';

const ExperiencesOf2020 = [
  { id: 1, card: <Outsourcing /> },
  { id: 2, card: <SatrecInitiative /> },
];

const ExperiencesOf2021 = [
  { id: 1, card: <Hackerton /> },
  { id: 2, card: <HayanMind /> },
  { id: 3, card: <Portfolio /> },
];

const ExperienceContext = createContext<Record<string, unknown>>({});

const ExperienceProvider = ({
  children,
}: {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
}): ReactElement => {
  const [xLocation, setXLocation] = useState<number>(0);
  const [year, setYear] = useState<number>(2020);
  const [nowExperienceList, setNowExperienceList] = useState(ExperiencesOf2020);
  const [nowExperienceIndex, setNowExperienceIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);

  // year 바뀔 때 경험 리스트 변경
  useEffect(() => {
    switch (year) {
      case 2020:
        setNowExperienceList(ExperiencesOf2020);
        break;
      case 2021:
        setNowExperienceList(ExperiencesOf2021);
        break;
      default:
        break;
    }
  }, [year]);

  // xLocation 관리
  useEffect(() => {
    const { length } = nowExperienceList;
    const last = (length - 1) * -100;
    const first = 0;

    // 왼쪽으로 넘어갔을 때
    if (xLocation > first) {
      setXLocation(last);
      setNowExperienceIndex(length - 1);
    }
    // 오른쪽으로 넘어갔을 때
    if (xLocation < last) {
      setXLocation(first);
      setNowExperienceIndex(0);
    }
  }, [xLocation, nowExperienceList]);

  const onClickLeft = useCallback(() => {
    setXLocation(xLocation + 100);
    setNowExperienceIndex(nowExperienceIndex - 1);
  }, [xLocation, nowExperienceIndex]);

  const onClickRight = useCallback(() => {
    setXLocation(xLocation - 100);
    setNowExperienceIndex(nowExperienceIndex + 1);
  }, [xLocation, nowExperienceIndex]);

  // 연도 변경 함수
  const onClickYear = useCallback((selectYear: number) => {
    setYear(selectYear);
    setIsActive(false);
    setTimeout(() => {
      setIsActive(true);
    }, 3000);
  }, []);

  return (
    <ExperienceContext.Provider
      value={{
        xLocation,
        year,
        nowExperienceList,
        nowExperienceIndex,
        isActive,

        setXLocation,
        setYear,
        onClickYear,
        onClickLeft,
        onClickRight,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperienceContext = () => useContext(ExperienceContext);

export default ExperienceProvider;

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
import ExperienceCard from '#/components/sections/experience/ExperienceCard';

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
  { id: 4, card: <ExperienceCard index={10} /> },
];

const ExperienceContext = createContext<Record<string, unknown>>({});

const ExperienceProvider = ({
  children,
}: {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
}): ReactElement => {
  const [xLocation, setXLocation] = useState<number>(0);
  const [year, setYear] = useState<number>(2019);
  const [nowExperienceList, setNowExperienceList] = useState(ExperiencesOf2019);
  const [nowExperienceIndex, setNowExperienceIndex] = useState(0);

  // year 바뀔 때 경험 리스트 변경
  useEffect(() => {
    switch (year) {
      case 2019:
        setNowExperienceList(ExperiencesOf2019);
        break;
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

  // 2019년도로 변경하는 함수
  const onClick2019 = useCallback(() => {
    setYear(2019);
  }, []);

  // 2020년도로 변경하는 함수
  const onClick2020 = useCallback(() => {
    setYear(2020);
  }, []);

  // 2021년도로 변경하는 함수
  const onClick2021 = useCallback(() => {
    setYear(2021);
  }, []);

  return (
    <ExperienceContext.Provider
      value={{
        xLocation,
        year,
        nowExperienceList,
        nowExperienceIndex,

        setXLocation,
        setYear,

        onClick2019,
        onClick2020,
        onClick2021,

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

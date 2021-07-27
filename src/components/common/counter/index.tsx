import React, { useState, useEffect } from 'react';
import useInterval from '#/hooks/useInterval';

import {
  EXP_ARTICLE_AREA,
  INTRO_ARTICLE_AREA,
  SKILL_ARTICLE_AREA,
  CONTACT_ARTICLE_AREA,
} from '#/constants';
import { useLayoutContext } from '#/contexts/LayoutContext';

interface CounterProps {
  number: number;
  delay: number;
  trigger:
    | typeof INTRO_ARTICLE_AREA
    | typeof SKILL_ARTICLE_AREA
    | typeof EXP_ARTICLE_AREA
    | typeof CONTACT_ARTICLE_AREA;
}

// number = 목표 숫자
// delay = 카운트 시작 딜레이
// trigger = 시작이 되는 section
// eslint-disable-next-line react/prop-types
function Counter({ number, delay, trigger }: CounterProps) {
  const { currentArea }: any = useLayoutContext(); // eslint-disable-line 
  const [count, setCount] = useState(0);
  const [countDelay, setCountDelay] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  // delay : number에 도달할 때 까지 1 ~ 101까지 오름
  const delayUp = 100 / number;

  useEffect(() => {
    if (trigger === currentArea) {
      setTimeout(() => {
        setIsPlaying(true);
      }, delay * 1000);
    } else {
      setTimeout(() => {
        setCount(0);
        setCountDelay(1);
        setIsPlaying(false);
      }, 150);
    }
  }, [currentArea, delay, trigger, number]);

  useInterval(
    () => {
      if (count === number) {
        setIsPlaying(false);
        return;
      }
      setCount(count + 1);
      setCountDelay(countDelay + delayUp);
    },
    isPlaying ? countDelay : null,
  );

  return <>{count}</>;
}

export default Counter;

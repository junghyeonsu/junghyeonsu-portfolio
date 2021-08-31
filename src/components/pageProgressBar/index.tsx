import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { BLACK_UNACTIVE_TEXT_COLOR, WHITE_UNACTIVE_TEXT_COLOR } from '#/colors';
import {
  COMMON_TRANSITION,
  PROGRESS_BAR_HEIGHT,
  PROGRESS_BAR_TOP,
} from '#/constants';
import ProgressItem from '#/components/pageProgressBar/progressItem';
import ActiveProgressBar from '#/components/pageProgressBar/ActiveProgressBar';
import SectionUpButton from '#/components/common/SectionUpButton';
import SectionDownButton from '#/components/common/SectionDownButton';

const UnActiveProgressBar = styled.div`
  position: fixed;
  width: 0.4vw;
  height: ${PROGRESS_BAR_HEIGHT}vh;
  right: 2vw;
  top: ${PROGRESS_BAR_TOP}vh;
  transition: ${COMMON_TRANSITION};
  z-index: 5;

  @media ${props => props.theme.mobile} {
    right: 6.5vw;
    width: 0.6vw;
  }
`;

const PageProgressBar = () => {
  const {
    isWhiteColor,
    moveIntroArticle,
    moveSkillArticle,
    moveExperienceArticle,
    moveContactArticle,
  }: any = useLayoutContext(); // eslint-disable-line

  const barColor = useMemo(
    () =>
      isWhiteColor ? WHITE_UNACTIVE_TEXT_COLOR : BLACK_UNACTIVE_TEXT_COLOR,
    [isWhiteColor],
  );
  const [isDevelopement] = useState(false);

  return (
    <>
      <SectionUpButton />
      <ActiveProgressBar />
      <UnActiveProgressBar style={{ background: barColor }}>
        {isDevelopement && (
          <>
            <ProgressItem
              onClick={moveIntroArticle}
              text="Introduction"
              order={0}
            />
            <ProgressItem onClick={moveSkillArticle} text="Skills" order={1} />
            <ProgressItem
              onClick={moveExperienceArticle}
              text="Experiences"
              order={2}
            />
            <ProgressItem
              onClick={moveContactArticle}
              text="Contact"
              order={3}
            />
          </>
        )}
      </UnActiveProgressBar>
      <SectionDownButton />
    </>
  );
};

export default PageProgressBar;

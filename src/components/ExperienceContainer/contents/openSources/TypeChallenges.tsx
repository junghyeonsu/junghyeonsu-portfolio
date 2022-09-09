import React from 'react';

import { MergedWithLink } from '../../common';
import * as Styled from '../../styled';

const TypeChallenges = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>번역</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="type-challenges-repository">
        <Styled.SkillIcon src="/icons/TypeChallenges.png" alt="Type Challenges Icon" />
        Type Challenges
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <MergedWithLink
          href="https://github.com/type-challenges/type-challenges/pull/10271"
          explain="hello-world challenge 번역"
          date="2022/05/17"
          merged
        />
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default TypeChallenges;

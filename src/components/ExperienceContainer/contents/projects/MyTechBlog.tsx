import React from 'react';

import { Explain, InlineLinkText, Links, Skills } from '../../common';
import * as Styled from '../../styled';
import EXPLAIN from './explains';

const LINKS = [
  {
    text: '정현수 기술 블로그',
    href: 'https://junghyeonsu-dev.vercel.app/',
  },
  {
    text: '블로그는 사드세요... 제발 프롤로그: 블로그를 만들자',
    href: 'https://junghyeonsu-dev.vercel.app/posts/please-buy-the-blog-prolog',
  },
];

const SKILLS = [
  {
    skill: 'React',
    explain: EXPLAIN.react,
  },
  {
    skill: 'Next.JS',
    explain: EXPLAIN.nextjs,
  },
  {
    skill: 'TypeScript',
    explain: EXPLAIN.typescript,
  },
  {
    skill: 'Emotion',
    explain:
      'CSS-in-JS를 사용한 이유는 블로그에는 빠른 유저 인터렉션을 요구하는 애니메이션이 많이 있지 않고, 같은 JS로 개발할 수 있다는 점 그리고 className을 신경쓰지 않아도 된다는 점과 같은 것들로 인해 사용하게 되었습니다.\n\nNext.JS에서 styled-components를 사용하면 추가적으로 SSR과 관련하여 처리를 해주어야 하는데, emotion은 추가적인 설정이 필요없어서 emotion을 선택했습니다.\n\n그리고 styled-components와 비교해 번들 사이즈가 비슷하고, 추가적으로 사용할 수 있는 기능(emotion/css)이 있다는 것이 styled-components 대신에 emotion을 사용한 이유입니다.',
    image: {
      src: '/emotionVSstyledComponents.png',
      alt: 'emotion vs styled-components bundle size',
    },
  },
  {
    skill: 'Chakra UI',
    explain: `NextJS + 다크모드를 구현할 때 편리한 기능들(system prefer color scheme, ColorModeScript등등)을 제공해줍니다. 커스터마이징이 가능한 컴포넌트를 제공해주고, 호불호가 크게 갈리지 않는 디자인이라서 적용했습니다.`,
  },
  {
    skill: 'ESLint',
    explain: EXPLAIN.eslint,
  },
  {
    skill: 'Prettier',
    explain: EXPLAIN.prettier,
  },
  {
    skill: 'Vercel',
    explain: EXPLAIN.vercel,
  },
];

const MyTechBlog = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>개인 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="정현수-기술-블로그-개발">정현수 기술 블로그 개발</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2022년 3월 - 계속 개발중</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>나만의 블로그를 가지기 위해서 개발</Explain>
        <Explain>다크모드 구현</Explain>
        <Explain>모바일 반응형 디자인 적용</Explain>
        <Explain>rss.xml, sitemap.xml, robots.txt 생성 후 크롤러가 잘 읽어갈 수 있도록 구현</Explain>
        <Explain>
          open graph
          <InlineLinkText href="https://github.com/junghyeonsu/junghyeonsu.dev/blob/main/src/components/CustomHead/index.tsx">
            (적용 코드)
          </InlineLinkText>
          를 적용하여 공유 시 북마크 생성되도록 구현
        </Explain>
        <Explain>SEO를 위한 시멘틱 태그 배치에 신경 씀</Explain>
        <Explain>Table of Contents 생성하여 목차를 한 눈에 볼 수 있도록 구현</Explain>
        <Explain>
          <InlineLinkText href="https://giscus.app/ko">Giscus</InlineLinkText>를 이용한 댓글 시스템 구현
        </Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
    </Styled.ExperienceCard>
  );
};

export default MyTechBlog;

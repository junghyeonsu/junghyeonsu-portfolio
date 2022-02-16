import { Content } from './types';
import { INTERN, PROJECT, REACT, TYPESCRIPT } from './constants';

const content: Content = {
  work: [
    {
      title: '하얀마인드 인턴',
      type: INTERN,
      period: '2021년 3월 - 2021년 6월,  2021년 9월 - 2021년 12월 (약 8개월)',
      explains: [
        '영어 쉐도잉 애플리케이션 제작 스타트업의 프론트엔드 개발자로 참여',
        'B2B 소개 페이지 제작 프로젝트 참여 [디자이너1, 개발자1]',
        'react-admin 프레임워크를 활용한 B2B 사이트 유지보수',
      ],
      link: [
        {
          text: 'B2B 프로그램 소개 페이지',
          href: 'https://redkiwiapp.com/ko/b2b',
        },
        {
          text: '인턴 회고록 블로그 포스트 (어려웠던 점, 느낀 점 등등 정리)',
          href: 'https://velog.io/@junghyeonsu/회고록-5월-및-인턴-회고',
        },
      ],
    },
    {
      title: '쎄트렉아이 인턴',
      type: INTERN,
      period: '2020년 7월 - 2020년 8월',
      explains: ['B2B 소개 페이지 제작 프로젝트 참여 [디자이너1, 개발자1]'],
    },
  ],
  project: [
    {
      title: '포트폴리오 개발',
      type: PROJECT,
      period: '2021년 7월 - 현재 유지보수 중',
      explains: ['B2B 소개 페이지 제작 프로젝트 참여 [디자이너1, 개발자1]'],
      skills: [REACT, TYPESCRIPT],
    },
  ],
  skill: [REACT, TYPESCRIPT],
};

export default content;

import { Content } from './types';
import { INTERN, PROJECT, REACT, TYPESCRIPT } from './constants';

const content: Content = {
	work: [
		{
			title: '하얀마인드 인턴',
			type: INTERN,
			period: '2021년 3월 - 2021년 6월,  2021년 9월 - 2021년 12월 (약 6개월)',
			explains: [
				{
					explain: 'B2B 소개 페이지 제작 프로젝트 참여 [디자이너1, 개발자1]',
					link: 'https://redkiwiapp.com/ko/b2b',
				},
			],
		},
		{
			title: '쎄트렉아이 인턴',
			type: INTERN,
			period: '2020년 7월 - 2020년 8월',
			explains: [
				{
					explain: 'B2B 소개 페이지 제작 프로젝트 참여 [디자이너1, 개발자1]',
					link: 'https://redkiwiapp.com/ko/b2b',
				},
			],
		},
	],
	project: [
		{
			title: '포트폴리오 개발',
			type: PROJECT,
			period: '2021년 7월 - 현재 유지보수 중',
			explains: [
				{
					explain: '나만의 포트폴리오 페이지 개발',
					link: '',
				},
				{
					explain: '나만의 포트폴리오 페이지 개발',
					link: '',
				},
			],
			skills: [REACT, TYPESCRIPT],
		},
	],
	skill: [REACT, TYPESCRIPT],
};

export default content;

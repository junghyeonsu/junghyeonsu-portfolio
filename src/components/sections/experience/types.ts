import { INTERN, PROJECT, REACT, TYPESCRIPT } from './constants';

export type ExperienceType = typeof INTERN | typeof PROJECT;
export type Skill = typeof REACT | typeof TYPESCRIPT;

export interface Explain {
	explain: string;
	link: string;
}

export interface Work {
	title: string;
	type: ExperienceType;
	period: string;
	explains: Explain[];
}

export interface Project {
	title: string;
	type: ExperienceType;
	period: string;
	explains: Explain[];
	skills: Skill[];
}

export interface Content {
	work: Work[];
	project: Project[];
	skill: Skill[];
}

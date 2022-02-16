import { INTERN, PROJECT, REACT, TYPESCRIPT } from './constants';

export type ExperienceType = typeof INTERN | typeof PROJECT;
export type Skill = typeof REACT | typeof TYPESCRIPT;

export interface Link {
  text: string;
  href: string;
}

export interface Work {
  title: string;
  type: ExperienceType;
  period: string;
  explains: string[];
  link?: Link[];
}

export interface Project {
  title: string;
  type: ExperienceType;
  period: string;
  explains: string[];
  skills: Skill[];
}

export interface Content {
  work: Work[];
  project: Project[];
  skill: Skill[];
}

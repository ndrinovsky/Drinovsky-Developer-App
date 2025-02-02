import type { IApplicationString } from './IApplicationString.js';

export interface IPortfolioProject {
  title: IApplicationString;
  description: IApplicationString;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  imageURLs: string[];
}

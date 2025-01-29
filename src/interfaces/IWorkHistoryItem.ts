import type { IApplicationString } from './IApplicationString';

export interface IWorkHistoryItem {
  title: IApplicationString;
  company: IApplicationString;
  location: IApplicationString;
  description: IApplicationString;
  date: string;
  type: 'job' | 'education' | 'project';
};
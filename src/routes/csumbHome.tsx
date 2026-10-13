import * as React from 'react';
import ApiService from '../services/ApiService';
import type { ICsumbILPClasses } from '../interfaces/ICsumbILPClasses';
import CsumbHome from '../components/CSUMB';

export async function clientLoader(): Promise<ICsumbILPClasses[]> { 
  const apiService = new ApiService();
  return [];
  // let projects: ICsumbILPClasses[] = [];
  // try {
  //   projects = await apiService.fetchProjects();
  //   return projects;
  // } catch (error) {
  //   console.error(error);
  //   return [];
  // }
}

export default function ILPRoute() {
  return <CsumbHome />;
}

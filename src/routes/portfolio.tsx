import * as React from 'react';
import Portfolio from '../components/portfolio';
import ApiService from '../services/ApiService';
import type { IPortfolioProject } from '../interfaces/IPortfolioProject';

export async function clientLoader(): Promise<IPortfolioProject[]> { 
  const apiService = new ApiService();
  let projects: IPortfolioProject[] = [];
  try {
    projects = await apiService.fetchProjects();
    return projects;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function PortfolioRoute() {
  return <Portfolio />;
}

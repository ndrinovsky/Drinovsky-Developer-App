import * as React from 'react';
import Snippets from '../components/snippets';
import type { IGist } from '../interfaces/IGist';
import ApiService from '../services/ApiService';

export async function clientLoader(): Promise<IGist[]> { 
  const apiService = new ApiService();
  let gistList: IGist[] = [];
  try {
    gistList = await apiService.fetchGists();
    return gistList;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function SnippetsRoute() {
  return <Snippets />;
}

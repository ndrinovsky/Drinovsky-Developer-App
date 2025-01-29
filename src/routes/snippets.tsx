import * as React from 'react';
// import type { Route } from './+types/home';
import Snippets from '../components/snippets';
import type { IGist } from '../interfaces/IGist';
import { Octokit } from 'octokit';

async function fetchGist(gist: IGist): Promise<IGist> {
  if (import.meta.env.MODE === 'development' && import.meta.env.VITE_GITHUB_PAT){
    const pat = import.meta.env.VITE_GITHUB_PAT;
    const octokit = new Octokit({
      auth: pat
    });
    return octokit.request(`GET /gists/${gist.id}`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }).then(res => {
      return res.data as IGist;
    });
  } else {
    return fetch(`https://api.github.com/gists/${gist.id}`).then(results => {
      return results.json();
    }).then((data: IGist) => {
      return data;
    });
  }
}

export async function clientLoader(): Promise<IGist[]> { 
  let gistList: IGist[] = [];
  try {
    if (import.meta.env.MODE === 'development' && import.meta.env.VITE_GITHUB_PAT){
      const pat = import.meta.env.VITE_GITHUB_PAT;
      const octokit = new Octokit({
        auth: pat
      });
      gistList = await octokit.request('GET /gists/', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }).then(res => {
        return res.data as IGist[];
      });
    } else {
      gistList = await fetch('https://api.github.com/users/ndrinovsky/gists').then(results => {
        return results.json();
      }).then((data: IGist[]) => {
        return data;
      });
    }
  
    const promises: Promise<IGist>[] = [];
    gistList.forEach(gist => {
      promises.push(fetchGist(gist));
    });
  
    const gists = await Promise.all(promises)
      .then(results => {
        return results;
      });
    
    return gists;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function SnippetsRoute() {
  return <Snippets />;
}

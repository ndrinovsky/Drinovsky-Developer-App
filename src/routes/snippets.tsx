import * as React from 'react';
import Snippets from '../components/snippets';
import type { IGist } from '../interfaces/IGist';
import { Octokit } from 'octokit';
import { throttling } from '@octokit/plugin-throttling';

async function fetchGist(gist: IGist): Promise<IGist> {
  const auth = import.meta.env.VITE_GITHUB_PAT ?? undefined;
  const MyOctokit = Octokit.plugin(throttling);
  const octokit = new MyOctokit({
    auth,
    throttle: {
      onRateLimit: () => {
        // does not retry
      },
      onSecondaryRateLimit: () => {
        // does not retry
      },
    },
  });
  return octokit.request(`GET /gists/${gist.id}`, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
      'accept': 'application/vnd.github.v3+json'
    }
  }).then(res => {
    return res.data as IGist;
  });
}

export async function clientLoader(): Promise<IGist[]> { 
  let gistList: IGist[] = [];
  try {
    const auth = import.meta.env.VITE_GITHUB_PAT ?? undefined;
    const MyOctokit = Octokit.plugin(throttling);
    const octokit = new MyOctokit({
      auth,
      throttle: {
        onRateLimit: () => {
          // does not retry
        },
        onSecondaryRateLimit: () => {
          // does not retry
        },
      },
    });
    gistList = await octokit.request('GET /users/ndrinovsky/gists', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'accept': 'application/vnd.github.v3+json'
      }
    }).then(res => {
      return res.data as IGist[];
    });
  
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

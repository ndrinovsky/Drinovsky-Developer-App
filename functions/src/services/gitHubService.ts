import { type IGist } from '../../../functions/src/interfaces/IGist.js';
import { Octokit } from 'octokit';
import { throttling } from '@octokit/plugin-throttling';

export default class GitHubService {
  
  private readonly octokit: Octokit;
  constructor () {
    const MyOctokit = Octokit.plugin(throttling);
    this.octokit = new MyOctokit({
      auth: process.env.GITHUB_PAT,
      throttle: {
        onRateLimit: () => {
          // does not retry
        },
        onSecondaryRateLimit: () => {
          // does not retry
        }
      }
    });
    this.onInit();
  }

  // OnInit Function
  private onInit (): void {
  }
  
  public async fetchGist(gist: IGist): Promise<IGist> {
    try {
      return await this.octokit.request(`GET /gists/${gist.id}`, {
        headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'accept': 'application/vnd.github.v3+json'
        }
      }).then((res: { data: IGist; }) => {
        return res.data as IGist;
      });
    } catch (error) {
      throw new Error('Error fetching gists: ' + error);
    }
  }
  
  public async fetchGistList(): Promise<IGist[]> {
    try {
      return await this.octokit.request('GET /users/ndrinovsky/gists', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'accept': 'application/vnd.github.v3+json'
      }
      }).then((res: { data: IGist[]; }) => {
        return res.data as IGist[];
      });
    } catch (error) {
      throw new Error('Error fetching gists: ' + error);
    }
  }
  
}
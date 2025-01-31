import { type Request, type Response } from 'express';
import { type IGist } from '../interfaces/IGist.js';
import GitHubService from '../services/gitHubService.js';

export async function get_gists(req: Request, res: Response) {
  try {
    // GET /gists
    const githubService = new GitHubService();
    const gistList = await githubService.fetchGistList();
    const promises: Promise<IGist>[] = [];
    gistList.forEach(gist => {
      promises.push(githubService.fetchGist(gist));
    });
    const gists = await Promise.all(promises)
      .then(results => {
        return results;
      });
    res.json(gists);
  } catch (error) {
    res.status(400).json({message: 'Bad Request ' + error});
  }
  return;
}
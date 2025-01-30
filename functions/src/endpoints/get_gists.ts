import { Request, Response } from 'express';
import GitHubService from '../services/gitHubService';
import { IGist } from '../interfaces/IGist';

export async function get_gists(req: Request, res: Response) {
  try {
    // GET /gists
    const githubService = new GitHubService();
    const gistList = await githubService.fetchGistList();
    const promises: Promise<IGist>[] = [];
    gistList.forEach(gist => {
      promises.push(githubService.fetchGist(gist));
    });
    const gists = Promise.all(promises)
      .then(results => {
        return results;
      });
    res.json(gists);
  } catch (error) {
    res.status(400).json({message: 'Bad Request ' + error});
  }
  return;
}
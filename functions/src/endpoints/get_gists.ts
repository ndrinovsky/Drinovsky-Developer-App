import { HttpsError, onCall } from "firebase-functions/v2/https";
import { type IGist } from '../interfaces/IGist.js';
import GitHubService from '../services/gitHubService.js';
import { Firestore } from "firebase/firestore";

export const getGistsEndpoint = (db: Firestore) => onCall(
  {
    cors: 'drinovsky.dev',
    enforceAppCheck: true
  },
  async (request, response) => {
      // GET /gists
      try {
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
        return gists;
      } catch (error) {
        throw new HttpsError('internal', 'Bad Request ' + error);
      }
  }
);
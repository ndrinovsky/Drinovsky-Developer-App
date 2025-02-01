import type { IGist } from '../interfaces/IGist';
import { getFunctions, httpsCallable } from 'firebase/functions';

export default class ApiService {
  private readonly functions;
  public constructor(){
    this.functions = getFunctions();
  }

  public async fetchGists(): Promise<IGist[]> {
    const getGists = httpsCallable<null, IGist[]>(this.functions, 'getGists');
    return new Promise((resolve, reject) => {
      getGists().then((result) => {
        const data = result.data;
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}
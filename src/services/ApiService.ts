import type { IGist } from '../interfaces/IGist';

export default class ApiService {
  public constructor(){
  }

  public async fetchGists(): Promise<IGist[]> {
    return new Promise((resolve, reject) => {
      fetch('/api/gists')
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
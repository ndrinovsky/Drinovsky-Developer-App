import type { IGist } from '../interfaces/IGist';

export default class ApiService {
  public constructor(){
  }

  public async fetchGists(): Promise<IGist[]> {
    return new Promise((resolve, reject) => {
      fetch('/api/gists', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      }).then(response => 
        {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        }
        ).then(data => {
          resolve(data);
        }).catch(error => {
          reject(error);
        });
    });
  }
}
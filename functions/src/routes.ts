import { Router } from 'express';
import { type Request, type Response } from 'express';
import { get_gists } from './endpoints/get_gists.js';
import { validateFirebaseIdToken } from './helpers/auth.js';
import { Firestore } from 'firebase/firestore';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const routes = (app: Router, db: Firestore) =>{
  app.get('/gists', validateFirebaseIdToken, (req: Request, res: Response) =>{
    get_gists(req, res);
    return;
 });
};

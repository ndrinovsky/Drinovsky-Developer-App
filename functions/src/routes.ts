
import { Request, Response, Router} from 'express';
import { get_gists } from './endpoints/get_gists';
import { validateFirebaseIdToken } from './helpers/auth';

export const routes = (app: Router, db: FirebaseFirestore.Firestore) =>{
  // EXERCISE APIs
  // GET /gists/[exercise id]
  app.get('/gists/:field/:value', validateFirebaseIdToken, (req: Request, res: Response) =>{
    get_gists(req, res, db);
    return;
 });
};
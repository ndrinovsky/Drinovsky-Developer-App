import { type Request, type Response, type NextFunction} from 'express';
import {logger} from 'firebase-functions';

export const validateFirebaseIdToken = async (req : Request, res : Response, next : NextFunction) =>{
  logger.log('Check if request is authorized with Firebase ID token');

  next();
  return;
};

import express from 'express';
import { type Request, type Response, type NextFunction} from 'express';
import bodyParser from 'body-parser';
import bearerToken from 'express-bearer-token';
import { routes } from './routes.js';
import { Firestore } from 'firebase/firestore';

export const rest = (db: Firestore) => {
    const app = express();
    const API_PREFIX = 'api';
    // Strip API from the request URI
    app.use((req: Request, res: Response, next: NextFunction) => {
        if (req.url.indexOf(`/${API_PREFIX}/`) === 0) {
            req.url = req.url.substring(API_PREFIX.length + 1);
        }
        next();
    });
    // Parse bearer token
    app.use(bearerToken());
    // Parse Query String
    app.use(bodyParser.urlencoded({extended: false}));
    // Parse posted JSON body
    app.use(bodyParser.json());
    // Handle API endpoint routes
    routes(app, db);
    // Done!
    return app;
};

import {Request, Response, NextFunction} from "express";
import {routes} from "./routes";

export const rest = (db: FirebaseFirestore.Firestore): any => {
    const express = require("express");
    const bodyParser = require("body-parser");
    const bearerToken = require("express-bearer-token");
    const app: any = express();
    const API_PREFIX = "api";
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
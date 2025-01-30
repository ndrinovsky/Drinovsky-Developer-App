import { rest } from './rest';
import { db } from './firebase';
import { onRequest } from 'firebase-functions/v2/https';
import { GlobalOptions, setGlobalOptions } from 'firebase-functions/v2';
// Initialize Rest API
const express = rest(db);
const settings: GlobalOptions = {
    timeoutSeconds: 60,
    memory: '512MiB',
};
setGlobalOptions(settings);

export const api = onRequest(
    { cors: true },
    express
);

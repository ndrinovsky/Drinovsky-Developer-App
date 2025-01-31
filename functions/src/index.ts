import { onRequest } from 'firebase-functions/v2/https';
import { GlobalOptions, setGlobalOptions } from 'firebase-functions';
import { rest } from './rest.js';
import { db } from './firestore.js';

const app = rest(db);

const settings: GlobalOptions = {
    timeoutSeconds: 60,
    memory: '512MiB',
};

setGlobalOptions(settings);
export const api = onRequest( { cors: true }, app );

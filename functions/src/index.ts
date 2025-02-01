import { GlobalOptions, setGlobalOptions } from 'firebase-functions';
import { db } from './firestore.js';
import { getGistsEndpoint } from './endpoints/get_gists.js';

const settings: GlobalOptions = {
    timeoutSeconds: 60,
    memory: '512MiB',
};

setGlobalOptions(settings);
export const getGists = getGistsEndpoint(db);
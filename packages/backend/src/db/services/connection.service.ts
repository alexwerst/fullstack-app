import { createConnection } from 'typeorm';

import { mainConfig } from '../../config';

export const createDBConnection = async () => createConnection(mainConfig.database);

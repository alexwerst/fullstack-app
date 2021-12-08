import { createConnection } from 'typeorm';

import { mainConfig } from '../../config';

export const connect = async () => createConnection(mainConfig.database);

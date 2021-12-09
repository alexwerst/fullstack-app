import { Request, Response } from 'express';

import { userDataService } from '../data/services';

export const initUser = async (_req: Request, res: Response) => {
  const user = await userDataService.initUser();

  res.send({ message: 'User created', user });
};

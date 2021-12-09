import { userDBService } from '../../db/services';

export const initUser = async () => {
  const user = await userDBService.getUserByEmail('test@test.com');

  return (
    user ||
    (await userDBService.createUser({
      firstName: 'Admin',
      lastName: 'Adminuser',
      email: 'test@test.com',
    }))
  );
};

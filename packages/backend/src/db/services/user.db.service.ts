import { User } from '../models';
import { getEntityRepository } from '../utils';

export const getUserByEmail = async (email: string) => {
  const userRepository = getEntityRepository(User);

  return userRepository.findOne({ email });
};

export const createUser = async (user: Record<string, string>) => {
  const userRepository = getEntityRepository(User);
  const newUser = new User();

  newUser.firstName = user.firstName;
  newUser.lastName = user.lastName;
  newUser.email = user.email;

  return userRepository.save(newUser);
};

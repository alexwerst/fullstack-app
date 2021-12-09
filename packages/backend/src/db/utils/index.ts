import { EntityTarget, getConnection } from 'typeorm';

export const getEntityRepository = <Entity>(target: EntityTarget<Entity>) =>
  getConnection().getRepository(target);

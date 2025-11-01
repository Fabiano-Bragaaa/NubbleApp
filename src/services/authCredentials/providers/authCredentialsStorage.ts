import {AuthCredentials} from '../../../domain/Auth/authTypes';
import {storage} from '../../storage';

const STORAGE_KEY = '@Auth';

async function set(ac: AuthCredentials): Promise<void> {
  await storage.setItem(STORAGE_KEY, ac);
}

async function get(): Promise<AuthCredentials | null> {
  const ac = await storage.getItem<AuthCredentials>(STORAGE_KEY);

  return ac;
}

async function remove(): Promise<void> {
  await storage.removeItem(STORAGE_KEY);
}

export const authCredentialsStorage = {
  set,
  get,
  remove,
};

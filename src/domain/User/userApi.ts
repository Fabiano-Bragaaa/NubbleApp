import {api} from '@api';

import {UserApi} from './userTypes';

const PATH = 'users';

async function getById(userId: string): Promise<UserApi> {
  const {data} = await api.get<UserApi>(`${PATH}/${userId}`);

  return data;
}

export const userApi = {
  getById,
};

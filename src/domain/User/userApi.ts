import {api} from '../../api/apiConfig';
import {PageAPI} from '../../api/apiTypes';

import {UserApi} from './userTypes';

export const USER_PATH = 'users';

async function getById(userId: string): Promise<UserApi> {
  const {data} = await api.get<UserApi>(`${USER_PATH}/${userId}`);

  return data;
}

async function getList(search: string): Promise<PageAPI<UserApi>> {
  const response = await api.get<PageAPI<UserApi>>(`${USER_PATH}`, {
    params: {
      search,
    },
  });

  return response.data;
}

export const userApi = {
  getById,
  getList,
};

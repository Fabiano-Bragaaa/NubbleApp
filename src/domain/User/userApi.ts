import {api, PageAPI} from '@api';

import {UserApi} from './userTypes';

const PATH = 'users';

async function getById(userId: string): Promise<UserApi> {
  const {data} = await api.get<UserApi>(`${PATH}/${userId}`);

  return data;
}

async function getList(search: string): Promise<PageAPI<UserApi>> {
  const response = await api.get<PageAPI<UserApi>>(`${PATH}`, {
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

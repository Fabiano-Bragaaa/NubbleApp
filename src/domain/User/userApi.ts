import {api} from '../../api/apiConfig';
import {PageAPI} from '../../api/apiTypes';

import {UpdateUserParams, UserApi} from './userTypes';

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

async function isFollowing(userId: string): Promise<{isFollowing: boolean}> {
  const response = await api.get<{isFollowing: boolean}>(
    `user/follow/is-following/${userId}`,
  );

  return response.data;
}

async function updateUser(params: UpdateUserParams): Promise<UserApi> {
  const response = await api.put<UserApi>(`${USER_PATH}`, params);
  return response.data;
}

export const userApi = {
  getById,
  getList,
  isFollowing,
  updateUser,
};

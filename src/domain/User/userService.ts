import {Page} from '@types';

import {apiAdapter} from '../../api/apiAdapter';

import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User, UserDetails} from './userTypes';

async function getById(id: number): Promise<UserDetails> {
  const userAPI = await userApi.getById(id.toString());
  const {isFollowing} = await userApi.isFollowing(id.toString());

  return userAdapter.toUserDetais(userAPI, isFollowing);
}

async function searchUser(search: string): Promise<Page<User>> {
  const userAPIPage = await userApi.getList(search);

  return apiAdapter.toPageModal(userAPIPage, userAdapter.toUser);
}

export const userService = {
  getById,
  searchUser,
};

import {Page} from '@types';

import {apiAdapter} from '../../api/apiAdapter';

import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {UpdateUserParams, User, UserDetails} from './userTypes';

async function getById(id: number): Promise<UserDetails> {
  const userAPI = await userApi.getById(id.toString());
  const {isFollowing} = await userApi.isFollowing(id.toString());

  return userAdapter.toUserDetais(userAPI, isFollowing);
}

async function searchUser(search: string): Promise<Page<User>> {
  const userAPIPage = await userApi.getList(search);

  return apiAdapter.toPageModal(userAPIPage, userAdapter.toUser);
}

async function updateUser(
  current: User,
  params: UpdateUserParams,
): Promise<User> {
  const updatedUser = getUpdatedUser(current, params);
  const userAPI = await userApi.updateUser(updatedUser);

  return userAdapter.toUser(userAPI);
}

function getUpdatedUser(current: User, params: UpdateUserParams) {
  const user: UpdateUserParams = {};

  if (!!params.firstName && current.firstName !== params.firstName) {
    user.firstName = params.firstName;
  }

  if (!!params.lastName && current.lastName !== params.lastName) {
    user.lastName = params.lastName;
  }

  if (!!params.username && current.username !== params.username) {
    user.username = params.username;
  }

  return user;
}

export const userService = {
  getById,
  searchUser,
  updateUser,
};

/**
 * @description Adapta o UserAPI para o modelo de user
 */

import {User, UserApi, UserDetails} from './userTypes';

function toUser(userAPI: UserApi): User {
  return {
    id: userAPI.id,
    email: userAPI.email,
    fullName: userAPI.full_name,
    firstName: userAPI.first_name,
    lastName: userAPI.last_name,
    username: userAPI.username,
    isOnline: userAPI.is_online,
    profileUrl: userAPI.profile_url,
    meta: {
      followersCount: userAPI.meta.followers_count,
      followingCount: userAPI.meta.following_count,
    },
  };
}

function toUserDetais(userApi: UserApi, isFollowing: boolean): UserDetails {
  return {
    ...toUser(userApi),
    isFollowing,
  };
}

export const userAdapter = {
  toUser,
  toUserDetais,
};

/**
 * @description Adapta o UserAPI para o modelo de user
 */

import {User, UserApi} from './userTypes';

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

export const userAdapter = {
  toUser,
};

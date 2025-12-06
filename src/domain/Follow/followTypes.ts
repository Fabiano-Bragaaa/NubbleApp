import {User, UserApi} from '../User';

export interface FollowingUserAPI {
  id: number;
  followed_user_id: number;
  followed: UserApi;
}

export interface FollowerUserAPI {
  id: number;
  follower_user_id: number;
  follower: UserApi;
}

export interface FollowUser extends User {
  followId: number;
}

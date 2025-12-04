export interface User {
  id: number; //1;
  email: string; //'mariajulia@coffstack.com';
  firstName: string; // 'Maria';
  lastName: string; //'Julia';
  fullName: string; //'Maria Julia';
  username: string; //'mariajulia';
  isOnline: boolean; //false;
  profileUrl: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
  meta: {
    followersCount: string;
    followingCount: string;
  };
}

export interface UserDetails extends User {
  isFollowing: boolean;
}

export interface UserApi {
  id: number; //1;
  first_name: string; // 'Maria';
  last_name: string; //'Julia';
  username: string; //'mariajulia';
  email: string; //'mariajulia@coffstack.com';
  profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
  is_online: boolean; //false;
  full_name: string; //'Maria Julia';
  meta: {
    followers_count: string;
    following_count: string;
  };
}

export type UpdateUserParams = Partial<
  Pick<User, 'firstName' | 'lastName' | 'username'>
>;

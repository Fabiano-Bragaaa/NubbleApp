import {UserApi} from '../User';

export interface PostComment {
  id: number;
  text: string;
  createdAt: string;
  createAtRelative: string; // '1 h, 2 sem'
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; //111;
  message: string; //'Solvo audeo thesis libero despecto calculus valeo.';
  user_id: number; // 9;
  post_id: number; // 1;
  created_at: string; //'2025-03-31T14:39:50.000-03:00';
  updated_at: string; //'2025-04-03T12:40:56.968-03:00';
  user: UserApi;
  meta: any; //{};
}

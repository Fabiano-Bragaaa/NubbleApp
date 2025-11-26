import {PostAPI} from '../Post/postTypes';
import {User, UserApi} from '../User';

export type PostReactionType = 'like' | 'favorite';

export interface PostReactionBase {
  id: number;
  userId: number;
  postId: number;
  emojiType: PostReactionType;
  isChecked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PostReaction extends PostReactionBaseAPI {
  author: User;
  post: Pick<PostAPI, 'id' | 'text' | 'image_url'>;
}

export interface PostReactionBaseAPI {
  id: number;
  user_id: number;
  post_id: number;
  emoji_type: PostReactionType;
  is_checked: boolean;
  created_at: string;
  updated_at: string;
}

export interface PostReactionAPI extends PostReactionBaseAPI {
  user: UserApi;
  post: Pick<PostAPI, 'id' | 'text' | 'image_url' | 'status'>;
}

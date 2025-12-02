import {PostReaction, PostReactionAPI} from '../PostReaction';
import {UserApi} from '../User';

export interface Post {
  id: number;
  text: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
  reactions: Pick<PostReaction, 'postId' | 'emojiType'>[];
}

export interface PostAPI {
  id: number; // 1;
  text: string; //'Bom dia!';
  user_id: number; // 1 1;
  image_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg';
  is_fixed: boolean; // false;
  is_activated: boolean; // false;
  created_at: string; //'2025-04-01T14:10:33.217-03:00';
  updated_at: string; // '2025-04-01T14:10:33.225-03:00';
  user: UserApi;
  status: string; //'published';
  meta: {
    like_count: string; // '9';
    favorite_count: string; // '2';
    comments_count: string; //'1';
  };
  reactions: Pick<PostReactionAPI, 'post_id' | 'emoji_type'>[];
}

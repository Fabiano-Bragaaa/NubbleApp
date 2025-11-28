import {Post, PostReactionBase} from '@domain';

export const postWithoutLike: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 3,
  favoriteCount: 2,
  reactionCount: 3,
  text: 'this is the text (post description)',
  author: {
    id: 2,
    name: 'Fabiano',
    profileURL: 'https://example.com',
    userName: 'fabiano',
  },
  reactions: [],
};

export const postWithoutLikeResponse: PostReactionBase = {
  id: 1,
  userId: 1,
  postId: postWithoutLike.id,
  emojiType: 'like',
  isChecked: false,
  createdAt: '2021-01-01',
  updatedAt: '2021-01-01',
};

export const postWithLikeResponse: PostReactionBase = {
  ...postWithoutLikeResponse,
  isChecked: false,
};

export const postWithLike: Post = {
  ...postWithoutLike,
  reactions: [
    {
      postId: postWithoutLike.id,
      emojiType: 'like',
    },
  ],
};

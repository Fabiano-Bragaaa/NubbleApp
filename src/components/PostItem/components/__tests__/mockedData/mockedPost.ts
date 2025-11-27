import {Post} from '@domain';

export const mockedPost: Post = {
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
  reactions: [
    {
      postId: 1,
      emojiType: 'like',
    },
    {
      postId: 1,
      emojiType: 'favorite',
    },
  ],
};

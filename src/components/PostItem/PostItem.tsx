import {Post} from '@domain';

import {Box, ProfileUser} from '@components';

import {PostAction} from './components/PostAction';
import {PostBottom} from './components/PostBottom';
import {PostImage} from './components/PostImage';

type Props = {
  post: Post;
};

export function PostItem({post}: Props) {
  return (
    <Box paddingHorizontal="s24" mb="s24">
      <ProfileUser
        user={{
          id: post.author.id,
          profileUrl: post.author.profileURL,
          username: post.author.userName,
        }}
      />
      <PostImage imageURL={post.imageURL} />
      <PostAction
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
        id={post.id}
      />
    </Box>
  );
}

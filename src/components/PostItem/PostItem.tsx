import {Post} from '@domain';

import {Box} from '../Box/Box';
import {ProfileUser} from '../ProfileUser/ProfileUser';

import {PostAction} from './components/PostAction';
import {PostBottom} from './components/PostBottom';
import {PostImage} from './components/PostImage';

type Props = {
  post: Post;
  hideCommentAction?: boolean;
};

export function PostItem({post, hideCommentAction}: Props) {
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
      <PostAction hideCommentAction={hideCommentAction} post={post} />
      <PostBottom
        hideCommentAction={hideCommentAction}
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
        id={post.id}
      />
    </Box>
  );
}

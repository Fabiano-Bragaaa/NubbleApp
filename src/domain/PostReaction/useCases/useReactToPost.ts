import {Post} from '../../Post/postTypes';
import {postReactionService} from '../postReactionService';
import {PostReactionType} from '../postReactionType';

type Params = {
  post: Post;
  postReaction: PostReactionType;
};

export function useReactToPost({post, postReaction}: Params) {
  const hasReacted = postReactionService.hasReactedToPost(
    post.reactions,
    postReaction,
  );

  return {
    hasReacted,
  };
}

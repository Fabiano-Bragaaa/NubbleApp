import {useState} from 'react';

import {MutationOptions} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {Post} from '../../Post/postTypes';
import {postReactionService} from '../postReactionService';
import {PostReactionBase, PostReactionType} from '../postReactionType';

type Params = {
  post: Post;
  postReaction: PostReactionType;
  options?: MutationOptions<PostReactionBase>;
};

export function useReactToPost({post, postReaction, options}: Params) {
  const initialHasReacted = postReactionService.hasReactedToPost(
    post.reactions,
    postReaction,
  );

  const initialReactionCount =
    postReaction === 'like' ? post.reactionCount : post.favoriteCount;

  const [reactionState, setReactionState] = useState({
    hasReacted: initialHasReacted,
    reactionCount: initialReactionCount,
  });

  const queryClient = useQueryClient();

  const {mutate, isLoading, isError} = useMutation<
    PostReactionBase,
    Error,
    void
  >({
    mutationFn: () => postReactionService.reactToPost(post.id, postReaction),
    onSuccess: () => {
      //TODO: atualizar o post com o novo reaction
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'Ocorreu um erro');
      }
    },
  });

  function reactToPost() {
    setReactionState(prev => ({
      hasReacted: !prev.hasReacted,
      reactionCount: prev.reactionCount + (prev.hasReacted ? -1 : 1),
    }));
    mutate();
  }

  return {
    hasReacted: reactionState.hasReacted,
    reactionCount: reactionState.reactionCount,
    reactToPost,
  };
}

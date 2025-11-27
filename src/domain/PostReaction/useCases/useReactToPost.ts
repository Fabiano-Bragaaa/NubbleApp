import {useState} from 'react';

import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {Post} from '../../Post/postTypes';
import {postReactionService} from '../postReactionService';
import {PostReactionBase, PostReactionType} from '../postReactionType';

type Params = {
  post: Post;
  postReaction: PostReactionType;
  options?: MutationOptions<PostReactionBase>;
  queryKeys?: QueryKeys[];
};

export function useReactToPost({
  post,
  postReaction,
  options,
  queryKeys,
}: Params) {
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

  const {mutate} = useMutation<PostReactionBase, Error, void>({
    mutationFn: () => postReactionService.reactToPost(post.id, postReaction),
    onSuccess: () => {
      if (queryKeys) {
        queryKeys.forEach(queryKey => {
          queryClient.invalidateQueries([queryKey]);
        });
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'Ocorreu um erro');
      }
      toggleReaction();
    },
  });

  function toggleReaction() {
    setReactionState(prev => ({
      hasReacted: !prev.hasReacted,
      reactionCount: prev.reactionCount + (prev.hasReacted ? -1 : 1),
    }));
  }

  function reactToPost() {
    toggleReaction();
    mutate();
  }

  return {
    hasReacted: reactionState.hasReacted,
    reactionCount: reactionState.reactionCount,
    reactToPost,
  };
}

import {apiAdapter} from '@api';
import {Page} from '@types';

import {postReactionAdapter} from './postReactionAdapter';
import {postReactionApi} from './postReactionApi';
import {
  PostReaction,
  PostReactionBase,
  PostReactionType,
} from './PostReactionType';

const PER_PAGE = 10;

async function getMyReactions(
  reactionType: PostReactionType,
  page: number,
): Promise<Page<PostReaction>> {
  const postReactionPageApi = await postReactionApi.getMyReactions({
    page,
    per_page: PER_PAGE,
    reaction_type: reactionType,
  });

  return apiAdapter.toPageModal(
    postReactionPageApi,
    postReactionAdapter.toPostReaction,
  );
}

function hasReactedToPost(
  postReaction: Pick<PostReaction, 'emojiType'>[],
  postReactionType: PostReactionType,
): boolean {
  return postReaction.some(reaction => reaction.emojiType === postReactionType);
}

async function reactToPost(
  postId: number,
  reactionType: PostReactionType,
): Promise<PostReactionBase> {
  const postReactionBaseApi = await postReactionApi.createOrUpdateReaction(
    postId,
    reactionType,
  );
  return postReactionAdapter.toPostReactionBase(postReactionBaseApi);
}

export const postReactionService = {
  getMyReactions,
  hasReactedToPost,
  reactToPost,
};

import {api, PageAPI, PageParams} from '@api';

import {
  PostReactionAPI,
  PostReactionBaseAPI,
  PostReactionType,
} from './PostReactionType';

export const POST_REACTION_PATH = 'user/reactions';

type MyReactionParams = PageParams & {
  post_id?: number;
  reaction_type?: PostReactionType;
};

async function getMyReactions(
  params?: MyReactionParams,
): Promise<PageAPI<PostReactionAPI>> {
  const {data} = await api.get<PageAPI<PostReactionAPI>>(
    `${POST_REACTION_PATH}/my-reactions`,
    {
      params,
    },
  );
  return data;
}

async function createOrUpdateReaction(
  post_id: number,
  reaction_type: PostReactionType,
): Promise<PostReactionBaseAPI> {
  const path = `${POST_REACTION_PATH}/${post_id}/${reaction_type}`;
  const response = await api.post<PostReactionBaseAPI>(path);
  return response.data;
}

export const postReactionApi = {
  getMyReactions,
  createOrUpdateReaction,
};

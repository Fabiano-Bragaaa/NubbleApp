import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentApi} from './postCommentAPI';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 10;

async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageApi = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  return apiAdapter.toPageModal(
    postCommentPageApi,
    postCommentAdapter.toPostComment,
  );
}

async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(postId, message);

  return postCommentAdapter.toPostComment(postCommentAPI);
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentApi.remove(postCommentId);

  return response.message;
}

/**
 * @description user can delete the comment if it is the post author or comment author
 *
 * @param userId the current session user id
 * @param postComment comment to be delete
 * @param postAuthorId the id of the post author */

function isAllowToDelete(
  postComment: PostComment,
  userId: number | null,
  postAuthorId: number,
): boolean {
  if (postComment.author.id === userId) {
    return true;
  }

  if (postAuthorId === userId) {
    return true;
  }

  return false;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};

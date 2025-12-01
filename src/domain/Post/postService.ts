import {Page} from '@types';

import {apiAdapter} from '../../api/apiAdapter';
import {ImageForUpload} from '../../services/multimedia/multimediaType';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number, userId?: number): Promise<Page<Post>> {
  const postPageApi = await postApi.getList({
    page,
    per_page: 10,
    user_id: userId,
  });

  return apiAdapter.toPageModal(postPageApi, postAdapter.toPost);
}

async function createPost(
  text: string,
  imageCover: ImageForUpload,
): Promise<Post> {
  const postApiData = await postApi.createPost(text, imageCover);
  return postAdapter.toPost(postApiData);
}

async function getById(id: number): Promise<Post> {
  const postApiData = await postApi.getById(id.toString());
  return postAdapter.toPost(postApiData);
}

export const postService = {
  getList,
  createPost,
  getById,
};

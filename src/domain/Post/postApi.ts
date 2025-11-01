import {api, PageAPI, PageParams} from '@api';
import {ImageForUpload} from '@services';

import {PostAPI} from './postTypes';

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  const {data} = await api.get<PageAPI<PostAPI>>('user/post', {
    params,
  });
  return data;
}

async function createPost(
  text: string,
  imageCover: ImageForUpload,
): Promise<PostAPI> {
  const formData = new FormData();
  formData.append('text', text);
  formData.append('imageCover', imageCover);
  const {data} = await api.postForm<PostAPI>('user/post', formData);
  return data;
}

export const postApi = {
  getList,
  createPost,
};

import {api} from '../../api/apiConfig';
import {PageAPI, PageParams} from '../../api/apiTypes';
import {ImageForUpload} from '../../services/multimedia/multimediaType';

import {PostAPI} from './postTypes';

async function getList(
  params: PageParams & {user_id?: number},
): Promise<PageAPI<PostAPI>> {
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

async function getById(id: string): Promise<PostAPI> {
  const {data} = await api.get<PostAPI>(`user/post/${id}`);
  return data;
}

export const postApi = {
  getList,
  createPost,
  getById,
};

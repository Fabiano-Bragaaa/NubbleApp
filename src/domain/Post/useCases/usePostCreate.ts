import {MutationOptions, QueryKeys} from '@infra';
import {ImageForUpload, multimediaService} from '@services';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postService} from '../postService';
import {Post} from '../postTypes';

interface PostData {
  text: string;
  imageCover: ImageForUpload;
}

export function usePostCreate(options?: MutationOptions<Post>) {
  const queryClient = useQueryClient();
  const {mutate, isLoading, isError} = useMutation<Post, Error, PostData>({
    mutationFn: ({text, imageCover}) =>
      postService.createPost(text, imageCover),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostList],
      });
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  function createPost({
    description,
    imageUri,
  }: {
    description: string;
    imageUri: string;
  }) {
    const imageCover = multimediaService.prepareImageForUpload(imageUri);
    mutate({text: description, imageCover});
  }

  return {
    createPost,
    isLoading,
    isError,
  };
}

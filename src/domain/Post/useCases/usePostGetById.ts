import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {postService} from '../postService';

export function usePostGetById(id: number, enabled: boolean) {
  const {data, isLoading, isError, refetch, isRefetching} = useQuery({
    queryKey: [QueryKeys.PostGetById, id],
    queryFn: () => postService.getById(id),
    staleTime: 1000 * 30, // 30 seconds,
    cacheTime: 5000, //control time in cache
    enabled,
  });

  return {
    post: data,
    isError,
    isLoading,
    refetch,
    isRefetching,
  };
}

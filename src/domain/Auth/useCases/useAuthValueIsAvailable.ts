import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../authService';

interface Param {
  username: string;
  enabled: boolean;
}

export function useAuthValueIsAvailable({username, enabled}: Param) {
  const debouncedUsername = useDebounce(username, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.isUserNameAvailable, debouncedUsername],
    queryFn: () => authService.isUserNameAvailable(debouncedUsername),
    retry: false,
    staleTime: 20000,
    enabled: enabled && debouncedUsername.length > 0,
  });

  const isDebouced = debouncedUsername !== username;

  return {
    isAvailable: !!data,
    isUnavailable: data === false,
    isFetching: isFetching || isDebouced,
  };
}

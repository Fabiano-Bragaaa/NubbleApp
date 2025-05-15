import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../authService';

interface Param<T extends {length: number}> {
  value: T;
  enabled: boolean;
  queryKey: QueryKeys;
  isAvailabbleFunc: (value: T) => Promise<boolean>;
}

function useAuthValueIsAvailable<T extends {length: number}>({
  value,
  enabled,
  isAvailabbleFunc,
  queryKey,
}: Param<T>) {
  const debouncedValue = useDebounce(value, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [queryKey, debouncedValue],
    queryFn: () => isAvailabbleFunc(debouncedValue),
    retry: false,
    staleTime: 20000,
    enabled: enabled && debouncedValue.length > 0,
  });

  const isDebouced = debouncedValue !== value;

  return {
    isUnavailable: data === false,
    isFetching: isFetching || isDebouced,
  };
}

export function useAuthIsUsernameAvailable({
  username,
  enabled,
}: {
  username: string;
  enabled: boolean;
}) {
  return useAuthValueIsAvailable({
    value: username,
    enabled,
    isAvailabbleFunc: authService.isUserNameAvailable,
    queryKey: QueryKeys.isUsernameAvailable,
  });
}

export function useAuthIsEmailAvailable({
  email,
  enabled,
}: {
  email: string;
  enabled: boolean;
}) {
  return useAuthValueIsAvailable({
    value: email,
    enabled,
    isAvailabbleFunc: authService.isEmailAvailable,
    queryKey: QueryKeys.isUsernameAvailable,
  });
}

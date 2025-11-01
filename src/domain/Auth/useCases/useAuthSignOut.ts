import {useMutation} from '@tanstack/react-query';

import {useAuthCredentials} from '../../../services/authCredentials/useAuthCredentials';
import {useSearchHistoryService} from '../../../services/searchHistory/useSearchHistory';
import {authService} from '../authService';

export function useAuthSignOut() {
  const {removeCredentials} = useAuthCredentials();
  const {clearUserList} = useSearchHistoryService();
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSuccess: () => removeCredentials,
    onSettled: () => {
      removeCredentials();
      clearUserList();
    },
  });

  return {
    isLoading: mutation.isLoading,
    signOut: () => mutation.mutate(),
  };
}

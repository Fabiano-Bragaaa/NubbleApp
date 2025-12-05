import {MutationOptions, QueryKeys} from '@infra';
import {useAuthCredentials} from '@services';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {userService} from '../userService';
import {UpdateUserParams, User} from '../userTypes';

export function useUserUpdate(options?: MutationOptions<User>) {
  const queryClient = useQueryClient();
  const {authCredentials, updatedUser} = useAuthCredentials();
  const {mutate, isLoading} = useMutation<User, Error, UpdateUserParams>({
    mutationFn: params => updateUser(params),
    retry: false,
    onError: () => {
      if (options?.onError) {
        //TODO
      }
    },
    onSuccess: user => {
      queryClient.invalidateQueries([QueryKeys.UserGetById, user.id]);
      updatedUser(user);
      if (options?.onSuccess) {
        options.onSuccess(user);
      }
    },
  });

  async function updateUser(params: UpdateUserParams): Promise<User> {
    if (!authCredentials) {
      throw new Error('User not authenticated');
    }

    const user = await userService.updateUser(authCredentials.user, params);
    return user;
  }

  return {
    mutate,
    isLoading,
  };
}

import {followService, useRemoveFollow} from '@domain';
import {QueryKeys} from '@infra';
import {useToastService} from '@services';

import {UserListTemplate} from '@components';
import {AppScreenProps} from '@routes';

export function Followers({}: AppScreenProps<'Followers'>) {
  const {showToast} = useToastService();
  const {removeFollow} = useRemoveFollow({
    onSuccess: () => {
      showToast({
        message: 'Seguidor removido',
        type: 'success',
        position: 'bottom',
      });
    },
  });
  return (
    <UserListTemplate
      getUserList={followService.getMyFollowersList}
      screenTitle="Seguidores"
      totalText="seguindo"
      QueryKey={QueryKeys.Followers}
      button={{
        title: 'Remover',
        onPress: followUser =>
          removeFollow({
            followId: followUser.followId,
            userId: followUser.id,
          }),
      }}
    />
  );
}

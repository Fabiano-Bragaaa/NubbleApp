import {followService, useRemoveFollow} from '@domain';
import {QueryKeys} from '@infra';
import {useToastService} from '@services';

import {UserListTemplate} from '@components';
import {AppScreenProps} from '@routes';

export function Following({}: AppScreenProps<'Following'>) {
  const {showToast} = useToastService();
  const {removeFollow, undoRemoveFollow} = useRemoveFollow({
    onSuccess: () =>
      showToast({
        message: 'Seguindo removido',
        type: 'success',
        position: 'bottom',
        action: {
          title: 'Desfazer',
          onPress: undoRemoveFollow,
        },
      }),
  });
  return (
    <UserListTemplate
      getUserList={followService.geMyFollowingList}
      screenTitle="Seguindo"
      totalText="seguidores"
      QueryKey={QueryKeys.Following}
      button={{
        title: 'Seguindo',
        onPress: followUser =>
          removeFollow({
            followId: followUser.followId,
            userId: followUser.id,
          }),
      }}
    />
  );
}

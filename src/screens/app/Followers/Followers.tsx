import {followService} from '@domain';
import {QueryKeys} from '@infra';

import {UserListTemplate} from '@components';
import {AppScreenProps} from '@routes';

export function Followers({}: AppScreenProps<'Followers'>) {
  return (
    <UserListTemplate
      getUserList={followService.getMyFollowersList}
      screenTitle="Seguidores"
      totalText="seguindo"
      QueryKey={QueryKeys.Followers}
      button={{
        title: 'Remover',
        onPress: () => {},
      }}
    />
  );
}

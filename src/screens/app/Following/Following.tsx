import {followService} from '@domain';
import {QueryKeys} from '@infra';

import {UserListTemplate} from '@components';
import {AppScreenProps} from '@routes';

export function Following({}: AppScreenProps<'Following'>) {
  return (
    <UserListTemplate
      getUserList={followService.geMyFollowingList}
      screenTitle="Seguindo"
      totalText="seguidores"
      QueryKey={QueryKeys.Following}
      button={{
        title: 'Seguindo',
        onPress: () => {},
      }}
    />
  );
}

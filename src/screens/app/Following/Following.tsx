import {useState} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {followService, FollowUser} from '@domain';
import {QueryKeys} from '@infra';

import {
  Box,
  Button,
  InfinityScrollList,
  ProfileAvatar,
  ProfileUser,
  Screen,
  Text,
} from '@components';
import {AppScreenProps} from '@routes';

export function Following({}: AppScreenProps<'Following'>) {
  const [totalUsers, setTotalUsers] = useState<number | null>(null);
  function renderItem({item}: ListRenderItemInfo<FollowUser>) {
    return (
      <ProfileUser
        user={item}
        rightComponent={
          <Button title="Seguindo" onPress={() => {}} preset="gray" />
        }
      />
    );
  }

  function renderListHeader() {
    if (!totalUsers) return null;
    return (
      <Text semiBold preset="paragraphSmall" color="primary" mb="s24">
        {totalUsers} seguidores
      </Text>
    );
  }

  async function getList(page: number) {
    const response = await followService.geMyFollowingList(page);
    setTotalUsers(response.meta.total);
    return response;
  }

  return (
    <Screen title="Seguindo" canGoBack>
      <InfinityScrollList
        getList={getList}
        queryKey={[QueryKeys.Following]}
        renderItem={renderItem}
        flatListProps={{
          ListHeaderComponent: renderListHeader,
        }}
      />
    </Screen>
  );
}

import {useState} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {FollowUser} from '@domain';
import {QueryKeys} from '@infra';
import {Page} from '@types';

import {Button} from '../Button/Button';
import {InfinityScrollList} from '../InfinityScrollList/InfinityScrollList';
import {ProfileUser} from '../ProfileUser/ProfileUser';
import {Screen} from '../Screen/Screen';
import {Text} from '../Text/Text';

type Props = {
  getUserList: (page: number) => Promise<Page<FollowUser>>;
  screenTitle: string;
  totalText: string;
  QueryKey: QueryKeys;
  button: {
    title: string;
    onPress: (followUser: FollowUser) => void;
  };
};

export function UserListTemplate({
  getUserList,
  screenTitle,
  totalText,
  QueryKey,
  button,
}: Props) {
  const [totalUsers, setTotalUsers] = useState<number | null>(null);
  function renderItem({item}: ListRenderItemInfo<FollowUser>) {
    return (
      <ProfileUser
        user={item}
        rightComponent={
          <Button
            title={button.title}
            onPress={() => button.onPress(item)}
            preset="gray"
          />
        }
      />
    );
  }

  function renderListHeader() {
    if (!totalUsers) return null;
    return (
      <Text semiBold preset="paragraphSmall" color="primary" mb="s24">
        {totalUsers} {totalText}
      </Text>
    );
  }

  async function getList(page: number) {
    const response = await getUserList(page);
    setTotalUsers(response.meta.total);
    return response;
  }

  return (
    <Screen title={screenTitle} canGoBack>
      <InfinityScrollList
        getList={getList}
        queryKey={[QueryKey]}
        renderItem={renderItem}
        flatListProps={{
          ListHeaderComponent: renderListHeader,
        }}
        emptyListProps={{
          emptyMessage: 'Nenhum usuário encontrado',
          errorMessage: 'Erro ao buscar usuários',
        }}
      />
    </Screen>
  );
}

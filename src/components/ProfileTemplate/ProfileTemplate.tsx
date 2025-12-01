import {FlatList, Image, ListRenderItemInfo} from 'react-native';

import {Post, usePostList, useUserGetById} from '@domain';

import {Screen} from '../Screen/Screen';

import {ProfileHeader} from './components/ProfileHeader';

type ProfileTemplateProps = {
  userId: number;
  isMyProfile?: boolean;
};

export function ProfileTemplate({
  userId,
  isMyProfile = false,
}: ProfileTemplateProps) {
  const {isError, isLoading, user, isRefetching, refetch} =
    useUserGetById(userId);

  const {list} = usePostList();

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Image source={{uri: item.imageURL}} style={{width: 100, height: 100}} />
    );
  }

  function renderHeader() {
    if (!user) return null;

    return <ProfileHeader user={user} />;
  }

  return (
    <Screen canGoBack={!isMyProfile}>
      <FlatList
        data={list}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
      />
    </Screen>
  );
}

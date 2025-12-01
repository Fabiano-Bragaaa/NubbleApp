import {FlatList, Image, ListRenderItemInfo} from 'react-native';

import {Post, usePostList, useUserGetById} from '@domain';

import {Box} from '../Box/Box';
import {ProfileAvatar} from '../ProfileAvatar/ProfileAvatar';
import {Screen} from '../Screen/Screen';
import {Text} from '../Text/Text';

type ProfileTemplateProps = {
  userId: number;
};

export function ProfileTemplate({userId}: ProfileTemplateProps) {
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

    return (
      <Box>
        <ProfileAvatar imageUrl={user.profileUrl} />
        <Text preset="headingMedium">{user.fullName}</Text>
        <Text preset="paragraphMedium">{user.username}</Text>
      </Box>
    );
  }

  return (
    <Screen canGoBack>
      <FlatList
        data={list}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
      />
    </Screen>
  );
}

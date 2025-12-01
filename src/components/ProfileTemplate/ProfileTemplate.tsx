import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

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
  const {user} = useUserGetById(userId);

  const {list} = usePostList();

  const NUM_COLUMNS = 3;
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;
  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Image
        source={{uri: item.imageURL}}
        style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
      />
    );
  }

  function renderHeader() {
    if (!user) return null;

    return <ProfileHeader user={user} isMyProfile={isMyProfile} />;
  }

  return (
    <Screen canGoBack={!isMyProfile} style={$screen}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderHeader}
        numColumns={NUM_COLUMNS}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
};

import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, postService, useUserGetById} from '@domain';
import {QueryKeys} from '@infra';

import {InfinityScrollList} from '../InfinityScrollList/InfinityScrollList';
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

  async function getPostList(page: number) {
    return await postService.getList(page, userId);
  }

  return (
    <Screen canGoBack={!isMyProfile} style={$screen}>
      <InfinityScrollList
        queryKey={[QueryKeys.PostList, userId]}
        getList={getPostList}
        renderItem={renderItem}
        flatListProps={{
          ListHeaderComponent: renderHeader,
          numColumns: NUM_COLUMNS,
        }}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
};

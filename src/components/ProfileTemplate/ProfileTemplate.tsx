import {useState} from 'react';
import {
  Dimensions,
  Image,
  ListRenderItemInfo,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, postService, useUserGetById} from '@domain';
import {QueryKeys} from '@infra';

import {useAppNavigation} from '@hooks';

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
  const [publicationsCount, setPublicationsCount] = useState(0);
  const navigate = useAppNavigation();
  const NUM_COLUMNS = 3;
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;
  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Pressable
        onPress={() => {
          navigate.toPostDetail({
            postId: item.id,
            postAuthor: item.author.id,
          });
        }}>
        <Image
          source={{uri: item.imageURL}}
          style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
        />
      </Pressable>
    );
  }

  function renderHeader() {
    if (!user) return null;

    return (
      <ProfileHeader
        user={user}
        isMyProfile={isMyProfile}
        publicationsCount={publicationsCount.toString()}
      />
    );
  }

  async function getPostList(page: number) {
    const response = await postService.getList(page, userId);
    setPublicationsCount(response.meta.total);
    return response;
  }

  return (
    <Screen style={$screen}>
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

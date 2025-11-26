import {Image, ListRenderItemInfo} from 'react-native';

import {postReactionService} from '@domain';
import {QueryKeys} from '@infra';
import {PostReaction} from 'src/domain/PostReaction/PostReactionType';

import {InfinityScrollList, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

export function Favorite({}: AppTabScreenProps<'Favorite'>) {
  function renderItem({item}: ListRenderItemInfo<PostReaction>) {
    return (
      <Image
        source={{uri: item.post.image_url}}
        style={{width: 300, height: 300}}
      />
    );
  }

  return (
    <Screen flex={1} title="Favoritos">
      <InfinityScrollList
        queryKey={QueryKeys.FavoriteList}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        renderItem={renderItem}
      />
    </Screen>
  );
}

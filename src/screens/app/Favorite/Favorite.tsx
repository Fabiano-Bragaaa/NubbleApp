import {Dimensions, Image, ListRenderItemInfo} from 'react-native';

import {postReactionService} from '@domain';
import {QueryKeys} from '@infra';
import {PostReaction} from 'src/domain/PostReaction/PostReactionType';

import {Box, InfinityScrollList, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_PADDING = 24;
const ITEM_MARGIN = 8 * 2;

const ITEM_WIDTH =
  (SCREEN_WIDTH - SCREEN_PADDING * 2 - ITEM_MARGIN) / NUM_COLUMNS;

export function Favorite({}: AppTabScreenProps<'Favorite'>) {
  function renderItem({item}: ListRenderItemInfo<PostReaction>) {
    return (
      <Box>
        <Image
          source={{uri: item.post.image_url}}
          style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
        />
        <Text>{item.author.username}</Text>
      </Box>
    );
  }

  return (
    <Screen flex={1} title="Favoritos">
      <InfinityScrollList
        queryKey={QueryKeys.FavoriteList}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        renderItem={renderItem}
        flatListProps={{
          numColumns: NUM_COLUMNS,
          columnWrapperStyle: {
            columnGap: ITEM_MARGIN,
          },
          contentContainerStyle: {
            rowGap: SCREEN_PADDING,
          },
        }}
      />
    </Screen>
  );
}

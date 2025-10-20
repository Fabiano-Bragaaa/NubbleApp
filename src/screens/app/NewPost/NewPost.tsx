import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {useCameraRoll} from '@services';

import {Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {NewPostHeader} from './components/Header';

export function NewPost({navigation}: AppTabScreenProps<'NewPost'>) {
  const {photoList, fetchNextPage} = useCameraRoll(true);

  const screenWidth = Dimensions.get('screen').width;

  const numberOfColumns = 4;

  const itemWidth = screenWidth / numberOfColumns;

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Image
        source={{uri: item}}
        style={{width: itemWidth, height: itemWidth}}
      />
    );
  }

  return (
    <Screen canGoBack title="Novo post" noPaddingHorizontal>
      <FlatList
        data={photoList}
        renderItem={renderItem}
        keyExtractor={item => item}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        numColumns={numberOfColumns}
        ListHeaderComponent={
          <NewPostHeader imageUri={photoList[0]} imageSize={screenWidth} />
        }
      />
    </Screen>
  );
}

import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {useCameraRoll} from '@services';

import {Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {NewPostHeader} from './components/Header';

export function NewPost({navigation}: AppTabScreenProps<'NewPost'>) {
  const {list} = useCameraRoll();

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
    <Screen canGoBack title="Novo post" scrollable noPaddingHorizontal>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item}
        numColumns={numberOfColumns}
        ListHeaderComponent={
          <NewPostHeader imageUri={list[0]} imageSize={screenWidth} />
        }
      />
    </Screen>
  );
}

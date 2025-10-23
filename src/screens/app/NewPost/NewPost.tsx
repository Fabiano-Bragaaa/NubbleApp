import {useRef, useState} from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {useCameraRoll, usePermission} from '@services';

import {PermissionManager, PressableBox, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {NewPostHeader} from './components/Header';

export function NewPost({navigation}: AppTabScreenProps<'NewPost'>) {
  const [selectedImage, setSelectedImage] = useState<string>();

  const permission = usePermission('photoLibrary');

  const {photoList, fetchNextPage} = useCameraRoll(
    permission.status === 'granted',
    setSelectedImage,
  );

  const flatListRef = useRef<FlatList>(null);

  const screenWidth = Dimensions.get('screen').width;

  const numberOfColumns = 4;

  const itemWidth = screenWidth / numberOfColumns;

  function onSelectImage(image: string) {
    setSelectedImage(image);
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  }

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <PressableBox onPress={() => onSelectImage(item)}>
        <Image
          source={{uri: item}}
          style={{width: itemWidth, height: itemWidth}}
        />
      </PressableBox>
    );
  }

  return (
    <PermissionManager
      permissionName="photoLibrary"
      description="Permita o nubble acessar a galeria">
      <Screen canGoBack title="Novo post" noPaddingHorizontal>
        <FlatList
          ref={flatListRef}
          data={photoList}
          renderItem={renderItem}
          keyExtractor={item => item}
          onEndReached={fetchNextPage}
          onEndReachedThreshold={0.1}
          numColumns={numberOfColumns}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <NewPostHeader imageUri={selectedImage} imageSize={screenWidth} />
          }
        />
      </Screen>
    </PermissionManager>
  );
}

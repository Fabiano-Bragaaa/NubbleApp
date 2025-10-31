import {useState} from 'react';
import {Dimensions, Image} from 'react-native';

import {usePostCreate} from '@domain';
import {useToastService} from '@services';

import {Button, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

export function PublishPost({
  route,
  navigation,
}: AppScreenProps<'PublishPost'>) {
  const [description, setDescription] = useState('');
  const imageWidth = Dimensions.get('screen').width / 2;
  const {showToast} = useToastService();
  const {createPost, isLoading} = usePostCreate({
    onSuccess: () => {
      navigation.navigate('AppTabNavigator', {
        screen: 'Home',
      });
      showToast({
        message: 'Post criado com sucesso',
        type: 'success',
      });
    },
    onError: error => {
      showToast({
        message: error,
        type: 'error',
      });
    },
  });

  function handleCreatePost() {
    createPost({description, imageUri: route.params.imageUri});
  }

  return (
    <Screen title="Novo post" canGoBack>
      <Image
        source={{uri: route.params.imageUri}}
        style={{
          width: imageWidth,
          height: imageWidth,
          alignSelf: 'center',
          marginTop: 20,
        }}
      />
      <Text preset="headingSmall" mt="s32" mb="s8">
        Escreva uma legenda
      </Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Digite aqui ..."
        containerProps={{borderWidth: 0}}
      />
      <Button
        mt="s56"
        title="Publicar Post"
        onPress={handleCreatePost}
        loading={isLoading}
        disabled={isLoading || description.length < 1}
      />
    </Screen>
  );
}

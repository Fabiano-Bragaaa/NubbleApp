import {useState} from 'react';
import {Dimensions, Image} from 'react-native';

import {Button, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

export function PublishPost({route}: AppScreenProps<'PublishPost'>) {
  const [caption, setCaption] = useState('');
  const imageWidth = Dimensions.get('screen').width / 2;

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
        value={caption}
        onChangeText={setCaption}
        placeholder="Digite aqui ..."
        containerProps={{borderWidth: 0}}
      />
      <Button mt="s56" title="Publicar Post" onPress={() => {}} />
    </Screen>
  );
}

import {Image} from 'react-native';

import {useCameraRoll} from '@services';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function NewPost({navigation}: AppTabScreenProps<'NewPost'>) {
  const {list} = useCameraRoll();
  return (
    <Screen>
      <Text preset="headingLarge">NewPost</Text>
      {list.map(item => (
        <Image
          key={item}
          source={{uri: item}}
          style={{width: 100, height: 100}}
        />
      ))}
    </Screen>
  );
}

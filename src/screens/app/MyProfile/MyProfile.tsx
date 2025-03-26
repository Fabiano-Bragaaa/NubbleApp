import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function MyProfile({navigation}: AppTabScreenProps<'MyProfile'>) {
  return (
    <Screen>
      <Text preset="headingLarge">MyProfile</Text>
    </Screen>
  );
}

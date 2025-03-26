import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function Settings({navigation}: AppScreenProps<'Settings'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Settings</Text>
    </Screen>
  );
}

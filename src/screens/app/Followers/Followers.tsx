import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function Followers({}: AppScreenProps<'Followers'>) {
  return (
    <Screen title="Seguidores" canGoBack>
      <Text>Followers</Text>
    </Screen>
  );
}

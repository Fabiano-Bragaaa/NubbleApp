import {useAuthSignOut} from '@domain';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function Settings({navigation}: AppScreenProps<'Settings'>) {
  const {isLoading, signOut} = useAuthSignOut();

  return (
    <Screen canGoBack title="Configurações">
      <Text preset="headingLarge" mb="s10">
        Settings
      </Text>
      <Button title="Sair da conta" loading={isLoading} onPress={signOut} />
    </Screen>
  );
}

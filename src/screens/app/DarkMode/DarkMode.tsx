import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function DarkMode({navigation}: AppScreenProps<'DarkMode'>) {
  return (
    <Screen canGoBack title="Modo noturno">
      <Text>Modo noturno</Text>
    </Screen>
  );
}

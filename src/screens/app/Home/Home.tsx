import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function Home({navigation}: AppTabScreenProps<'Home'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </Screen>
  );
}

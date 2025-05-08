import {useAuthCredentials} from '@services';

import {Box, Icon, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function MyProfile({navigation}: AppTabScreenProps<'MyProfile'>) {
  const {authCredentials} = useAuthCredentials();
  const name = authCredentials?.user.fullName;
  return (
    <Screen>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        {name && <Text preset="headingMedium">{name}</Text>}
        <Icon name="settings" onPress={() => navigation.navigate('Settings')} />
      </Box>
    </Screen>
  );
}

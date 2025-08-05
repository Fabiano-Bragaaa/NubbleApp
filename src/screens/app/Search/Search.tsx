import {useState} from 'react';

import {Icon, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

export function Search({}: AppScreenProps<'Search'>) {
  const [search, setSerch] = useState('');
  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          LeftComponent={<Icon name="search" color="gray3" />}
          value={search}
          onChangeText={setSerch}
        />
      }>
      <Text>Screen</Text>
    </Screen>
  );
}

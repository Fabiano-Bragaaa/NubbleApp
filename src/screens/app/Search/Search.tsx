import {useState} from 'react';

import {useUserSearch} from '@domain';

import {Icon, Screen, Text, TextInput} from '@components';
import {useDebounce} from '@hooks';
import {AppScreenProps} from '@routes';

export function Search({}: AppScreenProps<'Search'>) {
  const [search, setSerch] = useState('');
  const debouncedSearch = useDebounce(search);

  const {list} = useUserSearch(debouncedSearch);

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          placeholder="Digite sua busca"
          LeftComponent={<Icon name="search" color="gray3" />}
          value={search}
          onChangeText={setSerch}
        />
      }>
      {list.map(user => (
        <Text key={user.id}>{user.username}</Text>
      ))}
    </Screen>
  );
}

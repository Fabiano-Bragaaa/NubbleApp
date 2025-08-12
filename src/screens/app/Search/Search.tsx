import {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User, useUserSearch} from '@domain';
import {useSearchHistoryService} from '@services';

import {Icon, ProfileUser, Screen, Text, TextInput} from '@components';
import {useDebounce} from '@hooks';
import {AppScreenProps} from '@routes';

import {SearchHistory} from './components/SearchHistory';

export function Search({}: AppScreenProps<'Search'>) {
  const [search, setSerch] = useState('');
  const debouncedSearch = useDebounce(search);
  const {addUser} = useSearchHistoryService();

  const {list} = useUserSearch(debouncedSearch);

  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        avatarProps={{size: 48}}
        onPress={() => addUser(item)}
        user={item}
      />
    );
  }

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
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </Screen>
  );
}

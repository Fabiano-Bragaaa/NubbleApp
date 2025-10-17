import {FlatList, ListRenderItemInfo} from 'react-native';

import {User} from '@domain';
import {useSearchHistory, useSearchHistoryService} from '@services';

import {Box, Icon, ProfileUser, Text} from '@components';

export function SearchHistory() {
  const userList = useSearchHistory();
  const {removeUser} = useSearchHistoryService();
  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        user={item}
        avatarProps={{size: 48}}
        rightComponent={
          <Icon
            name="trash"
            color="error"
            onPress={() => removeUser(item.id)}
          />
        }
      />
    );
  }

  return (
    <Box>
      <FlatList
        ListHeaderComponent={
          <Text preset="headingMedium" mb="s16">
            Buscas recentes
          </Text>
        }
        data={userList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Box>
  );
}

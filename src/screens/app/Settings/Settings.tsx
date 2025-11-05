import {FlatList} from 'react-native';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Separator, Text} from '@components';
import {AppScreenProps} from '@routes';

import {MenuItem, MenuItemProps} from './components/MenuItem';

export function Settings({navigation}: AppScreenProps<'Settings'>) {
  const {isLoading, signOut} = useAuthSignOut();

  const items: MenuItemProps[] = [
    {
      title: 'Termos de uso',
      onPress: () => {},
    },
    {
      title: 'Política de privacidade',
      onPress: () => {},
    },
    {
      title: 'Modo noturno',
      onPress: () => navigation.navigate('DarkMode'),
    },
  ];

  function renderItem({item}: {item: MenuItemProps}) {
    return <MenuItem {...item} />;
  }

  return (
    <Screen canGoBack title="Configurações" flex={1}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        ItemSeparatorComponent={Separator}
        bounces={false}
        ListFooterComponent={
          <Button
            mt="s48"
            title="Sair da conta"
            loading={isLoading}
            onPress={signOut}
          />
        }
      />
    </Screen>
  );
}

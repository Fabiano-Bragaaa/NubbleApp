import React from 'react';

import {useUserGetById} from '@domain';

import {Button, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {EditProfileForm} from './components/EditProfileForm';
import {EditProfileHeader} from './components/EditProfileHeader';

export function EditProfile({route}: AppScreenProps<'EditProfile'>) {
  const {user} = useUserGetById(route.params.userId);

  function submitForm() {
    //TODO
  }

  return (
    <Screen canGoBack scrollable title="Editar Senha">
      <EditProfileHeader user={user} />
      {user && <EditProfileForm user={user} />}
      <Button title="Salvar alterações" mt="s40" onPress={submitForm} />
    </Screen>
  );
}

import {useState} from 'react';

import {useUserGetById} from '@domain';

import {Button, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {EditProfileForm} from './components/EditProfileForm';
import {EditProfileHeader} from './components/EditProfileHeader';

export function EditProfile({route}: AppScreenProps<'EditProfile'>) {
  const {user} = useUserGetById(route.params.userId);
  const [formIsValid, setFormIsValid] = useState(false);

  function submitForm() {
    //TODO
  }

  return (
    <Screen canGoBack scrollable title="Editar Senha">
      <EditProfileHeader user={user} />
      {user && <EditProfileForm user={user} onChangeIsValid={setFormIsValid} />}
      <Button
        title="Salvar alterações"
        mt="s40"
        onPress={submitForm}
        disabled={!formIsValid}
      />
    </Screen>
  );
}

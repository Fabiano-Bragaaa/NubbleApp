import {useRef, useState} from 'react';

import {useUserGetById} from '@domain';

import {Button, InputButton, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {
  EditProfileForm,
  EditProfileFormRef,
} from './components/EditProfileForm';
import {EditProfileHeader} from './components/EditProfileHeader';

export function EditProfile({
  route,
  navigation,
}: AppScreenProps<'EditProfile'>) {
  const {user} = useUserGetById(route.params.userId);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<EditProfileFormRef>(null);

  function submitForm() {
    formRef.current?.onSubmit();
  }

  return (
    <Screen canGoBack scrollable title="Editar Senha">
      <EditProfileHeader user={user} mb="s24" />
      {user && (
        <>
          <EditProfileForm
            user={user}
            onChangeIsValid={setFormIsValid}
            onChangeIsLoading={setIsLoading}
            ref={formRef}
          />
          <InputButton
            label="email"
            value={user?.email || ''}
            onPress={() =>
              navigation.navigate('EditEmail', {
                userId: route.params.userId,
              })
            }
            mb="s16"
          />
          <InputButton
            label="senha"
            value={'*********'}
            onPress={() =>
              navigation.navigate('EditPassword', {
                userId: route.params.userId,
              })
            }
          />
        </>
      )}

      <Button
        title="Salvar alterações"
        mt="s40"
        onPress={submitForm}
        disabled={!formIsValid}
        loading={isLoading}
      />
    </Screen>
  );
}

import React from 'react';

import {useAuthUpdatePassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormPasswordTextInput, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

import {editPasswordSchema, EditPasswordSchema} from './editPasswordSchema';

const defaultValues: EditPasswordSchema = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

export function EditPassword({}: AppScreenProps<'EditPassword'>) {
  const {isLoading, updatePassword} = useAuthUpdatePassword();
  const {handleSubmit, control, formState} = useForm<EditPasswordSchema>({
    resolver: zodResolver(editPasswordSchema),
    defaultValues,
    mode: 'onChange',
  });

  return (
    <Screen canGoBack scrollable title="alterar Senha">
      <FormPasswordTextInput
        control={control}
        name="currentPassword"
        label="Senha atual"
        placeholder="Digite sua senha atual"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordTextInput
        control={control}
        name="newPassword"
        label="Nova senha"
        placeholder="Digite sua nova senha"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordTextInput
        control={control}
        name="confirmPassword"
        label="Confirmar nova senha"
        placeholder="Confirme sua nova senha"
        boxProps={{mb: 's20'}}
      />
      <Button
        title="Salvar Alterações"
        onPress={handleSubmit(updatePassword)}
        disabled={!formState.isValid}
        loading={isLoading}
        mt="s40"
      />
    </Screen>
  );
}

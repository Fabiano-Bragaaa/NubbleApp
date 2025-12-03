import React, {Ref, useEffect, useImperativeHandle} from 'react';

import {authService, User} from '@domain';
import {useAsyncValidation} from '@form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {ActivityIndicator, Box, FormTextInput} from '@components';

import {editProfileSchema} from '../editProfileSchema';

type Props = {
  user: User;
  onChangeIsValid: (isValid: boolean) => void;
};

export type EditProfileFormRef = {
  onSubmit: () => void;
};

export function EditProfileFormComponent(
  {user, onChangeIsValid}: Props,
  ref: Ref<EditProfileFormRef>,
) {
  const {control, formState, watch, getFieldState, handleSubmit} = useForm({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    mode: 'onChange',
  });

  const usernameValidation = useAsyncValidation({
    watch,
    getFieldState,
    fieldName: 'username',
    isAvailableFunc: authService.isUserNameAvailable,
    errorMessage: 'username indisponível',
  });

  useEffect(() => {
    onChangeIsValid(formState.isValid && !usernameValidation.notReady);
  }, [formState.isValid, onChangeIsValid, usernameValidation.notReady]);

  useImperativeHandle(ref, () => ({
    onSubmit: () =>
      handleSubmit(formValues => {
        console.log(formValues);
      })(),
  }));

  return (
    <Box>
      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        errorMessage={usernameValidation.errorMessage}
        boxProps={{mb: 's20'}}
        RightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />
      <FormTextInput
        control={control}
        name="firstName"
        autoCapitalize="words"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="lastName"
        autoCapitalize="words"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{mb: 's20'}}
      />
    </Box>
  );
}

export const EditProfileForm = React.forwardRef(EditProfileFormComponent);

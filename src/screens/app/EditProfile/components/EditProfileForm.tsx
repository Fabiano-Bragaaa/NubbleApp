import {authService, User} from '@domain';
import {useAsyncValidation} from '@form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {ActivityIndicator, Box, FormTextInput} from '@components';

import {editProfileSchema} from '../editProfileSchema';

type Props = {
  user: User;
};

export function EditProfileForm({user}: Props) {
  const {control, formState, watch, getFieldState} = useForm({
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

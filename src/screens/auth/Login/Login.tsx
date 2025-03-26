import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormPasswordTextInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {AuthScreenProps} from '@routes';

import {typeLoginSchema, loginSchema} from './loginSchema';

export function Login({navigation}: AuthScreenProps<'Login'>) {
  const {control, formState, handleSubmit} = useForm<typeLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: typeLoginSchema) {
    console.log({email, password});
  }

  function navigateToSignUp() {
    navigation.navigate('SignUp');
  }

  function navigateToForgetMyPassword() {
    navigation.navigate('ForgetPassword');
  }

  return (
    <Screen>
      <Text preset="headingLarge" mb="s8">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordTextInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Text
        onPress={navigateToForgetMyPassword}
        color="primary"
        preset="paragraphSmall"
        bold
        mt="s20">
        Esqueci minha senha
      </Text>
      <Button
        disabled={!formState.isValid}
        mt="s48"
        title="Entrar"
        onPress={handleSubmit(submitForm)}
      />
      <Button
        onPress={navigateToSignUp}
        mt="s12"
        title="Criar uma conta"
        preset="outline"
      />
    </Screen>
  );
}

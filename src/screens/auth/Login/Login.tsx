import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/routes';
import {useForm} from 'react-hook-form';
import {typeLoginSchema, loginSchema} from './loginSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordTextInput} from '../../../components/Form/FormPasswordInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function Login({navigation}: ScreenProps) {
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

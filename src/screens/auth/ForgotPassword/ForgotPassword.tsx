import {useAuthRequestNewPassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';
import {AuthScreenProps} from 'src/routes/navigationType';

import {Button, FormTextInput, Screen, Text} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthStackParamList} from '@routes';

import {
  typeforgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

const resetParam: AuthStackParamList['Success'] = {
  title: 'Enviamos as instruções para seu e-mail',
  description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
  icon: {
    name: 'messageRound',
    color: 'iconColor',
    fillColor: 'iconFillColor',
  },
};

export function ForgotPassword({
  navigation,
}: AuthScreenProps<'ForgotPassword'>) {
  const {reset} = useResetNavigationSuccess();
  const {showToast} = useToastService();

  const {requestNewPassoword, isLoading} = useAuthRequestNewPassword({
    onSuccess: () => {
      reset(resetParam);
    },
    onError: message => {
      showToast({message, type: 'error'});
    },
  });

  const {control, formState, handleSubmit} = useForm<typeforgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm({email}: typeforgotPasswordSchema) {
    // requestNewPassoword(email);
    reset(resetParam);
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />

      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        title="Recuperar senha"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}

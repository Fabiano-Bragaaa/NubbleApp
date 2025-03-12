import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function Login() {
  return (
    <Screen>
      <Text preset="headingLarge" mb="s8">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <Box>
        <PasswordInput label="Senha" placeholder="Digite sua senha" />
      </Box>
      <Text color="primary" preset="paragraphSmall" bold mt="s10">
        Esqueci minha senha
      </Text>
      <Button mt="s48" title="Entrar" />
      <Button mt="s12" title="Criar uma conta" preset="outline" />
    </Screen>
  );
}

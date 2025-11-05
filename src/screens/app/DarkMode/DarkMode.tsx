import {
  RadioButton,
  RadioButtonItemProps,
  RadioButtonSelector,
  Screen,
  Text,
} from '@components';
import {AppScreenProps} from '@routes';

export function DarkMode({navigation}: AppScreenProps<'DarkMode'>) {
  const item: RadioButtonItemProps[] = [
    {
      label: 'Ativado',
      isSelected: true,
      onPress: () => {},
    },
    {
      label: 'Desativado',
      isSelected: false,
      onPress: () => {},
    },
    {
      label: 'Padrão do sistema',
      description:
        'A aparência do aplicativo será determinada pela configuração do seu dispositivo.',
      isSelected: false,
      onPress: () => {},
    },
  ];
  return (
    <Screen canGoBack title="Modo noturno">
      <RadioButtonSelector items={item} />
    </Screen>
  );
}

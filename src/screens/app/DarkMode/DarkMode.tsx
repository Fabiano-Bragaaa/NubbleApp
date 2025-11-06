import {useState} from 'react';

import {RadioButtonSelector, Screen} from '@components';
import {AppScreenProps} from '@routes';

type ThemePreference = 'light' | 'dark' | 'system';

type Option = {
  label: string;
  description?: string;
  value: ThemePreference;
};

const itemList: Option[] = [
  {
    label: 'Ativado',
    value: 'light',
  },
  {
    label: 'Desativado',
    value: 'dark',
  },
  {
    label: 'Padrão do sistema',
    description:
      'A aparência do aplicativo será determinada pela configuração do seu dispositivo.',
    value: 'system',
  },
];

export function DarkMode({navigation}: AppScreenProps<'DarkMode'>) {
  const [selectedItem, setSelectedItem] = useState<Option>();

  return (
    <Screen canGoBack title="Modo noturno">
      <RadioButtonSelector
        items={itemList}
        selectedItem={selectedItem}
        labelKey="label"
        valueKey="value"
        descriptionKey="description"
        onSelect={item => setSelectedItem(item)}
      />
    </Screen>
  );
}

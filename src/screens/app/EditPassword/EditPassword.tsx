import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function EditPassword({}: AppScreenProps<'EditPassword'>) {
  return (
    <Screen canGoBack scrollable title="Editar Senha">
      <Text preset="headingSmall">Editar Senha</Text>
    </Screen>
  );
}

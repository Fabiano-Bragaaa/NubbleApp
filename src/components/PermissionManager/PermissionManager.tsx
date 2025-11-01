import React from 'react';
import {Linking, Platform} from 'react-native';

import {PermissionName, usePermission} from '@services';

import {ActivityIndicator} from '../../components/ActivityIndicator/ActivityIndicator';
import {Box} from '../../components/Box/Box';
import {Button} from '../../components/Button/Button';
import {Screen} from '../../components/Screen/Screen';
import {Text} from '../../components/Text/Text';
import {TextProps} from '../../components/Text/Text';

interface PermissionManagerProps {
  permissionName: PermissionName;
  description: string;
  children: React.ReactElement;
}

export function PermissionManager({
  permissionName,
  description,
  children,
}: PermissionManagerProps) {
  const {status, isLoading} = usePermission(permissionName);

  if (status === 'granted') {
    return children;
  }

  return (
    <Screen flex={1} canGoBack>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text preset="headingSmall" textAlign="center">
          {description}
        </Text>
        {isLoading && <ActivityIndicator color="primary" />}
        {status === 'unavailable' && (
          <Text {...$permissionMessage}>
            Esse recurso não está disponível no seu dispositivo.
          </Text>
        )}
        {status === 'never_ask_again' && (
          <Box>
            {Platform.OS === 'android' && (
              <Text {...$permissionMessage}>
                É necessário abrir e fechar o App novamente após alterar as
                configurações
              </Text>
            )}
            <Button
              title="Abrir Configurações"
              onPress={Linking.openSettings}
              mt="s16"
            />
          </Box>
        )}
      </Box>
    </Screen>
  );
}

const $permissionMessage: TextProps = {
  preset: 'paragraphMedium',
  color: 'error',
  bold: true,
  marginVertical: 's16',
  textAlign: 'center',
};

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostComment({route}: AppScreenProps<'PostComment'>) {
  // route;

  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Tela de comentarios</Text>
      </Box>
    </Screen>
  );
}

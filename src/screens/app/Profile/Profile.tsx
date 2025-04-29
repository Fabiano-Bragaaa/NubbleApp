import {useUserGetById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function Profile({route}: AppScreenProps<'Profile'>) {
  const userId = route.params.userId;

  const {isError, isLoading, user} = useUserGetById(userId);

  return (
    <Screen canGoBack>
      {isLoading && <ActivityIndicator />}
      {isError && <Text>Erro ao carregar o perfil do usúario</Text>}
      {user && (
        <Box alignItems="center">
          <ProfileAvatar
            imageUrl={user.profileUrl}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.username}</Text>
        </Box>
      )}
    </Screen>
  );
}

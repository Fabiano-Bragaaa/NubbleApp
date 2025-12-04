import {User} from '@domain';

import {Box, BoxProps, PressableBox, ProfileAvatar, Text} from '@components';

type Props = {
  user?: User;
} & BoxProps;

export function EditProfileHeader({user, ...boxProps}: Props) {
  if (!user) return null;

  function navigateToPhotoEdit() {
    //TODO: navigate to photo edit
  }

  return (
    <Box flexDirection="row" alignItems="center" {...boxProps}>
      <ProfileAvatar size={64} borderRadius={24} imageUrl={user.profileUrl} />
      <PressableBox hitSlop={10} onPress={navigateToPhotoEdit}>
        <Text preset="paragraphMedium" color="primary" bold ml="s16">
          Alterar foto
        </Text>
      </PressableBox>
    </Box>
  );
}

import {ReactNode} from 'react';
import {GestureResponderEvent} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, PressableBoxProps} from '../../components/Box/Box';
import {
  ProfileAvatar,
  ProfileAvatarProps,
} from '../../components/ProfileAvatar/ProfileAvatar';
import {Text} from '../../components/Text/Text';

type ProfileUserProps = {
  user: Pick<User, 'id' | 'profileUrl' | 'username'>;
  avatarProps?: Omit<Partial<ProfileAvatarProps>, 'imageUrl'>;
  rightComponent?: ReactNode;
};

export function ProfileUser({
  user,
  avatarProps,
  rightComponent,
}: ProfileUserProps) {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s16">
      <Box flexDirection="row" alignItems="center">
        <ProfileAvatar
          {...avatarProps}
          imageUrl={user.profileUrl}
          authorId={user.id}
        />
        <Text preset="paragraphMedium" semiBold ml="s12">
          {user.username}
        </Text>
      </Box>
      {rightComponent && rightComponent}
    </Box>
  );
}

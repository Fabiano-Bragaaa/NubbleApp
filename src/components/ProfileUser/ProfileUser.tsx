import {ReactNode} from 'react';
import {GestureResponderEvent} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, PressableBox, PressableBoxProps} from '../../components/Box/Box';
import {
  ProfileAvatar,
  ProfileAvatarProps,
} from '../../components/ProfileAvatar/ProfileAvatar';
import {Text} from '../../components/Text/Text';

type ProfileUserProps = {
  user: Pick<User, 'id' | 'profileUrl' | 'username'>;
  avatarProps?: Omit<Partial<ProfileAvatarProps>, 'imageUrl'>;
  rightComponent?: ReactNode;
} & PressableBoxProps;

export function ProfileUser({
  user,
  onPress,
  avatarProps,
  rightComponent,
  ...presableBoxProps
}: ProfileUserProps) {
  const {navigate} = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }
    navigate('Profile', {userId: user.id});
  }

  return (
    <PressableBox
      onPress={handleOnPress}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s16"
      {...presableBoxProps}>
      <Box flexDirection="row" alignItems="center">
        <ProfileAvatar {...avatarProps} imageUrl={user.profileUrl} />
        <Text preset="paragraphMedium" semiBold ml="s12">
          {user.username}
        </Text>
      </Box>
      {rightComponent && rightComponent}
    </PressableBox>
  );
}

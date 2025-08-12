import {ReactNode} from 'react';
import {GestureResponderEvent, Pressable} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {
  PressableBox,
  ProfileAvatar,
  Text,
  PressableBoxProps,
  ProfileProps,
  Box,
} from '@components';

type Props = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>;
  avatarProps?: Omit<Partial<ProfileProps>, 'imageUrl'>;
  RightComponent?: ReactNode;
} & PressableBoxProps;

export function ProfileUser({
  user,
  onPress,
  avatarProps,
  RightComponent,
  ...pressableBoxProps
}: Props) {
  const {navigate} = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }
    navigate('Profile', {userId: user.id});
  }

  return (
    <PressableBox
      flexDirection="row"
      alignItems="center"
      mb="s16"
      justifyContent="space-between"
      onPress={handleOnPress}
      {...pressableBoxProps}>
      <Box flexDirection="row" alignItems="center">
        <ProfileAvatar {...avatarProps} imageUrl={user.profileUrl} />
        <Text preset="paragraphMedium" semiBold ml="s12">
          {user.username}
        </Text>
      </Box>
      {RightComponent}
    </PressableBox>
  );
}

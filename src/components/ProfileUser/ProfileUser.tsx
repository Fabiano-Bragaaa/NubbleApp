import {GestureResponderEvent} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {
  PressableBox,
  PressableBoxProps,
  ProfileAvatar,
  Text,
} from '@components';

type ProfileUserProps = {
  user: Pick<User, 'id' | 'profileUrl' | 'username'>;
} & PressableBoxProps;

export function ProfileUser({
  user,
  onPress,
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
      mb="s16"
      {...presableBoxProps}>
      <ProfileAvatar imageUrl={user.profileUrl} />
      <Text preset="paragraphMedium" semiBold ml="s12">
        {user.username}
      </Text>
    </PressableBox>
  );
}

import {GestureResponderEvent, Pressable} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {
  PressableBox,
  ProfileAvatar,
  Text,
  PressableBoxProps,
} from '@components';

type Props = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>;
} & PressableBoxProps;

export function ProfileUser({user, onPress, ...pressableBoxProps}: Props) {
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
      onPress={handleOnPress}
      {...pressableBoxProps}>
      <ProfileAvatar imageUrl={user.profileUrl} />
      <Text preset="paragraphMedium" semiBold ml="s12">
        {user.username}
      </Text>
    </PressableBox>
  );
}

import {Pressable} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

type ProfileUserProps = {user: Pick<User, 'id' | 'profileUrl' | 'username'>};

export function ProfileUser({user}: ProfileUserProps) {
  const {navigate} = useNavigation();

  function navigateToProfile() {
    navigate('Profile', {userId: user.id});
  }

  return (
    <Pressable onPress={navigateToProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageUrl={user.profileUrl} />
        <Text preset="paragraphMedium" semiBold ml="s12">
          {user.username}
        </Text>
      </Box>
    </Pressable>
  );
}

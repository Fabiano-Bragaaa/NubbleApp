import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Button, Icon, ProfileAvatar, Text} from '@components';

import {ProfileMetadata} from './ProfileMetadata';

type ProfileHeaderProps = {
  user: User;
  isMyProfile?: boolean;
};

export function ProfileHeader({user, isMyProfile = false}: ProfileHeaderProps) {
  const {navigate} = useNavigation();
  if (!user) return null;

  return (
    <Box paddingHorizontal="s24">
      <Box alignItems="center">
        <ProfileAvatar
          imageUrl={user.profileUrl}
          size={100}
          borderRadius={40}
        />
        <Text preset="headingMedium" mt="s16">
          {user.fullName}
        </Text>
        <Text preset="paragraphLarge" mt="s4" color="gray1">
          @{user.username}
        </Text>
        <ProfileMetadata
          followersCount="105"
          followingCount="105"
          postsCount="105"
        />
        {isMyProfile && (
          <Box position="absolute" alignSelf="flex-end">
            <Icon
              name="settings"
              size={30}
              onPress={() => navigate('Settings')}
            />
          </Box>
        )}
      </Box>
      <Button title="Editar perfil" onPress={() => {}} marginVertical="s24" />
    </Box>
  );
}

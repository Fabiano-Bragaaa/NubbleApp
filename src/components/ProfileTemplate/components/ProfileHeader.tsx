import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {BackButton} from '../../BackButton/BackButton';
import {Box} from '../../Box/Box';
import {Button} from '../../Button/Button';
import {Icon} from '../../Icon/Icon';
import {ProfileAvatar} from '../../ProfileAvatar/ProfileAvatar';
import {Text} from '../../Text/Text';

import {ProfileMetadata} from './ProfileMetadata';

type ProfileHeaderProps = {
  user: User;
  isMyProfile?: boolean;
  publicationsCount: string;
};

export function ProfileHeader({
  user,
  isMyProfile = false,
  publicationsCount,
}: ProfileHeaderProps) {
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
          followersCount={user.meta.followersCount}
          followingCount={user.meta.followingCount}
          postsCount={publicationsCount}
        />
        {isMyProfile ? (
          <Box position="absolute" alignSelf="flex-end">
            <Icon
              name="settings"
              size={30}
              onPress={() => navigate('Settings')}
            />
          </Box>
        ) : (
          <Box position="absolute" alignSelf="flex-start">
            <BackButton />
          </Box>
        )}
      </Box>
      <Button title="Editar perfil" onPress={() => {}} marginVertical="s24" />
    </Box>
  );
}

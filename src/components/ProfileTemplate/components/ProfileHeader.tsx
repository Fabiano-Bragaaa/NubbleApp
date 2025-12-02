import {UserDetails} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {BackButton} from '../../BackButton/BackButton';
import {Box} from '../../Box/Box';
import {Icon} from '../../Icon/Icon';
import {ProfileAvatar} from '../../ProfileAvatar/ProfileAvatar';
import {Text} from '../../Text/Text';

import {ProfileButton} from './ProfileButton';
import {ProfileMetadata} from './ProfileMetadata';

type ProfileHeaderProps = {
  userDetails: UserDetails;
  isMyProfile?: boolean;
  publicationsCount: string;
};

export function ProfileHeader({
  userDetails,
  isMyProfile = false,
  publicationsCount,
}: ProfileHeaderProps) {
  const {navigate} = useNavigation();
  if (!userDetails) return null;

  return (
    <Box paddingHorizontal="s24">
      <Box alignItems="center">
        <ProfileAvatar
          imageUrl={userDetails.profileUrl}
          size={100}
          borderRadius={40}
        />
        <Text preset="headingMedium" mt="s16">
          {userDetails.fullName}
        </Text>
        <Text preset="paragraphLarge" mt="s4" color="gray1">
          @{userDetails.username}
        </Text>
        <ProfileMetadata
          followersCount={userDetails.meta.followersCount}
          followingCount={userDetails.meta.followingCount}
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
      <ProfileButton
        isMyProfile={isMyProfile}
        isFollowing={userDetails.isFollowing}
      />
    </Box>
  );
}

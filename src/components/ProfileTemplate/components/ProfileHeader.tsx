import {User} from '@domain';

import {Box} from '../../Box/Box';
import {ProfileAvatar} from '../../ProfileAvatar/ProfileAvatar';
import {Text} from '../../Text/Text';

import {ProfileMetadata} from './ProfileMetadata';

type ProfileHeaderProps = {
  user: User;
};

export function ProfileHeader({user}: ProfileHeaderProps) {
  if (!user) return null;

  return (
    <Box alignItems="center">
      <ProfileAvatar imageUrl={user.profileUrl} size={100} borderRadius={40} />
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
    </Box>
  );
}

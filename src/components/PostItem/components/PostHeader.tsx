import {Post} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageUrl={author.profileURL} />
      <Text preset="paragraphMedium" semiBold ml="s12">
        {author.userName}
      </Text>
    </Box>
  );
}

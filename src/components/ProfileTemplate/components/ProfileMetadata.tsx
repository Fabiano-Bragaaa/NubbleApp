import {useNavigation} from '@react-navigation/native';

import {Box, PressableBox} from '../../Box/Box';
import {Text} from '../../Text/Text';

type ProfileMetadataProps = {
  followersCount: string;
  followingCount: string;
  postsCount: string;
  isMyProfile: boolean;
};
export function ProfileMetadata({
  followersCount,
  followingCount,
  postsCount,
  isMyProfile,
}: ProfileMetadataProps) {
  const navigation = useNavigation();
  const items: ItemType[] = [
    {label: 'Publicações', value: postsCount},
    {
      label: 'Seguidores',
      value: followingCount,
      onPress: () => navigation.navigate('Followers'),
    },
    {
      label: 'Seguindo',
      value: followersCount,
      onPress: () => navigation.navigate('Following'),
    },
  ];
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      mt="s24"
      columnGap="s32">
      {items.map(item => (
        <Item isMyProfile={isMyProfile} key={item.label} {...item} />
      ))}
    </Box>
  );
}

type ItemType = {
  label: string;
  value: string;
  onPress?: () => void;
};
function Item({
  label,
  value,
  onPress,
  isMyProfile,
}: ItemType & {isMyProfile?: boolean}) {
  return (
    <PressableBox alignItems="center" onPress={onPress} disabled={!isMyProfile}>
      <Text preset="headingSmall">{value}</Text>
      <Text preset="paragraphSmall">{label}</Text>
    </PressableBox>
  );
}

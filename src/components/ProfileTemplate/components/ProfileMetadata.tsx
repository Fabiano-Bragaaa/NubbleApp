import {Box} from '../../Box/Box';
import {Text} from '../../Text/Text';

type ProfileMetadataProps = {
  followersCount: string;
  followingCount: string;
  postsCount: string;
};
export function ProfileMetadata({
  followersCount,
  followingCount,
  postsCount,
}: ProfileMetadataProps) {
  const items: ItemType[] = [
    {label: 'Publicações', value: postsCount},
    {label: 'Seguidores', value: followingCount},
    {label: 'Seguindo', value: followersCount},
  ];
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      mt="s24"
      columnGap="s32">
      {items.map(item => (
        <Item key={item.label} {...item} />
      ))}
    </Box>
  );
}

type ItemType = {
  label: string;
  value: string;
};
function Item({label, value}: ItemType) {
  return (
    <Box alignItems="center">
      <Text preset="headingSmall">{value}</Text>
      <Text preset="paragraphSmall">{label}</Text>
    </Box>
  );
}

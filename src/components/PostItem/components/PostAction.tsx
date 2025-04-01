import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostAction({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  function likePost() {
    //TODO
  }

  function navigateToComments() {
    //TODO
  }

  function favoritePost() {
    //TODO
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        icon={{default: 'heart', marked: 'heartFill'}}
        onPress={likePost}
        text={reactionCount}
      />
      <Item
        icon={{default: 'comment', marked: 'comment'}}
        onPress={likePost}
        text={commentCount}
      />
      <Item
        marked={false}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        onPress={likePost}
        text={favoriteCount}
      />
    </Box>
  );
}

type ItemProps = {
  onPress: () => void;
  marked?: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
};

function Item({onPress, icon, marked = false, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text ml="s4" preset="paragraphSmall" bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

import {Post} from '@domain';

import {Box, TouchableOpacityBox} from '../../Box/Box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

type Props = {
  post: Post;
  hideCommentAction?: boolean;
};

export function PostAction({post, hideCommentAction = false}: Props) {
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
        text={
          post.reactions.filter(reaction => reaction.emojiType === 'like')
            .length
        }
      />
      <Item
        icon={{default: 'comment', marked: 'comment'}}
        onPress={navigateToComments}
        disabled={hideCommentAction}
        text={post.commentCount}
      />
      <Item
        marked={false}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        onPress={likePost}
        text={post.favoriteCount}
      />
    </Box>
  );
}

type ItemProps = {
  onPress: () => void;
  marked?: boolean;
  text: number;
  disabled?: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
};

function Item({onPress, icon, marked = false, text, disabled}: ItemProps) {
  return (
    <TouchableOpacityBox
      disabled={disabled}
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

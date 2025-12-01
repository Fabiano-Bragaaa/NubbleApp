import {Post, useReactToPost} from '@domain';
import {QueryKeys} from '@infra';
import {useNavigation} from '@react-navigation/native';

import {useAppNavigation} from '@hooks';

import {Box, TouchableOpacityBox} from '../../Box/Box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

type Props = {
  post: Post;
  hideCommentAction?: boolean;
};

export function PostAction({post, hideCommentAction = false}: Props) {
  const navigate = useAppNavigation();
  const likeReaction = useReactToPost({post, postReaction: 'like'});
  const favoriteReaction = useReactToPost({
    post,
    postReaction: 'favorite',
    queryKeys: [QueryKeys.FavoriteList],
  });

  function navigateToComments() {
    navigate.toPostComment({
      postId: post.id,
      postAuthor: post.author.id,
    });
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked={likeReaction.hasReacted}
        icon={{default: 'heart', marked: 'heartFill'}}
        onPress={likeReaction.reactToPost}
        text={likeReaction.reactionCount}
      />
      <Item
        icon={{default: 'comment', marked: 'comment'}}
        onPress={navigateToComments}
        disabled={hideCommentAction}
        text={post.commentCount}
      />
      <Item
        marked={favoriteReaction.hasReacted}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        onPress={favoriteReaction.reactToPost}
        text={favoriteReaction.reactionCount}
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

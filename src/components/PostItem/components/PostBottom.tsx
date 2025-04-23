import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;

export function PostBottom({author, text, commentCount, id}: Props) {
  const navigation = useNavigation();
  const commentText = getCommentText(commentCount);

  function navigateToPostComment() {
    navigation.navigate('PostComment', {
      postId: id,
      postAuthor: author.id,
    });
  }

  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1" mb="s8">
        {text}
      </Text>
      {commentText && (
        <Text
          onPress={navigateToPostComment}
          preset="paragraphSmall"
          bold
          color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comenário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}

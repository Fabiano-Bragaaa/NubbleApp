import {Alert, Pressable} from 'react-native';

import {PostComment, usePostCommentRemove} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
}
export function PostCommentItem({postComment}: Props) {
  const {mutate} = usePostCommentRemove();

  function confirmRemove() {
    Alert.alert('Deseja excluir o comentario?', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable onLongPress={confirmRemove}>
      <Box flexDirection="row" mb="s16" alignItems="center">
        <ProfileAvatar imageUrl={postComment.author.profileURL} />
        <Box ml="s16" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.text} - {postComment.createAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}

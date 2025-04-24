import {Alert, Pressable} from 'react-native';

import {PostComment, postCommentService, usePostCommentRemove} from '@domain';
import {useToastService} from '@services';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
}
export function PostCommentItem({
  postComment,
  onRemoveComment,
  postAuthorId,
  userId,
}: Props) {
  const {showToast} = useToastService();
  const {mutate} = usePostCommentRemove({
    onSucess: () => {
      onRemoveComment();
      showToast({
        message: 'Comentario deletado',
        position: 'bottom',
      });
    },
  });

  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );

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
    <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
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

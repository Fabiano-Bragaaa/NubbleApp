import {useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

interface Props {
  postId: number;
}

export function PostCommentTextMessage({postId}: Props) {
  const [message, setMessage] = useState('');

  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();
    },
  });

  return (
    <TextMessage
      value={message}
      onChangeText={setMessage}
      onPressSend={createComment}
      placeholder="Adicione um comentário"
    />
  );
}

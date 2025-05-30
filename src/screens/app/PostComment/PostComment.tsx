import {FlatList, ListRenderItemInfo} from 'react-native';

import {
  PostComment as PostCommentProps,
  usePostCommentList,
  useUser,
} from '@domain';

import {Box, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components';

export function PostComment({route}: AppScreenProps<'PostComment'>) {
  const postId = route.params.postId;
  const postAuthorId = route.params.postAuthor;
  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);

  const {id} = useUser();
  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostCommentProps>) {
    return (
      <PostCommentItem
        postComment={item}
        userId={id}
        postAuthorId={postAuthorId}
        postId={postId}
      />
    );
  }

  return (
    <Screen title="Comentários" canGoBack flex={1}>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          contentContainerStyle={{paddingBottom: bottom}}
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          removeClippedSubviews={false}
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  );
}

import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment as PostCommentProps, usePostCommentList} from '@domain';
import {useAuthCredentials} from '@services';

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

  const {userId} = useAuthCredentials();
  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostCommentProps>) {
    return (
      <PostCommentItem
        postComment={item}
        userId={userId}
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

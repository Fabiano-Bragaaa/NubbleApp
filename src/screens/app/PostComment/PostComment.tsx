import {FlatList, ListRenderItemInfo} from 'react-native';

import {
  PostComment as PostCommentProps,
  usePostCommentList,
  usePostGetById,
} from '@domain';
import {useAuthCredentials} from '@services';

import {Box, PostItem, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components';

export function PostComment({route}: AppScreenProps<'PostComment'>) {
  const postId = route.params.postId;
  const showPost = route.params.showPost || false;
  const postAuthorId = route.params.postAuthor;
  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);
  const {post} = usePostGetById(postId, showPost);

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
    <Screen
      noPaddingHorizontal
      title={showPost ? 'Post' : 'Comentários'}
      canGoBack
      flex={1}>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          contentContainerStyle={{paddingBottom: bottom}}
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          ListHeaderComponent={
            post && <PostItem post={post} hideCommentAction />
          }
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

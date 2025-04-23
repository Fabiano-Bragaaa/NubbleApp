import {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {
  PostComment as PostCommentProps,
  usePostCommentCreate,
  usePostCommentList,
  useUser,
} from '@domain';

import {Box, Screen, TextMessage} from '@components';
import {AppScreenProps} from '@routes';

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components';

export function PostComment({route}: AppScreenProps<'PostComment'>) {
  const postId = route.params.postId;
  const postAuthorId = route.params.postAuthor;
  const {list, fetchNextPage, hasNextPage, refresh} =
    usePostCommentList(postId);

  const {id} = useUser();

  function renderItem({item}: ListRenderItemInfo<PostCommentProps>) {
    return (
      <PostCommentItem
        postComment={item}
        onRemoveComment={refresh}
        userId={id}
        postAuthorId={postAuthorId}
      />
    );
  }

  return (
    <Screen title="Comentários" canGoBack flex={1}>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
        />
        <PostCommentTextMessage postId={postId} onAddComment={refresh} />
      </Box>
    </Screen>
  );
}

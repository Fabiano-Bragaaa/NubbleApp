import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment as PostCommentProps, usePostCommentList} from '@domain';

import {Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {PostCommentBottom, PostCommentItem} from './components';

export function PostComment({route}: AppScreenProps<'PostComment'>) {
  const postId = route.params.postId;
  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostCommentProps>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen
      title="Comentários"
      canGoBack
      // eslint-disable-next-line react-native/no-inline-styles
      style={{marginBottom: bottom === 20 ? 40 : bottom}}>
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
    </Screen>
  );
}

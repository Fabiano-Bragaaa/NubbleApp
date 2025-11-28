import {act, renderHook, waitFor} from 'test-utils';

import {postReactionService} from '../../postReactionService';
import {useReactToPost} from '../useReactToPost';

import {
  postWithoutLike,
  postWithoutLikeResponse,
} from './mockedData/mockedPost';

describe('useReactToPost', () => {
  it('when react to post, should update the post reaction count', async () => {
    const response = postWithoutLikeResponse;
    jest
      .spyOn(postReactionService, 'reactToPost')
      .mockResolvedValueOnce(response);

    const {result} = renderHook(() =>
      useReactToPost({post: postWithoutLike, postReaction: 'like'}),
    );

    expect(result.current.hasReacted).toBe(false);
    expect(result.current.reactionCount).toBe(postWithoutLike.reactionCount);

    act(() => {
      result.current.reactToPost();
    });

    await waitFor(() => expect(result.current.hasReacted).toBe(true));

    await waitFor(() =>
      expect(result.current.reactionCount).toBe(
        postWithoutLike.reactionCount + 1,
      ),
    );
  });
});

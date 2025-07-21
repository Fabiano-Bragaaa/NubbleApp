import {renderScreen} from 'test-utils';

import {PostComment} from '../../PostComment';

describe('integration: PostComment', () => {
  test('When ADDING a comment the list is automatically updated', async () => {
    renderScreen(
      <PostComment
        navigation={{} as any}
        route={{
          name: 'PostComment',
          key: 'PostComment',
          params: {
            postId: 1,
            postAuthor: 1,
          },
        }}
      />,
    );
  });
});

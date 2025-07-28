import {server} from '@test';
import {renderScreen, screen} from 'test-utils';

import {PostComment} from '../../PostComment';

beforeAll(() => server.listen());

afterEach(() => server.restoreHandlers());

afterAll(() => server.close());
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

    const comment = await screen.findByText(/comentário aleatório/i);

    expect(comment).toBeTruthy();
  });
});

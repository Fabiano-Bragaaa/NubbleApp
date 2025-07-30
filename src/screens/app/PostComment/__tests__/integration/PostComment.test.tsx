import {authCredentialsStorage} from '@services';
import {server, mockedPostComment} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {PostComment} from '../../PostComment';

beforeAll(() => server.listen());

afterEach(() => server.restoreHandlers());

afterAll(() => server.close());
describe('integration: PostComment', () => {
  test('When ADDING a comment, the list is automatically updated', async () => {
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
    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i);

    fireEvent.changeText(inputText, 'novo comentario');

    fireEvent.press(screen.getByText(/enviar/i));

    const newComment = await screen.findByText(/novo comentario/i);

    expect(newComment).toBeTruthy();

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(2);
  });

  test('When DELETING a comment, the list is automatically updated and a toast message is displayed', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.mateusAuthCredentials);

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

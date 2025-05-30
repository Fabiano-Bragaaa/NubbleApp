import {Post} from '@domain';
import {fireEvent, render, screen} from 'test-utils';

import {PostBottom} from '../PostBottom';

const mockedPost: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 3,
  favoriteCount: 2,
  reactionCount: 3,
  text: 'this is the text (post description)',
  author: {
    id: 2,
    name: 'Fabiano',
    profileURL: 'https://example.com',
    userName: 'fabiano',
  },
};
const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});
describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('it does not show the comment link if it has no comment', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentário/);

    expect(commentLinkElement).toBeFalsy();
  });
  test('navigates to PostComment when pressing the comment link', () => {
    render(<PostBottom {...mockedPost} commentCount={4} />);

    const commentLinkElement = screen.getByText(/comentário/);

    fireEvent.press(commentLinkElement);

    expect(mockedNavigate).toHaveBeenCalledWith('PostComment', {
      postId: mockedPost.id,
      postAuthor: mockedPost.author.id,
    });
  });
  test('it show the comment link if it has a comment', () => {
    render(<PostBottom {...mockedPost} commentCount={1} />);

    const commentLinkElement = screen.queryByText(/comentário/);

    expect(commentLinkElement).toBeTruthy();
  });
});

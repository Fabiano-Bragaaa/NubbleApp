import {Post} from '@domain';
import {render, screen} from 'test-utils';

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

describe('<PostBottom />', () => {
  test('it does not show the comment link if it has no comment', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentário/i);

    expect(commentLinkElement).toBeFalsy();
  });
});

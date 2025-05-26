import {render} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  test('the component rendered', () => {
    render(<Button title="Button title" />);
  });
  test('the shows loading indicator', () => {
    render(<Button title="Button title" />);
  });
});

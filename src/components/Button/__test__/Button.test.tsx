import {render, fireEvent} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  test('calls the onPress function when is pressed', () => {
    const mockedOnPress = jest.fn();

    const {getByText} = render(
      <Button title="Button title" onPress={mockedOnPress} />,
    );

    const titleElement = getByText('button title', {exact: false});

    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });
});

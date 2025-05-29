import {fireEvent, render, screen} from 'test-utils';

import {PasswordInput, IconProps} from '@components';

describe('<PasswordInput />', () => {
  test('start with hidden password', () => {
    const mockedOnChange = jest.fn();

    render(
      <PasswordInput
        label="Password"
        placeholder="Password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(/password/i);
    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });

  test('when pressing the eye icon, it should show the password and change to the eye off icon', () => {
    const mockedOnChange = jest.fn();

    render(
      <PasswordInput
        label="Password"
        placeholder="Password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const eyeIcon: IconProps['name'] = 'eyeOn';
    fireEvent.press(screen.getByTestId(eyeIcon));

    const eyeOffIcon: IconProps['name'] = 'eyeOff';
    const eyeOffIconElement = screen.getByTestId(eyeOffIcon);

    const inputElement = screen.getByPlaceholderText(/password/i);

    expect(eyeOffIconElement).toBeTruthy();
    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});

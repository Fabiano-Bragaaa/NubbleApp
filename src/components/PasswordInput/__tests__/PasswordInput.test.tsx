import {fireEvent, render, screen} from 'test-utils';

import {IconProps} from '../../Icon/Icon';
import {PasswordInput} from '../PasswordInput';

describe('<PasswordInput />', () => {
  it('starts with hidden password', () => {
    const mockedOnChange = jest.fn();

    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(/password/i);
    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });

  it('when pressing the eye icon, it should the password, and change to eye off icon', () => {
    const mockedOnChange = jest.fn();

    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const eyeIcon: IconProps['name'] = 'eyeOn';

    fireEvent.press(screen.getByTestId(eyeIcon));

    const eyeoff: IconProps['name'] = 'eyeOff';
    const eyeOffIconElement = screen.getByTestId(eyeoff);

    expect(eyeOffIconElement).toBeTruthy();

    const inputElement = screen.getByPlaceholderText(/password/i);
    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});

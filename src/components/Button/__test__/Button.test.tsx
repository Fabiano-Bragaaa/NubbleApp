import {StyleSheet} from 'react-native';

import {ReactTestInstance} from 'react-test-renderer';
import {render, fireEvent, screen} from 'test-utils';

import {theme} from '@theme';

import {Button, ButtonProps} from '../Button';

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="Button title" {...props} />);

  const titleElement = screen.queryByText(/button title/i);
  const loadingElement = screen.queryByTestId('activity-indicator');
  const buttonElement = screen.getByTestId('button');

  return {
    titleElement,
    loadingElement,
    buttonElement,
  };
}

describe('<Button />', () => {
  test('calls the onPress function when it is pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement, loadingElement} = renderComponent({
      onPress: mockedOnPress,
    });

    fireEvent.press(titleElement as ReactTestInstance);

    expect(mockedOnPress).toHaveBeenCalled();
    expect(loadingElement).toBeFalsy();
  });
  test('does not call onPress function when it is disabled and it pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(titleElement as ReactTestInstance);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  test('the title should be gray if button is disabled', () => {
    const {titleElement} = renderComponent({disabled: true});

    const titleStyle = StyleSheet.flatten(titleElement?.props.style);

    expect(titleStyle.color).toEqual(theme.colors.gray2);
  });

  test('when button is loading: it show activity indicator, it hides button title and disables onPress function', () => {
    const mockedOnPress = jest.fn();
    const {buttonElement, loadingElement, titleElement} = renderComponent({
      loading: true,
      onPress: mockedOnPress,
    });

    fireEvent.press(buttonElement);

    expect(loadingElement).toBeTruthy();
    expect(titleElement).toBeFalsy();
    expect(mockedOnPress).not.toHaveBeenCalled();
  });
});

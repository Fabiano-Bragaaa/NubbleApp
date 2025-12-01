import {authCredentialsStorage} from '@services';
import {mockUtils, server, userMocked} from '@test';
import {act, fireEvent, renderScreen, screen} from 'test-utils';

import {AppStack} from '@routes';

jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
  jest.useFakeTimers();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
  jest.useRealTimers();
});

describe('Integration: Search', () => {
  test('Search Flow', async () => {
    //1) Render the screen
    renderScreen(<AppStack initialRouteName="Search" />);

    //2) Type 'mar' in the input

    const inputElement = screen.getByPlaceholderText(/digite sua busca/i);

    fireEvent.changeText(inputElement, 'mar');
    act(() => jest.runAllTimers());

    //3) Find the first user
    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    //4) Find the second user
    const user2 = screen.getByText(userMocked.user2.username);
    expect(user2).toBeTruthy();

    //5) Press the first user
    fireEvent.press(user1);

    //6) Find the full name of the first user
    const userFullName = await screen.findByText(userMocked.user1.full_name);
    expect(userFullName).toBeTruthy();

    //7) Press the back button
    const backButton = screen.getByTestId('back-button');
    fireEvent.press(backButton);

    //7) Find the first user
    const user1Again = await screen.findByText(userMocked.user1.username);
    expect(user1Again).toBeTruthy();

    //8) clean the search input
    fireEvent.changeText(inputElement, '');
    act(() => jest.runAllTimers());

    //9) Find the search history
    const searchHistory = await screen.findByText(/buscas recentes/i);
    expect(searchHistory).toBeTruthy();

    //10) Find the first user (pressed) in the search history
    const user1InSearchHistory = await screen.findByText(
      userMocked.user1.username,
    );
    expect(user1InSearchHistory).toBeTruthy();

    //11) the user 2 (not pressed) should not be in the search history
    const user2InSearchHistory = screen.queryByText(userMocked.user2.username);
    expect(user2InSearchHistory).toBeFalsy();

    //12) press the trash icon of the first user in the search history

    const trashIcon = await screen.findByTestId('trash');
    fireEvent.press(trashIcon);

    //13) the first user should not be in the search history
    const user1InSearchHistoryAgain = screen.queryByText(
      userMocked.user1.username,
    );
    expect(user1InSearchHistoryAgain).toBeFalsy();
  });
});

import {authCredentialsStorage} from '@services';
import {mockUtils} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {AppStack} from '@routes';

beforeAll(() => {
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
});

describe('Integration: Search', () => {
  test('Search Flow', () => {
    renderScreen(<AppStack initialRouteName="Search" />);

    const inputElement = screen.getByPlaceholderText(/digite sua busca/i);
    expect(inputElement).toBeTruthy();

    fireEvent.changeText(inputElement, 'mar');
  });
});

import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {renderHook} from 'test-utils';

import {theme} from '@theme';

import {useAppSafeArea} from '../useAppSafeArea';

jest.mock('react-native-safe-area-context');

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  test('when the safe area is less than minimum requirement, it returns the minimun requirement', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () =>
        ({
          top: 5,
          bottom: 5,
        } as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(theme.spacing.s20);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });
  test('when the safe area is greater than minimum requirement, it returns safe area', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () =>
        ({
          top: 30,
          bottom: 30,
        } as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(30);
    expect(result.current.bottom).toEqual(30);
  });
});

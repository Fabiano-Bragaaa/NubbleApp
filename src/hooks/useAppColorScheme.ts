import {useEffect} from 'react';
import {Appearance} from 'react-native';

import {useSettingsService} from '@services';

export function useAppColorScheme() {
  const {onThemeChange} = useSettingsService();

  useEffect(() => {
    onThemeChange(Appearance.getColorScheme() || 'light');
  }, [onThemeChange]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      onThemeChange(colorScheme);
    });
    return () => subscription.remove();
  }, [onThemeChange]);
}

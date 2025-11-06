import {Appearance, ColorSchemeName} from 'react-native';

import {AppTheme, ThemePreference} from './settingsType';

function onThemePreference(themePreference: ThemePreference): AppTheme {
  if (themePreference === 'system') {
    const currentColorScheme = Appearance.getColorScheme();
    return currentColorScheme ? currentColorScheme : 'light';
  }

  return themePreference;
}

function onSystemThemeChange(
  color: ColorSchemeName,
  themePreference: ThemePreference,
): AppTheme | null {
  if (themePreference === 'system') {
    return color ? color : 'light';
  }

  return null;
}

export const settingsService = {
  onThemePreference,
  onSystemThemeChange,
};

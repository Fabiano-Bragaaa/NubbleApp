import {Appearance, ColorSchemeName} from 'react-native';

import {AppColorSchema, ThemePreference} from './settingsType';

function onThemePreference(themePreference: ThemePreference): AppColorSchema {
  if (themePreference === 'system') {
    const currentColorScheme = Appearance.getColorScheme();
    return currentColorScheme ? currentColorScheme : 'light';
  }

  return themePreference;
}

function onSystemThemeChange(
  color: ColorSchemeName,
  themePreference: ThemePreference,
): AppColorSchema | null {
  if (themePreference === 'system') {
    return color ? color : 'light';
  }

  return null;
}

export const settingsService = {
  onThemePreference,
  onSystemThemeChange,
};

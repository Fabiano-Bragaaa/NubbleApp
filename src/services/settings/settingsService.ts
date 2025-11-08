import {Appearance, ColorSchemeName, Platform, StatusBar} from 'react-native';

import {colors} from '@theme';

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

function handleStatusBar(appColor: AppColorSchema) {
  if (appColor === 'light') {
    StatusBar.setBarStyle('dark-content', true);
  } else {
    StatusBar.setBarStyle('light-content', true);
  }

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(
      appColor === 'dark' ? colors.palette.grayBlack : colors.palette.grayWhite,
    );
  }
}

export const settingsService = {
  onThemePreference,
  onSystemThemeChange,
  handleStatusBar,
};

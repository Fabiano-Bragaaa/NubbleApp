import {ColorSchemeName} from 'react-native';
export type AppTheme = 'light' | 'dark';

export type ThemePreference = AppTheme | 'system';

export type SettingsStore = {
  appTheme: AppTheme;
  themePreference: ThemePreference;
  setAppTheme: (appTheme: AppTheme) => void;
  setThemePreference: (themePreference: ThemePreference) => void;
  onThemeChange: (color: ColorSchemeName) => void;
};

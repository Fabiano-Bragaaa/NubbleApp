import {ColorSchemeName} from 'react-native';
export type AppColorSchema = 'light' | 'dark';

export type ThemePreference = AppColorSchema | 'system';

export type SettingsStore = {
  showOnboarding: boolean;
  finishOnboarding: () => void;
  appColor: AppColorSchema;
  themePreference: ThemePreference;
  setAppTheme: (appTheme: AppColorSchema) => void;
  setThemePreference: (themePreference: ThemePreference) => void;
  onThemeChange: (color: ColorSchemeName) => void;
};

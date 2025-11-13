import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

import {zustandMMKVStorage} from '../storage';

import {settingsService} from './settingsService';
import {AppColorSchema, SettingsStore, ThemePreference} from './settingsType';

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      showOnboarding: true,
      finishOnboarding: () => set({showOnboarding: false}),
      appColor: 'light',
      themePreference: 'system',
      setAppTheme: theme => set({appColor: theme}),
      setThemePreference: newThemePreference => {
        const updatedAppTheme =
          settingsService.onThemePreference(newThemePreference);
        if (updatedAppTheme) {
          set({appColor: updatedAppTheme, themePreference: newThemePreference});
        }
      },
      onThemeChange: color => {
        const updatedAppTheme = settingsService.onSystemThemeChange(
          color,
          get().themePreference,
        );
        if (updatedAppTheme) {
          set({appColor: updatedAppTheme});
        }
      },
    }),
    {
      name: '@Settings',
      storage: createJSONStorage(() => zustandMMKVStorage),
    },
  ),
);

export function useAppColor(): AppColorSchema {
  const appTheme = useSettingsStore(state => state.appColor);
  return appTheme;
}

export function useThemePreference(): ThemePreference {
  const themePreference = useSettingsStore(state => state.themePreference);
  return themePreference;
}

export function useShowOnboarding(): boolean {
  const showOnboarding = useSettingsStore(state => state.showOnboarding);
  return showOnboarding;
}

export function useSettingsService(): Pick<
  SettingsStore,
  'setThemePreference' | 'onThemeChange' | 'finishOnboarding'
> {
  const setThemePreference = useSettingsStore(
    state => state.setThemePreference,
  );
  const onThemeChange = useSettingsStore(state => state.onThemeChange);
  const finishOnboarding = useSettingsStore(state => state.finishOnboarding);
  return {setThemePreference, onThemeChange, finishOnboarding};
}

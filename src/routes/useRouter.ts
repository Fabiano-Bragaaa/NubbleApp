import {useEffect} from 'react';

import {
  settingsService,
  useAuthCredentials,
  useShowOnboarding,
} from '@services';

export type Stacks = 'loading' | 'auth' | 'onboarding' | 'app';

export function useRouter(): Stacks {
  const showOnboarding = useShowOnboarding();
  const {authCredentials, isLoading} = useAuthCredentials();

  useEffect(() => {
    if (!isLoading) {
      settingsService.hideSplashScreen();
    }
  }, [isLoading]);

  if (isLoading) {
    return 'loading';
  }

  if (showOnboarding) {
    return 'onboarding';
  }

  if (authCredentials) {
    return 'app';
  }

  return 'auth';
}

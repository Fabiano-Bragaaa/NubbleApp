import {ImageSourcePropType} from 'react-native';

import {images} from '@assets';

export type OnBoardingPageItem = {
  title: string;
  description: string;
  image: {
    light: ImageSourcePropType;
    dark: ImageSourcePropType;
  };
};

const page1: OnBoardingPageItem = {
  title: 'Welcome to the app',
  description: 'This is the first onboarding page',
  image: {
    light: images.onboardingLight1,
    dark: images.onboardingDark1,
  },
};

export const onboardingPages: OnBoardingPageItem[] = [page1];

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

const page2: OnBoardingPageItem = {
  title: 'Compartilhe suas histórias com seus amigos próximos',
  description: 'Tenha sua linha do tempo personalizada',
  image: {
    light: images.onboardingLight2,
    dark: images.onboardingDark2,
  },
};

const page3: OnBoardingPageItem = {
  title: 'Interaja em tempo real com as pessoas',
  description: 'Curta, comente e favorite os conteúdos que você mais gostar',
  image: {
    light: images.onboardingLight3,
    dark: images.onboardingDark3,
  },
};

export const onboardingPages: OnBoardingPageItem[] = [page1, page2, page3];

import {ImageSourcePropType} from 'react-native';

import {images} from '@assets';

type titleHighlightProps = {
  title: string;
  highlight: boolean;
};

export type OnBoardingPageItem = {
  title: titleHighlightProps[];
  description: string;
  image: {
    light: ImageSourcePropType;
    dark: ImageSourcePropType;
  };
  index: number;
  total: number;
  isLast: boolean;
};

type OnBoardingPageItemWithoutMeta = Omit<
  OnBoardingPageItem,
  'index' | 'total' | 'isLast'
>;

const page1: OnBoardingPageItemWithoutMeta = {
  title: [
    {title: 'Uma rede social de', highlight: false},
    {title: ' conexões reais', highlight: true},
  ],
  description:
    'Fique por dentro do que acontece com as pessoas que você mais gosta ',
  image: {
    light: images.onboardingLight1,
    dark: images.onboardingDark1,
  },
};

const page2: OnBoardingPageItemWithoutMeta = {
  title: [
    {title: 'Compartilhe suas ', highlight: false},
    {title: ' histórias', highlight: true},
    {title: ' com seus amigos próximos', highlight: false},
  ],
  description: 'Tenha sua linha do tempo personalizada',
  image: {
    light: images.onboardingLight2,
    dark: images.onboardingDark2,
  },
};

const page3: OnBoardingPageItemWithoutMeta = {
  title: [
    {title: 'Interaja', highlight: true},
    {title: ' em tempo real com as pessoas', highlight: false},
  ],
  description: 'Curta, comente e favorite os conteúdos que você mais gostar',
  image: {
    light: images.onboardingLight3,
    dark: images.onboardingDark3,
  },
};

export const onboardingPages: OnBoardingPageItem[] = [page1, page2, page3].map(
  (page, index, array) => ({
    ...page,
    index,
    total: array.length,
    isLast: index === array.length - 1,
  }),
);

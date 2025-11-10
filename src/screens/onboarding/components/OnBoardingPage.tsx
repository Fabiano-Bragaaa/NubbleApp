import {ImageSourcePropType} from 'react-native';

import {images} from '@assets';

import {Box} from '@components';

import {onboardingPages} from '../onboardingData';

import {BottomMenu} from './BottomMenu';
import {Content} from './Content';
import {ImageHeader} from './ImageHeader';

export function OnBoardingPage() {
  const page = onboardingPages[0];
  return (
    <Box flex={1} bg="background">
      <Box flex={4}>
        <ImageHeader source={page.image} />
      </Box>
      <Box flex={5}>
        <Content {...page} />
      </Box>
      <Box flex={1}>
        <BottomMenu />
      </Box>
    </Box>
  );
}

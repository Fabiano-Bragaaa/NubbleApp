import {Dimensions} from 'react-native';

import {Box} from '@components';

import {OnBoardingPageItem} from '../onboardingData';

import {BottomMenu} from './BottomMenu';
import {Content} from './Content';
import {ImageHeader} from './ImageHeader';

export type OnBoardingPageProps = OnBoardingPageItem & {
  onPressNext: () => void;
  onPressSkip: () => void;
};

export function OnBoardingPage({
  title,
  description,
  image,
  onPressNext,
  onPressSkip,
  isLast,
}: OnBoardingPageProps) {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  return (
    <Box flex={1} bg="background" width={SCREEN_WIDTH}>
      <Box flex={4}>
        <ImageHeader source={image} />
      </Box>
      <Box flex={5} paddingHorizontal="s24">
        <Content title={title} description={description} />
      </Box>
      <Box flex={1}>
        <BottomMenu
          onPressNext={onPressNext}
          onPressSkip={onPressSkip}
          isLast={isLast}
        />
      </Box>
    </Box>
  );
}

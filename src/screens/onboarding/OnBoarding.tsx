import {Box} from '@components';
import {OnBoardingScreenProps} from '@routes';

import {OnBoardingPage} from './components/OnBoardingPage';

export function OnBoarding({}: OnBoardingScreenProps<'OnBoarding'>) {
  return (
    <Box flex={1}>
      <OnBoardingPage />
    </Box>
  );
}

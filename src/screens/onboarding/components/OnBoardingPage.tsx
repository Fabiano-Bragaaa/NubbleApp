import {Box, Text} from '@components';

import {ImageHeader} from './ImageHeader';

export function OnBoardingPage() {
  return (
    <Box flex={1} bg="background">
      <Box flex={4}>
        <ImageHeader />
      </Box>
    </Box>
  );
}

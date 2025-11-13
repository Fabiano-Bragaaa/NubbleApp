import {Box, ProgressIndicator, Text} from '@components';

import {OnBoardingPageItem} from '../onboardingData';

type ContentProps = Omit<OnBoardingPageItem, 'image' | 'isLast'>;

export function Content({title, description, total, index}: ContentProps) {
  return (
    <Box>
      <ProgressIndicator total={total} current={index} mb="s24" />
      <Text preset="headingLarge">
        {title.map(item => (
          <Text
            key={item.title}
            preset="headingLarge"
            color={item.highlight ? 'carrotSecondary' : 'backgroundContranst'}>
            {item.title}
          </Text>
        ))}
      </Text>
      <Text mt="s16" preset="paragraphLarge">
        {description}
      </Text>
    </Box>
  );
}

import {Box, Text} from '@components';

import {OnBoardingPageItem} from '../onboardingData';

type ContentProps = Omit<
  OnBoardingPageItem,
  'image' | 'isLast' | 'index' | 'total'
>;

export function Content({title, description}: ContentProps) {
  return (
    <Box>
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
      <Text preset="paragraphLarge">{description}</Text>
    </Box>
  );
}

import {useRef, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useSettingsService} from '@services';

import {Box} from '@components';
import {OnBoardingScreenProps} from '@routes';

import {OnBoardingPage} from './components/OnBoardingPage';
import {OnBoardingPageItem, onboardingPages} from './onboardingData';

export function OnBoarding({}: OnBoardingScreenProps<'OnBoarding'>) {
  const [pageIndex, setPageIndex] = useState(0);
  const flatListRef = useRef<FlatList<OnBoardingPageItem>>(null);

  const {finishOnboarding} = useSettingsService();

  function onPressNext() {
    const isLastPage = pageIndex === onboardingPages.length - 1;
    if (isLastPage) {
      finishOnboarding();
    } else {
      const nextPageIndex = pageIndex + 1;
      flatListRef.current?.scrollToIndex({
        index: nextPageIndex,
        animated: true,
      });
      setPageIndex(nextPageIndex);
    }
  }

  function renderItem({item}: ListRenderItemInfo<OnBoardingPageItem>) {
    return (
      <OnBoardingPage
        {...item}
        onPressNext={onPressNext}
        onPressSkip={finishOnboarding}
      />
    );
  }

  return (
    <Box flex={1} bg="background">
      <FlatList
        ref={flatListRef}
        data={onboardingPages}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
        scrollEnabled={false}
      />
    </Box>
  );
}

import {useRef, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Box} from '@components';
import {OnBoardingScreenProps} from '@routes';

import {OnBoardingPage} from './components/OnBoardingPage';
import {OnBoardingPageItem, onboardingPages} from './onboardingData';

export function OnBoarding({}: OnBoardingScreenProps<'OnBoarding'>) {
  const [pageIndex, setPageIndex] = useState(0);
  const flatListRef = useRef<FlatList<OnBoardingPageItem>>(null);

  function onPressNext() {
    const isLastPage = pageIndex === onboardingPages.length - 1;
    if (isLastPage) {
      onFinishOnboarding();
    } else {
      const nextPageIndex = pageIndex + 1;
      flatListRef.current?.scrollToIndex({
        index: nextPageIndex,
        animated: true,
      });
      setPageIndex(nextPageIndex);
    }
  }

  function onFinishOnboarding() {
    //todo
    console.log('onFinishOnboarding');
  }

  function renderItem({item}: ListRenderItemInfo<OnBoardingPageItem>) {
    return (
      <OnBoardingPage
        {...item}
        onPressNext={onPressNext}
        onPressSkip={onFinishOnboarding}
      />
    );
  }

  return (
    <Box flex={1}>
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

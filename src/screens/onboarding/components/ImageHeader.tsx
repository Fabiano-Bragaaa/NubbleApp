import {Dimensions, Image} from 'react-native';

import {useAppColor} from '@services';

import {OnBoardingPageItem} from '../onboardingData';

const SCREEN_WIDTH = Dimensions.get('screen').width;

type ImageHeaderProps = {
  source: OnBoardingPageItem['image'];
};

export function ImageHeader({source}: ImageHeaderProps) {
  const appColor = useAppColor();

  const imageSource = appColor === 'light' ? source.light : source.dark;
  return (
    <Image source={imageSource} style={{width: SCREEN_WIDTH, height: '100%'}} />
  );
}

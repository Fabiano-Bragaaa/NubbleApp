import {Box, Icon, PressableBox, Text} from '@components';

import {OnBoardingPageProps} from './OnBoardingPage';

type Props = Pick<OnBoardingPageProps, 'onPressNext' | 'onPressSkip'>;

export function BottomMenu({onPressNext, onPressSkip}: Props) {
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <PressableBox hitSlop={10} onPress={onPressSkip}>
        <Text>Pular</Text>
      </PressableBox>
      <PressableBox
        hitSlop={10}
        onPress={onPressNext}
        flexDirection="row"
        alignItems="center"
        gap="s4">
        <Text>Próximo</Text>
        <Icon name="arrowRight" />
      </PressableBox>
    </Box>
  );
}

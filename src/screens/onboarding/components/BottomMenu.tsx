import {Box, Icon, PressableBox, Text} from '@components';

import {OnBoardingPageProps} from './OnBoardingPage';

type Props = Pick<
  OnBoardingPageProps,
  'onPressNext' | 'onPressSkip' | 'isLast'
>;

export function BottomMenu({onPressNext, onPressSkip, isLast}: Props) {
  const nextText = isLast ? 'Começar' : 'Próximo';
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="s24">
      <PressableBox hitSlop={10} onPress={onPressSkip}>
        <Text color="gray2" semiBold>
          Pular
        </Text>
      </PressableBox>
      <PressableBox
        hitSlop={10}
        onPress={onPressNext}
        flexDirection="row"
        alignItems="center"
        gap="s4">
        <Text bold>{nextText}</Text>
        <Icon name="arrowRight" color="carrotSecondary" />
      </PressableBox>
    </Box>
  );
}

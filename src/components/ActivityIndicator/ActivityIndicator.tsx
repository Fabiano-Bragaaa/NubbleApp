import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import {ThemeColors} from '@theme';

import {useAppTheme} from '@hooks';

type Props = Omit<ActivityIndicatorProps, 'color'> & {
  color: ThemeColors;
};

export function ActivityIndicator({color, ...props}: Props) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} {...props} />;
}

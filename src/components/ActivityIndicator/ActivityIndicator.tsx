import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

type Props = Omit<ActivityIndicatorProps, 'color'> & {
  color?: ThemeColors;
};

export function ActivityIndicator({color = 'primary', ...props}: Props) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} {...props} />;
}

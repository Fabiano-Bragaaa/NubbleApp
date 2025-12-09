import {Dimensions} from 'react-native';

import {Toast, ToastType} from '@services';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../../Box/Box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface Props {
  toast: Toast;
  hideToast: () => void;
}

export function ToastContent({toast, hideToast}: Props) {
  const type: ToastType = toast.type || 'success';

  return (
    <Box {...$boxStyle} style={$shadowProps}>
      <Icon {...mapTypeToIcon[type]} size={40} />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast.message}
      </Text>
      {toast.action && (
        <Text
          ml="s8"
          color="market"
          preset="paragraphMedium"
          bold
          onPress={() => {
            toast?.action?.onPress();
            hideToast();
          }}>
          {toast.action.title}
        </Text>
      )}
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkRound',
  },
  error: {
    name: 'errorRound',
    color: 'error',
  },
};

const $boxStyle: BoxProps = {
  position: 'absolute',
  alignSelf: 'center',
  bg: 'background',
  flexDirection: 'row',
  alignItems: 'center',
  p: 's16',
  borderRadius: 's16',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};

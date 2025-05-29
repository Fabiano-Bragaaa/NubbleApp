import {
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  ActivityIndicator,
} from '@components';

import {buttonPresets} from './butonPresets';

export type ButtonPreset = 'primary' | 'outline';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      testID="button"
      disabled={disabled || loading}
      paddingHorizontal="s20"
      alignItems="center"
      justifyContent="center"
      height={50}
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

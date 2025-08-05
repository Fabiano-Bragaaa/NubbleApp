import {ReactNode, useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import {Box, BoxProps} from '@components';
import {useAppTheme} from '@hooks';

import {$fontFamily, $fontSizes, Text} from '../Text/Text';

export type TextInputProps = RNTextInputProps & {
  label?: string;
  errorMessage?: string;
  RightComponent?: ReactNode;
  LeftComponent?: ReactNode;
  boxProps?: BoxProps;
};

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  LeftComponent,
  boxProps,
  ...rNTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $inputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    p: 's16',
    borderRadius: 's12',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box flexGrow={1} flexShrink={1} {...boxProps}>
      <Pressable onPress={focusInput}>
        {label && (
          <Text preset="paragraphMedium" mb="s4">
            {label}
          </Text>
        )}

        <Box {...$inputContainer}>
          {LeftComponent && (
            <Box justifyContent="center" mr="s16">
              {LeftComponent}
            </Box>
          )}
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            {...rNTextInputProps}
            style={$textInputStyle}
          />
          {RightComponent && (
            <Box justifyContent="center" ml="s16">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" color="error" bold>
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

export const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

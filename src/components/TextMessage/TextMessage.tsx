import {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import {useAppTheme} from '@hooks';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';
import {$textInputStyle} from '../TextInput/TextInput';

interface TextMessageProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}

export function TextMessage({
  onPressSend,
  value,
  ...rNTextInputProps
}: TextMessageProps) {
  const inputRef = useRef<RNTextInput>(null);
  const {colors} = useAppTheme();

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Pressable disabled={sendIsDisabled} onPress={focusInput}>
      <Box
        paddingHorizontal="s16"
        bg="gray5"
        borderRadius="s12"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingVertical="s14"
        mt="s14">
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray1}
          {...rNTextInputProps}
          style={[$textInputStyle, {color: colors.grayBlack}]}
        />
        <Text
          onPress={() => onPressSend(value || '')}
          bold
          color={sendIsDisabled ? 'gray2' : 'primary'}>
          Enviar
        </Text>
      </Box>
    </Pressable>
  );
}

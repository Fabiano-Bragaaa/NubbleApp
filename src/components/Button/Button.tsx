import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';

import {Box, TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({
  title,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  return (
    <TouchableOpacityBox
      bg="buttonPrimary"
      paddingHorizontal="s20"
      alignItems="center"
      justifyContent="center"
      height={50}
      borderRadius="s16"
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold color="primaryContranst">
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

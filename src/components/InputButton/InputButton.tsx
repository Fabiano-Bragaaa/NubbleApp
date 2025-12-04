import {Box, PressableBox, PressableBoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

type InputButtonProps = {
  label: string;
  value: string;
} & PressableBoxProps;

export function InputButton({
  label,
  value,
  ...pressableBoxProps
}: InputButtonProps) {
  return (
    <PressableBox
      borderBottomColor="gray4"
      pb="s8"
      borderBottomWidth={1}
      {...pressableBoxProps}>
      <Text mb="s8">{label}</Text>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text color="gray2">{value}</Text>
        <Icon name="chevronRight" color="backgroundContranst" />
      </Box>
    </PressableBox>
  );
}

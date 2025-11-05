import {Box, PressableBox} from '../Box/Box';

export type RadioButtonProps = {
  isSelected: boolean;
  onPress: () => void;
};

export function RadioButton({isSelected, onPress}: RadioButtonProps) {
  return (
    <PressableBox
      hitSlop={10}
      onPress={onPress}
      height={20}
      width={20}
      alignItems="center"
      justifyContent="center"
      borderWidth={isSelected ? 2 : 1}
      borderColor={isSelected ? 'primary' : 'onBackgroundGray2'}
      borderRadius="s12">
      <Box
        backgroundColor={isSelected ? 'primary' : undefined}
        height={12}
        width={12}
        borderRadius="s12"
      />
    </PressableBox>
  );
}

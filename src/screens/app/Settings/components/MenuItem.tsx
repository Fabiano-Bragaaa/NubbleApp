import {Icon, Text, TouchableOpacityBox} from '@components';

export type MenuItemProps = {
  title: string;
  onPress: () => void;
};

export function MenuItem({title, onPress}: MenuItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingVertical="s16"
      onPress={onPress}>
      <Text semiBold>{title}</Text>
      <Icon name="chevronRight" />
    </TouchableOpacityBox>
  );
}

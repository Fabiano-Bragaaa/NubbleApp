import {useNavigation} from '@react-navigation/native';

import {TouchableOpacityBox} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

const ICON_SIZE = 20;

export type BackButtonProps = {
  showBackLabel?: boolean;
};

export function BackButton({showBackLabel}: BackButtonProps) {
  const {goBack} = useNavigation();
  return (
    <TouchableOpacityBox
      flexDirection="row"
      testID="back-button"
      alignItems="center"
      mr={showBackLabel ? 's10' : undefined}
      onPress={goBack}>
      <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
      {showBackLabel && (
        <Text preset="paragraphMedium" semiBold ml="s8">
          Voltar
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

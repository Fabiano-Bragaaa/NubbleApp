import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, TouchableOpacityBox} from '../../Box/Box';
import {Icon} from '../../Icon/Icon';
import {Text} from '../../Text/Text';
import {ScreenProps} from '../Screen';

type Props = Pick<ScreenProps, 'title' | 'canGoBack' | 'HeaderComponent'> &
  BoxProps;

const ICON_SIZE = 20;

export function ScreenHeader({
  canGoBack,
  title,
  HeaderComponent,
  ...boxProps
}: Props) {
  const {goBack} = useNavigation();

  const showBackLabel = !title && !HeaderComponent;

  if (!canGoBack && !title && !HeaderComponent) {
    return null;
  }

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s24"
      {...boxProps}>
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
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
      )}
      {HeaderComponent && HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenProps} from '../Screen';

type Props = Pick<ScreenProps, 'title' | 'canGoBack' | 'HeaderComponent'>;

const ICON_SIZE = 20;

export function ScreenHeader({canGoBack, title, HeaderComponent}: Props) {
  const {goBack} = useNavigation();

  const showBackLabel = !title && !HeaderComponent;

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s24">
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          mr="s10"
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

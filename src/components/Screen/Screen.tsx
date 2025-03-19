import {ReactNode} from 'react';
import {Box, TouchableOpacityBox, Icon, Text} from '@components';

import {KeyboardAvoidingView, Platform} from 'react-native';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {useAppTheme, useAppSafeArea} from '@hooks';
import {useNavigation} from '@react-navigation/native';

type Props = {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
};

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: Props) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  const {goBack} = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoBack && (
            <TouchableOpacityBox
              mb="s24"
              flexDirection="row"
              alignItems="center"
              onPress={goBack}>
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}

          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

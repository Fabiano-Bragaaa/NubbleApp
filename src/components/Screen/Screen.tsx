import {ReactNode} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box, BoxProps} from '@components';
import {useAppTheme, useAppSafeArea} from '@hooks';

import {ScreenHeader, ScrollViewContainer, ViewContainer} from './components';

export type ScreenProps = BoxProps & {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
};

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  title,
  style,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();

  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          <ScreenHeader canGoBack={canGoBack} title={title} />

          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

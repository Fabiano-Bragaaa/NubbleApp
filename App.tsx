import React, {useEffect} from 'react';

import {ToastProvider, useAppColor, settingsService} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {useAppColorScheme} from '@hooks';

import {Router} from './src/routes/routes';
import {AuthCredentialsProvider} from './src/services/authCredentials';
import {initializeStorage, MMKVStorage} from './src/services/storage';
import {darkTheme, theme} from './src/theme/theme';

initializeStorage(MMKVStorage);

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const appColor = useAppColor();

  console.log('appColor', appColor);

  useAppColorScheme();

  useEffect(() => {
    settingsService.handleStatusBar(appColor);
  }, [appColor]);

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={appColor === 'light' ? theme : darkTheme}>
            <ToastProvider>
              <Router />
              <Toast />
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;

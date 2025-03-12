import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

import {Login} from './src/screens/auth/Login/Login';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SignUp} from './src/screens/auth/SignUp/SignUp';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <Login /> */}
        <SignUp />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;

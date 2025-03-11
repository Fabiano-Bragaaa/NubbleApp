import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s24">
          <Text preset="paragraphLarge" bold>
            Ola
          </Text>
          <Button title="entrar" mb="s32" mt="s14" />
          <Button loading title="entrar" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

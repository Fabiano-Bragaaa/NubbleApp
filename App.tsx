import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Text} from './src/components/Text/Text';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
import {EyeOnIcon} from './src/assets/icons/EyeOnIcon';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s24">
          <Text preset="paragraphLarge" bold>
            Ola
          </Text>
          <Button disabled title="primary" mb="s32" mt="s14" />
          <Button title="Ouline" preset="outline" />
          <Icon name="bookmarkFill" color="carrotSecondary" size={50} />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

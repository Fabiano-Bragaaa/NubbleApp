import React from 'react';
import {Text} from './src/components/Text/Text';
import {SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" bold italic style={{color: 'red'}}>
        Ola
      </Text>
    </SafeAreaView>
  );
}

export default App;

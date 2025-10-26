import {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

const CAMERA_VIEW = Dimensions.get('screen').width;

const CONTROLS_HEIGHT = (Dimensions.get('window').height - CAMERA_VIEW) / 2;

export function Camera({navigation}: AppScreenProps<'Camera'>) {
  const {top} = useAppSafeArea();
  const [flashOn, setFlashOn] = useState(false);

  function toggleFlash() {
    setFlashOn(prev => !prev);
  }

  return (
    <Box flex={1}>
      <Box backgroundColor="grayWhite" style={StyleSheet.absoluteFillObject} />
      <Box flex={1} justifyContent="space-between">
        <Box {...$controlAreaTop} style={{paddingTop: top}}>
          <Icon
            size={20}
            color="grayWhite"
            name="arrowLeft"
            onPress={navigation.goBack}
          />
          <Icon
            size={20}
            color="grayWhite"
            name={flashOn ? 'flashOn' : 'flashOff'}
            onPress={toggleFlash}
          />
          <Box width={20} />
        </Box>
        <Box {...$controlAreaBottom}>
          <Icon name="cameraClick" size={80} color="grayWhite" />
        </Box>
      </Box>
    </Box>
  );
}

const $controlAreaTop: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROLS_HEIGHT,
  paddingHorizontal: 's24',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const $controlAreaBottom: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROLS_HEIGHT,
  alignItems: 'center',
  justifyContent: 'center',
};

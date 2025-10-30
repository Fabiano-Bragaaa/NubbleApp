import {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {
  Templates,
  useCameraDevice,
  useCameraFormat,
  Camera as VisionCamera,
} from 'react-native-vision-camera';

import {Box, BoxProps, Icon, PermissionManager} from '@components';
import {useAppSafeArea, useAppState} from '@hooks';
import {AppScreenProps} from '@routes';

const CAMERA_VIEW = Dimensions.get('screen').width;

const CONTROLS_HEIGHT = (Dimensions.get('window').height - CAMERA_VIEW) / 2;

export function Camera({navigation}: AppScreenProps<'Camera'>) {
  const {top} = useAppSafeArea();
  const [flashOn, setFlashOn] = useState(false);

  const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = isFocused && appState === 'active';

  const camera = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  const format = useCameraFormat(camera, Templates.Instagram);

  function toggleFlash() {
    setFlashOn(prev => !prev);
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o nubble acessar a câmera">
      <Box flex={1}>
        {camera && (
          <VisionCamera
            device={camera}
            format={format}
            isActive={isActive}
            style={StyleSheet.absoluteFillObject}
          />
        )}
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
    </PermissionManager>
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

import {ImageBackground, StyleSheet} from 'react-native';

import {Box, BoxProps, Button, Icon, Text} from '@components';

interface Props {
  imageUri: string;
  imageSize: number;
}

export function NewPostHeader({imageUri, imageSize}: Props) {
  return (
    <Box>
      <ImageBackground
        source={{uri: imageUri}}
        style={[
          {
            width: imageSize,
            height: imageSize,
          },
          styles.imageBackground,
        ]}>
        <Button title="escolher essa" mb="s24" preset="ghost" />
      </ImageBackground>
      <Box {...$optionsStyle}>
        <Text preset="headingSmall">Sua galeria</Text>
        <Icon name="camera" />
      </Box>
    </Box>
  );
}

const $optionsStyle: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  py: 's16',
};

const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

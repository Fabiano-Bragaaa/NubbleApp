import {Platform} from 'react-native';

import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {manipulateAsync, SaveFormat} from 'expo-image-manipulator';

import {ImageForUpload, PhotoListPaginated} from './multimediaType';

async function prepareImageForUpload(image: string): Promise<ImageForUpload> {
  const manipulatedImage = await manipulateAsync(prepareImageUri(image), [], {
    compress: 0.5,
    format: SaveFormat.JPEG,
  });
  return {
    uri: manipulatedImage.uri,
    type: 'image/jpeg',
    name: `image-${Date.now()}.jpeg`,
  };
}

async function getPhotos(cursor?: string): Promise<PhotoListPaginated> {
  const photoPage = await CameraRoll.getPhotos({first: 10, after: cursor});

  const photoList = photoPage.edges.map(edge => edge.node.image.uri);

  return {
    photoList,
    hasNextPage: photoPage.page_info.has_next_page,
    cursor: photoPage.page_info.end_cursor,
  };
}

function prepareImageUri(imageUri: string): string {
  if (Platform.OS !== 'android') {
    return imageUri;
  }
  if (imageUri.startsWith('file://')) {
    return imageUri;
  }
  return `file://${imageUri}`;
}

export const multimediaService = {
  prepareImageForUpload,
  getPhotos,
  prepareImageUri,
};

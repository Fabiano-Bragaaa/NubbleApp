import {CameraRoll} from '@react-native-camera-roll/camera-roll';

import {ImageForUpload, PhotoListPaginated} from './multimediaType';

function prepareImageForUpload(image: string): ImageForUpload {
  return {
    uri: image,
    type: 'image/jpeg',
    name: 'image.jpeg',
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

export const multimediaService = {
  prepareImageForUpload,
  getPhotos,
};

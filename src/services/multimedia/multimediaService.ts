import {ImageForUpload} from './multimediaType';

function prepareImageForUpload(image: string): ImageForUpload {
  return {
    uri: image,
    type: 'image/jpeg',
    name: 'image.jpeg',
  };
}

export const multimediaService = {
  prepareImageForUpload,
};

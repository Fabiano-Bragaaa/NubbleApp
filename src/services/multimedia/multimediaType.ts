export interface ImageForUpload {
  uri: string;
  type: 'image/jpeg' | 'image/png';
  name: string;
}

export type PhotoListPaginated = {
  photoList: string[];
  cursor?: string;
  hasNextPage: boolean;
};

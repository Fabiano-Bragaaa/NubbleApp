import {Permission, PermissionsAndroid, Platform} from 'react-native';

import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

async function check(name: PermissionName): Promise<PermissionStatus> {
  const permission = mapNameToPermission(name);
  if (permission) {
    const result = await PermissionsAndroid.check(permission);
    if (result) {
      return 'granted';
    } else {
      return 'denied';
    }
  }

  return 'unavailable';
}

async function request(name: PermissionName): Promise<PermissionStatus> {
  console.log('permission android');
  const permission = mapNameToPermission(name);
  if (permission) {
    const result = await PermissionsAndroid.request(permission);
    return result;
  }

  return 'unavailable';
}

function mapNameToPermission(name: PermissionName): Permission {
  switch (name) {
    case 'photoLibrary':
      if (Number(Platform.Version) >= 33) {
        return 'android.permission.READ_MEDIA_IMAGES';
      } else {
        return 'android.permission.READ_EXTERNAL_STORAGE';
      }

    case 'camera':
      return 'android.permission.CAMERA';
    default:
      throw new Error(`Invalid permission name: ${name}`);
  }
}

export const permissionService: PermissionService = {
  check,
  request,
};

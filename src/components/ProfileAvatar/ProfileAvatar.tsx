import {Image} from 'react-native';

import {useAppNavigation} from '@hooks';

import {PressableBox} from '../Box/Box';

export interface ProfileAvatarProps {
  imageUrl: string;

  /**@default 32 */
  size?: number;
  /**@default 14 */
  borderRadius?: number;
  authorId?: number;
}

export function ProfileAvatar({
  imageUrl,
  borderRadius = 14,
  size = 32,
  authorId,
}: ProfileAvatarProps) {
  const navigate = useAppNavigation();

  function handleOnPress() {
    if (authorId) {
      navigate.toProfile(authorId);
    }
  }

  return (
    <PressableBox disabled={!authorId} onPress={handleOnPress}>
      <Image
        source={{uri: imageUrl}}
        style={{width: size, height: size, borderRadius: borderRadius}}
      />
    </PressableBox>
  );
}

import {useFollowUser} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Button, ButtonProps} from '../../Button/Button';

type ButtonVariant = 'myProfile' | 'isFollowing' | 'isNotFollowing' | 'loading';

const buttonVariants: Record<
  ButtonVariant,
  Pick<ButtonProps, 'title' | 'preset' | 'loading'>
> = {
  myProfile: {
    title: 'Editar perfil',
    preset: 'gray',
  },
  isFollowing: {
    title: 'Mensagem',
    preset: 'primary',
  },
  isNotFollowing: {
    title: 'Seguir',
    preset: 'outline',
  },
  loading: {
    title: 'Carregando',
    preset: 'outline',
    loading: true,
  },
};

type ProfileButtonProps = {
  isMyProfile?: boolean;
  isFollowing?: boolean;
  userId: number;
};

export function ProfileButton({
  isMyProfile = false,
  isFollowing = false,
  userId,
}: ProfileButtonProps) {
  const {followUser, isLoading} = useFollowUser();
  const variant = getVariant({isFollowing, isMyProfile, isLoading});
  const buttonProps = buttonVariants[variant];
  const navigation = useNavigation();

  function handleOnPress() {
    switch (variant) {
      case 'isFollowing':
        // navigation.navigate('Chat', {
        //   userId,
        // });
        break;
      case 'isNotFollowing':
        followUser(userId);
        break;
      case 'myProfile':
        navigation.navigate('EditProfile', {
          userId,
        });
        break;
      case 'loading':
        break;
    }
  }

  return <Button my="s24" {...buttonProps} onPress={handleOnPress} />;
}

function getVariant({
  isFollowing,
  isMyProfile,
  isLoading,
}: Pick<ProfileButtonProps, 'isMyProfile' | 'isFollowing'> & {
  isLoading: boolean;
}): ButtonVariant {
  if (isLoading) return 'loading';
  if (isMyProfile) return 'myProfile';
  if (isFollowing) return 'isFollowing';
  return 'isNotFollowing';
}

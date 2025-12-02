import {useNavigation} from '@react-navigation/native';

import {Button, ButtonProps} from '../../Button/Button';

type ButtonVariant = 'myProfile' | 'isFollowing' | 'isNotFollowing';

const buttonVariants: Record<
  ButtonVariant,
  Pick<ButtonProps, 'title' | 'preset'>
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
};

type ProfileButtonProps = {
  isMyProfile?: boolean;
  isFollowing?: boolean;
};

export function ProfileButton({
  isMyProfile = false,
  isFollowing = false,
}: ProfileButtonProps) {
  const variant = getVariant({isFollowing, isMyProfile});
  const buttonProps = buttonVariants[variant];
  const navigation = useNavigation();

  function handleOnPress() {
    if (isMyProfile) {
      navigation.navigate('EditProfile');
    }
  }

  return <Button my="s24" {...buttonProps} onPress={handleOnPress} />;
}

function getVariant({
  isFollowing,
  isMyProfile,
}: Pick<ProfileButtonProps, 'isMyProfile' | 'isFollowing'>): ButtonVariant {
  if (isMyProfile) return 'myProfile';
  if (isFollowing) return 'isFollowing';
  return 'isNotFollowing';
}

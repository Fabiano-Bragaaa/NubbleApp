import {ProfileTemplate} from '@components';
import {AppScreenProps} from '@routes';

export function Profile({route}: AppScreenProps<'Profile'>) {
  const userId = route.params.userId;

  return <ProfileTemplate userId={userId} />;
}

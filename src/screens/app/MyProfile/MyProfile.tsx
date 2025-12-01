import {useAuthCredentials} from '@services';

import {ProfileTemplate} from '@components';
import {AppTabScreenProps} from '@routes';

export function MyProfile({}: AppTabScreenProps<'MyProfile'>) {
  const {userId} = useAuthCredentials();

  if (!userId) {
    return null;
  }

  return <ProfileTemplate userId={userId} />;
}

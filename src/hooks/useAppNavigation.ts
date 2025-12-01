import {useNavigation} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

export function useAppNavigation() {
  const {userId: authUserId} = useAuthCredentials();
  const navigation = useNavigation();
  function toProfile(userId: number) {
    if (authUserId === userId) {
      navigation.navigate('AppTabNavigator', {screen: 'MyProfile'});
    } else {
      navigation.navigate('Profile', {userId});
    }
  }

  const navigate = {toProfile};

  return navigate;
}

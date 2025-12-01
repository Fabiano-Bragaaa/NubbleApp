import {useNavigation} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {AppStackParamList} from '@routes';

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

  type Params = Omit<AppStackParamList['PostComment'], 'showPost'>;

  function toPostComment(params: Params) {
    navigation.navigate('PostComment', params);
  }

  function toPostDetail(params: Params) {
    navigation.navigate('PostComment', {
      ...params,
      showPost: true,
    });
  }

  const navigate = {toProfile, toPostComment, toPostDetail};

  return navigate;
}

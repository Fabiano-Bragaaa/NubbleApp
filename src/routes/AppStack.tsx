import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PostComment, Profile, Settings} from '@screens';

import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  Settings: undefined;
  PostComment: {
    postId: number;
    postAuthor: number;
  };
  Profile: {
    userId: number;
  };
};

const {Navigator, Screen} = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: false}}>
      <Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Screen name="Settings" component={Settings} />
      <Screen name="PostComment" component={PostComment} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}

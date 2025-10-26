import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Camera,
  PostComment,
  Profile,
  PublishPost,
  Search,
  Settings,
} from '@screens';

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
  Search: undefined;
  PublishPost: {
    imageUri: string;
  };
  Camera: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<AppStackParamList>();

interface AppStackProps {
  initialRouteName?: keyof AppStackParamList;
}

export function AppStack({
  initialRouteName = 'AppTabNavigator',
}: AppStackProps) {
  return (
    <Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: false}}
      initialRouteName={initialRouteName}>
      <Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Screen name="Settings" component={Settings} />
      <Screen name="PostComment" component={PostComment} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Search" component={Search} />
      <Screen name="PublishPost" component={PublishPost} />
      <Screen name="Camera" component={Camera} />
    </Navigator>
  );
}

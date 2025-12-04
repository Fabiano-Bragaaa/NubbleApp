import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Camera,
  DarkMode,
  EditEmail,
  EditPassword,
  EditProfile,
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
  DarkMode: undefined;
  PostComment: {
    postId: number;
    postAuthor: number;
    showPost?: boolean;
  };
  Profile: {
    userId: number;
  };
  Search: undefined;
  PublishPost: {
    imageUri: string;
  };
  Camera: undefined;
  EditEmail: {
    userId: number;
  };
  EditPassword: undefined;
  EditProfile: {
    userId: number;
  };
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
      <Screen name="DarkMode" component={DarkMode} />
      <Screen name="PostComment" component={PostComment} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Search" component={Search} />
      <Screen name="PublishPost" component={PublishPost} />
      <Screen name="Camera" component={Camera} />
      <Screen name="EditEmail" component={EditEmail} />
      <Screen name="EditPassword" component={EditPassword} />
      <Screen name="EditProfile" component={EditProfile} />
    </Navigator>
  );
}

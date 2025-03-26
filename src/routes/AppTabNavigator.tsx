import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Favorite, Home, MyProfile, NewPost} from '@screens';

import {AppTabBar} from './AppTabBar';

export type AppTabBottomTabParamList = {
  Home: undefined;
  NewPost: undefined;
  Favorite: undefined;
  MyProfile: undefined;
};

const {Navigator, Screen} =
  createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Navigator tabBar={renderTabBar} screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="NewPost" component={NewPost} />
      <Screen name="Favorite" component={Favorite} />
      <Screen name="MyProfile" component={MyProfile} />
    </Navigator>
  );
}

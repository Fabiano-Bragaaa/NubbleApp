import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/auth/Login/Login';
import {SignUp} from '../screens/auth/SignUp/SignUp';
import {Success} from '../screens/auth/Success/Success';
import {IconProps} from '../components/Icon/Icon';
import {ForgetPassword} from '../screens/auth/ForgetPassword/ForgetPassword';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Success: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgetPassword: undefined;
};

const {Screen, Navigator} = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
        <Screen name="Login" component={Login} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="Success" component={Success} />
        <Screen name="ForgetPassword" component={ForgetPassword} />
      </Navigator>
    </NavigationContainer>
  );
}

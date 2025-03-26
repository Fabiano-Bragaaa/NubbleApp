import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator<AuthStackParamList>();

import {IconProps} from '@components';
import {ForgetPassword, Login, SignUp, Success} from '@screens';

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Success: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgetPassword: undefined;
};

export function AuthStack() {
  return (
    <Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Success" component={Success} />
      <Screen name="ForgetPassword" component={ForgetPassword} />
    </Navigator>
  );
}

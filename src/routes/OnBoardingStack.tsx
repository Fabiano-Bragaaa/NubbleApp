import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {OnBoarding} from '@screens';

export type OnBoardingStackParamList = {
  OnBoarding: undefined;
};

const Stack = createNativeStackNavigator<OnBoardingStackParamList>();

export function OnBoardingStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
    </Stack.Navigator>
  );
}

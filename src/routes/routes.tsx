import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export function Router() {
  // const authenticaded = false;
  const {authCredentials} = useAuthCredentials();

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

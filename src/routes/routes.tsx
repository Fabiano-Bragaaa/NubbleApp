import {NavigationContainer} from '@react-navigation/native';

import {ActivityIndicator, Box} from '@components';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {OnBoardingStack} from './OnBoardingStack';
import {Stacks, useRouter} from './useRouter';

function LoadingScreen() {
  return (
    <Box flex={1} bg="background" justifyContent="center" alignItems="center">
      <ActivityIndicator size={'large'} />
    </Box>
  );
}

const stacks: Record<Stacks, React.ReactNode> = {
  loading: <LoadingScreen />,
  auth: <AuthStack />,
  onboarding: <OnBoardingStack />,
  app: <AppStack />,
};

export function Router() {
  const stack = useRouter();

  const Stack = stacks[stack];

  return <NavigationContainer>{Stack}</NavigationContainer>;
}

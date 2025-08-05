import {SimpleLogo} from '@brand';
import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();

  const {navigate} = useNavigation();

  function navigateToSearch() {
    navigate('Search');
  }

  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <SimpleLogo width={70} />
      <Box flexDirection="row" gap="s24">
        <Icon onPress={navigateToSearch} name="search" />
        <Icon name="bell" />
        <Icon name="comment" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
};

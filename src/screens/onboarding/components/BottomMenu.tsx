import {Box, Icon, Text} from '@components';

export function BottomMenu() {
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Text>Pular</Text>
      <Box flexDirection="row" alignItems="center" gap="s4">
        <Text>Próximo</Text>
        <Icon name="arrowRight" />
      </Box>
    </Box>
  );
}

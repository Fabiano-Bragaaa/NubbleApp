import {ActivityIndicator, Box, Button, Text} from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}

export function HomeEmpty({error, loading, refetch}: Props) {
  let component = (
    <Text bold preset="paragraphMedium">
      Não há publicações no feed
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold mb="s16" preset="paragraphMedium">
          Não foi possivel carregar o feed
        </Text>
        <Button title="recarregar" preset="outline" onPress={refetch} />
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}

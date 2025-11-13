import {Box, BoxProps} from '../Box/Box';

type ProgressIndicatorProps = BoxProps & {
  total: number;
  current: number;
};

export function ProgressIndicator({
  total,
  current,
  ...boxProps
}: ProgressIndicatorProps) {
  return (
    <Box flexDirection="row" alignItems="center" gap="s4" {...boxProps}>
      {Array.from({length: total}).map((_, index) => (
        <Box
          key={index}
          width={index === current ? 14 : 8}
          height={index === current ? 14 : 8}
          backgroundColor={index === current ? 'primary' : 'gray4'}
          borderRadius="s12"
          mr="s12"
        />
      ))}
    </Box>
  );
}

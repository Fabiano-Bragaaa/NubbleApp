import {ThemeProvider} from '@shopify/restyle';
import {render} from '@testing-library/react-native';

import {theme} from '@theme';

import {Button} from '../Button';

describe('<Button />', () => {
  it('the component rendered', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button title="button title" />
      </ThemeProvider>,
    );
  });

  it('should shows loading indicator', () => {

  });
});

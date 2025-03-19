import {ThemeColors} from '@theme';
import {ButtonPreset, TouchableOpacityBoxProps} from '@components';

type ButtonUI = {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
};

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContranst',
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray2',
    },
  },
};

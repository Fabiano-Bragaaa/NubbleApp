import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,

  ...textInput
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <TextInput
          value={value}
          onChangeText={onChange}
          errorMessage={error?.message}
          {...textInput}
        />
      )}
    />
  );
}

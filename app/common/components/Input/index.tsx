import React, { useMemo } from "react";
import { useController } from "react-hook-form";
import { TextInput } from "react-native-paper";
import inputStyles from "./styles";
import { KeyboardTypeOptions } from "react-native";

interface InputProps {
  name: string;
  label: string;
  control: any;
  style?: object;
  isSecureTextEntry?: boolean;
  testID?: string;
  keyboardType?: KeyboardTypeOptions;
  defaultValue?: string;
  multiline?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  control,
  style = undefined,
  isSecureTextEntry = false,
  testID = undefined,
  keyboardType = undefined,
  defaultValue = "",
  multiline = false,
  placeholder = "",
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: defaultValue,
  });
  const styles = useMemo(() => inputStyles(), []);
  const textInputStyle = style || styles.default_input_style;

  return (
    <TextInput
      testID={testID}
      value={field.value}
      onChangeText={field.onChange}
      style={textInputStyle}
      secureTextEntry={isSecureTextEntry}
      keyboardType={keyboardType}
      multiline={multiline}
      placeholder={placeholder}
      mode="outlined"
      label={label}
    />
  );
};
export default Input;

import { useState } from "react";
import { Text, TextInput, View } from "react-native";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (newValue: string) => void;
}

const InputText = ({ label, placeholder, value, onChangeText }: Props) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputText;

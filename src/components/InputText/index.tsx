import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (newValue: string) => void;
}

const InputText = ({ label, placeholder, value, onChangeText }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default InputText;

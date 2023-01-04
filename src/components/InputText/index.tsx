import { Text, TextInput, View } from "react-native";

interface Props {
  label: string;
  placeholder: string;
}

const InputText = ({ label, placeholder }: Props) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default InputText;

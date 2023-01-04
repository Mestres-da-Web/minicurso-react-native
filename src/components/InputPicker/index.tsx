import { Picker } from "@react-native-picker/picker";
import { Text, View } from "react-native";

interface Props {
  label: string;
  items: { label: string; value: string }[];
}

const InputPicker = ({ label, items }: Props) => {
  return (
    <View>
      <Text>{label}</Text>
      <Picker selectedValue={"java"}>
        {items.map((item) => {
          return <Picker.Item value={item.value} label={item.label} />;
        })}
      </Picker>
    </View>
  );
};

export default InputPicker;

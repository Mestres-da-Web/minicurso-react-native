import { Picker } from "@react-native-picker/picker";
import { Text, View } from "react-native";
import styles from "./styles";

interface Props {
  label: string;
  items: { label: string; value: string }[];
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
}

const InputPicker = ({ label, items, selectedValue, onValueChange }: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
        {items.map((item) => {
          return <Picker.Item value={item.value} label={item.label} />;
        })}
      </Picker>
    </View>
  );
};

export default InputPicker;

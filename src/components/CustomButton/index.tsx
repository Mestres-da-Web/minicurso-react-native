import { Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
}

const CustomButton = ({ title }: Props) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

import { View } from "react-native";
import { Text } from "react-native";
import { IProduct } from "../../../../types";

interface Props {
  data: IProduct[];
}

const ProductsList = ({ data }: Props) => {
  return (
    <View>
      {data.map((item) => (
        <Text>{item.name}</Text>
      ))}
    </View>
  );
};

export default ProductsList;

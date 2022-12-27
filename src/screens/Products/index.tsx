import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../../routes";

type Props = NativeStackScreenProps<RootStackParamList, "Products">;

const Products = ({ route, navigation }: Props) => {
  return (
    <View>
      <Text>Hello from Products</Text>
      <Button
        title="Navigate"
        onPress={() => {
          navigation.navigate("Details");
        }}
      />
    </View>
  );
};

export default Products;

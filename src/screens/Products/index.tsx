import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import BottomNav from "../../components/BottomNav";
import { RootStackParamList } from "../../routes";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Products">;

const Products = ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Hello from Products</Text>
      <Button
        title="Navigate"
        onPress={() => {
          navigation.navigate("Details");
        }}
      />
      <BottomNav />
    </View>
  );
};

export default Products;

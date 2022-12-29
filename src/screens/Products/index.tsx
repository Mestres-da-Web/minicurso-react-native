import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import BottomNav from "../../components/BottomNav";
import SubHeader from "../../components/SubHeader";
import { RootStackParamList } from "../../routes";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Products">;

const Products = ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <SubHeader />

      <BottomNav />
    </View>
  );
};

export default Products;

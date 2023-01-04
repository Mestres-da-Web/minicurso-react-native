import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import BottomNav from "../../components/BottomNav";
import CustomModal from "../../components/CustomModal";
import SubHeader from "../../components/SubHeader";
import { RootStackParamList } from "../../routes";
import styles from "./styles";

import AddProductForm from "./components/AddProductForm";

type Props = NativeStackScreenProps<RootStackParamList, "Products">;

const Products = ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <SubHeader />

      <CustomModal>
        <AddProductForm />
      </CustomModal>

      <BottomNav />
    </View>
  );
};

export default Products;

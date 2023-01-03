import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Modal, Text, View } from "react-native";
import BottomNav from "../../components/BottomNav";
import CustomModal from "../../components/CustomModal";
import SubHeader from "../../components/SubHeader";
import { RootStackParamList } from "../../routes";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Products">;

const Products = ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <SubHeader />

      <CustomModal>
        <View style={{ height: 200, backgroundColor: "red" }}>
          <Text style={{ color: "white" }}>Hello from children</Text>
        </View>
      </CustomModal>

      <BottomNav />
    </View>
  );
};

export default Products;

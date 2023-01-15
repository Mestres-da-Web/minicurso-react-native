import { Text, View } from "react-native";
import styles from "./styles";

const ProductsListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nome</Text>
      <Text style={styles.id}>#ID</Text>
      <Text style={styles.amount}>Estoque</Text>
      <Text style={styles.price}>Preço</Text>
      <Text style={styles.del}></Text>
    </View>
  );
};

export default ProductsListHeader;

import { FlatList, View } from "react-native";
import { Text } from "react-native";
import { IProduct } from "../../../../types";
import ProductsListHeader from "./components/Header";
import styles from "./styles";

interface Props {
  data: IProduct[];
}

const ProductsList = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.listItemContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.id}>{item._id}</Text>
              <Text style={styles.amount}>{item.amount}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          );
        }}
        ListHeaderComponent={ProductsListHeader}
      />
    </View>
  );
};

export default ProductsList;

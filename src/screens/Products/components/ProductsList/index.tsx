import { FlatList, View } from "react-native";
import { Text } from "react-native";
import DeleteIcon from "../../../../components/icons/Delete";
import theme from "../../../../global/theme";
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
              <View style={styles.nameContainer}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: theme.primary,
                  }}
                />
                <Text style={styles.name}>{item.name}</Text>
              </View>

              <Text style={styles.id} numberOfLines={1}>
                {item._id}
              </Text>

              <Text style={styles.amount}>{item.amount}</Text>
              <Text style={styles.price}>R${item.price}</Text>
              <DeleteIcon width={24} height={24} />
            </View>
          );
        }}
        ListHeaderComponent={ProductsListHeader}
      />
    </View>
  );
};

export default ProductsList;

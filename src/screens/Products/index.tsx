import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import BottomNav from "../../components/BottomNav";
import CustomModal from "../../components/CustomModal";
import SubHeader from "../../components/SubHeader";
import { RootStackParamList } from "../../routes";
import styles from "./styles";

import AddProductForm from "./components/AddProductForm";
import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductsList from "./components/ProductsList";
import EmptyList from "./components/EmptyList";
import { IProduct } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "Products">;

const Products = ({ route, navigation }: Props) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [isAdding, setIsAdding] = useState(false);

  const getData = async () => {
    const response = await api.get<IProduct[]>("/product");
    setTimeout(() => {
      setData(response.data);
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddItem = () => {
    setIsAdding(true);
  };

  const handleProductCreation = (newProduct: IProduct) => {
    setIsAdding(false);
    const newData = [...data, newProduct];
    setData(newData);
  };

  return (
    <View style={styles.container}>
      <SubHeader onAddPress={handleAddItem} />

      <CustomModal visible={isAdding}>
        <AddProductForm onProductCreation={handleProductCreation} />
      </CustomModal>

      {data.length > 0 ? <ProductsList data={data} /> : <EmptyList />}

      <BottomNav />
    </View>
  );
};

export default Products;

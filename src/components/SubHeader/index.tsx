import { useState } from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import CustomButton from "../CustomButton";
import styles from "./styles";

enum ActiveButton {
  ALL_PRODUCTS,
  DELETED_PRODUCTS,
}

interface ProductsSubHeaderButtonStyle {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const SubHeader = () => {
  const [activeButton, setActiveButton] = useState(ActiveButton.ALL_PRODUCTS);

  const allProductsButtonStyle: ProductsSubHeaderButtonStyle = {};
  const deletedProductsButtonStyle: ProductsSubHeaderButtonStyle = {};

  if (activeButton === ActiveButton.ALL_PRODUCTS) {
    allProductsButtonStyle.containerStyle = styles.buttonActiveContainer;
    allProductsButtonStyle.textStyle = styles.buttonActiveText;

    deletedProductsButtonStyle.containerStyle = styles.buttonInactiveContainer;
    deletedProductsButtonStyle.textStyle = styles.buttonInactiveText;
  }

  if (activeButton === ActiveButton.DELETED_PRODUCTS) {
    deletedProductsButtonStyle.containerStyle = styles.buttonActiveContainer;
    deletedProductsButtonStyle.textStyle = styles.buttonActiveText;

    allProductsButtonStyle.containerStyle = styles.buttonInactiveContainer;
    allProductsButtonStyle.textStyle = styles.buttonInactiveText;
  }

  const handleAllProductsPress = () => {
    setActiveButton(ActiveButton.ALL_PRODUCTS);
  };

  const handleDeletedProductsPress = () => {
    setActiveButton(ActiveButton.DELETED_PRODUCTS);
  };

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Produtos</Text>
        <Text style={styles.description}>
          Nesta página você verá os seus produtos cadastrados.
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <CustomButton
          title={"Todos os produtos"}
          containerStyle={allProductsButtonStyle.containerStyle}
          textStyle={allProductsButtonStyle.textStyle}
          onPress={handleAllProductsPress}
        />
        <CustomButton
          title={"Produtos excluídos"}
          containerStyle={deletedProductsButtonStyle.containerStyle}
          textStyle={deletedProductsButtonStyle.textStyle}
          onPress={handleDeletedProductsPress}
        />
        <View style={styles.horizontalLine} />
      </View>
    </>
  );
};

export default SubHeader;

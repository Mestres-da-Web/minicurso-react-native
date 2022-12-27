import React from "react";
import { View } from "react-native";
import MWIcon from "../icons/MW";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <MWIcon />
    </View>
  );
};

export default Header;

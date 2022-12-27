import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height * 0.08,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
});

export default styles;

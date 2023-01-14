import { StyleSheet } from "react-native";
import theme from "../../global/theme";

const styles = StyleSheet.create({
  container: {
    /* position: "absolute",
    bottom: 0, */
    padding: 20,
    width: "100%",
  },
  navContainer: {
    backgroundColor: theme.primary,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  icon: {
    marginHorizontal: 30,
  },
});

export default styles;

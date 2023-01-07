import { StyleSheet } from "react-native";
import theme from "../../global/theme";

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: theme.primary,
  },
  input: {
    fontSize: 16,
    borderColor: theme.borderColor,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default styles;

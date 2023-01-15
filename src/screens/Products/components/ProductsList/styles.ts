import { StyleSheet } from "react-native";
import theme from "../../../../global/theme";

export const listItemFlexValues = {
  name: 0.35,
  id: 0.2,
  amount: 0.2,
  price: 0.2,
  del: 0.05,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: theme.listBorder,
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  nameContainer: {
    flexDirection: "row",
    flex: listItemFlexValues.name,
    paddingLeft: 10,
  },
  name: { paddingLeft: 10 },
  id: { flex: listItemFlexValues.id },
  amount: { flex: listItemFlexValues.amount, textAlign: "center" },
  price: { flex: listItemFlexValues.price },
  del: { flex: listItemFlexValues.del },
});

export default styles;

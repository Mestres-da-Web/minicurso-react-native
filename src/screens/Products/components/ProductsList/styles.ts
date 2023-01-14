import { StyleSheet } from "react-native";

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
  },
  listItemContainer: {
    flexDirection: "row",
  },
  name: { flex: listItemFlexValues.name },
  id: { flex: listItemFlexValues.id },
  amount: { flex: listItemFlexValues.amount },
  price: { flex: listItemFlexValues.price },
  del: { flex: listItemFlexValues.del },
});

export default styles;

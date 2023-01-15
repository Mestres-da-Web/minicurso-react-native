import { StyleSheet } from "react-native";
import theme from "../../../../../../global/theme";
import { listItemFlexValues } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.listHeaderBackground,
    borderBottomWidth: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: theme.listBorder,
    padding: 10,
  },
  name: { flex: listItemFlexValues.name },
  id: { flex: listItemFlexValues.id },
  amount: { flex: listItemFlexValues.amount },
  price: { flex: listItemFlexValues.price },
  del: { flex: listItemFlexValues.del },
});

export default styles;

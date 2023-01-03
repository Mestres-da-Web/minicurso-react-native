import { StyleSheet } from "react-native";
import theme from "../../global/theme";

const styles = StyleSheet.create({
  titleContainer: {
    padding: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: theme.title,
  },
  description: {
    fontSize: 14,
    color: theme.description,
    marginTop: 14,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonActiveContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 4,
    borderBottomColor: theme.primary,
  },
  buttonActiveText: {
    fontSize: 14,
    fontWeight: "bold",
    color: theme.primary,
  },
  buttonInactiveContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonInactiveText: {
    fontSize: 14,
    color: theme.inactiveButtonText,
  },
  horizontalLine: {
    position: "absolute",
    height: 2,
    width: "100%",
    top: "90%",
    zIndex: -1,
    backgroundColor: theme.horizontalLine,
  },
});

export default styles;

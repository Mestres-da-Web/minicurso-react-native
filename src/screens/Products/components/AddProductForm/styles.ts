import { StyleSheet } from "react-native";
import theme from "../../../../global/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "80%",
    height: "80%",
    borderRadius: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollContainer: {
    paddingHorizontal: 30,
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  availableUnits: {
    fontSize: 14,
    color: theme.description,
    marginBottom: 10,
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: theme.primary,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 20,
  },
  buttonText: { color: "white", fontWeight: "bold" },
});

export default styles;

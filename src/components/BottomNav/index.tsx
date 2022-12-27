import { Text, View } from "react-native";
import HomeIcon from "../icons/Home";
import ListIcon from "../icons/List";
import styles from "./styles";

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <HomeIcon style={styles.icon} />
        <ListIcon style={styles.icon} />
      </View>
    </View>
  );
};

export default BottomNav;

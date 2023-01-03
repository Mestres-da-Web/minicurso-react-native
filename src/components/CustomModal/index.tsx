import { Modal, Text, View } from "react-native";
import styles from "./styles";

interface Props {
  children: JSX.Element;
}

const CustomModal = ({ children }: Props) => {
  return (
    <Modal transparent visible={true} animationType={"slide"}>
      <View style={styles.modalBackground}>{children}</View>
    </Modal>
  );
};

export default CustomModal;

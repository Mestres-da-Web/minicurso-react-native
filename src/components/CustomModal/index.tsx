import { Modal, Text, View } from "react-native";
import styles from "./styles";

interface Props {
  children: JSX.Element;
  visible: boolean;
}

const CustomModal = ({ children, visible }: Props) => {
  return (
    <Modal transparent visible={visible} animationType={"slide"}>
      <View style={styles.modalBackground}>{children}</View>
    </Modal>
  );
};

export default CustomModal;

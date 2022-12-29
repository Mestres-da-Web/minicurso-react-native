import { Text, View } from "react-native";
import CustomButton from "../CustomButton";

const SubHeader = () => {
  return (
    <>
      <View>
        <Text>Produtos</Text>
        <Text>Nesta página você verá os seus produtos cadastrados.</Text>
      </View>

      <View>
        <CustomButton title={"Todos os produtos"} />
        <CustomButton title={"Produtos excluídos"} />
      </View>
    </>
  );
};

export default SubHeader;

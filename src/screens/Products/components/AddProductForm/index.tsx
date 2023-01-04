import { Text, View } from "react-native";
import InputPicker from "../../../../components/InputPicker";
import InputText from "../../../../components/InputText";
import styles from "./styles";

const AddProductForm = () => {
  return (
    <View style={styles.container}>
      <Text>Cadastrar produto</Text>
      <Text>X</Text>
      <InputPicker
        label="Categoria"
        items={[
          { value: "js", label: "Javascript" },
          { value: "py", label: "Python" },
          { value: "java", label: "Java" },
        ]}
      />
      <InputText label="Marca" placeholder="Nome da marca" />
      <InputText label="Loja de venda" placeholder="Nome da loja de venda" />
      <InputText label="Nome do produto" placeholder="Nome do produto" />
      <InputText label="Preço" placeholder="Digite o preço" />
      <InputText label="Preço anterior" placeholder="EX: 1.998,99" />
      <InputText label="Descrição" placeholder="Descreva sobre o produto" />
      <InputText label="Estoque" placeholder="Nº unidades" />
      <Text>Unidades disponíveis</Text>
    </View>
  );
};

export default AddProductForm;

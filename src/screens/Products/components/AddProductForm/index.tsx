import { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import InputPicker from "../../../../components/InputPicker";
import InputText from "../../../../components/InputText";
import styles from "./styles";

interface IProduct {
  _id: string;
  name: string;
  description: string;
  amount: number;
  price: number;
  pastPrice: number;
  category: string;
  brand: string;
  store: string;
}

type IProductForm = Record<keyof Omit<IProduct, "_id">, string>;

const initialFormData: IProductForm = {
  name: "",
  description: "",
  amount: "",
  price: "",
  pastPrice: "",
  category: "",
  brand: "",
  store: "",
};

const AddProductForm = () => {
  const [formData, setFormData] = useState<IProductForm>(initialFormData);

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Cadastrar produto</Text>
        <Text>X</Text>
        <InputPicker
          label="Categoria"
          items={[
            { value: "js", label: "Javascript" },
            { value: "py", label: "Python" },
            { value: "java", label: "Java" },
          ]}
          selectedValue={formData.category}
          onValueChange={(newValue) => {
            const copy = { ...formData };
            copy.category = newValue;
            setFormData(copy);
          }}
        />
        <InputText
          label="Marca"
          placeholder="Nome da marca"
          value={formData.brand}
          onChangeText={(newValue) => {
            const copy = { ...formData };
            copy.brand = newValue;
            setFormData(copy);
          }}
        />
        <InputText
          label="Loja de venda"
          placeholder="Nome da loja de venda"
          value={formData.brand}
          onChangeText={(newValue) => {
            const copy = { ...formData };
            copy.brand = newValue;
            setFormData(copy);
          }}
        />
        <InputText
          label="Nome do produto"
          placeholder="Nome do produto"
          value={formData.name}
          onChangeText={(newValue) => {
            const copy = { ...formData };
            copy.name = newValue;
            setFormData(copy);
          }}
        />
        <InputText
          label="Preço"
          placeholder="Digite o preço"
          value={formData.price}
          onChangeText={(newValue) => {
            const copy = { ...formData };
            copy.price = newValue;
            setFormData(copy);
          }}
        />
        <InputText
          label="Preço anterior"
          placeholder="EX: 1.998,99"
          value={formData.pastPrice}
          onChangeText={(newValue) => {
            const copy = { ...formData };
            copy.pastPrice = newValue;
            setFormData(copy);
          }}
        />
        <InputText
          label="Descrição"
          placeholder="Descreva sobre o produto"
          value={formData.description}
          onChangeText={(newValue) => {
            const copy = { ...formData };
            copy.description = newValue;
            setFormData(copy);
          }}
        />
        <InputText
          label="Estoque"
          placeholder="Nº unidades"
          value={formData.amount}
          onChangeText={(newValue) => {
            const copy = { ...formData };
            copy.amount = newValue;
            setFormData(copy);
          }}
        />
        <Text>Unidades disponíveis</Text>

        <Button title="Adicionar produto" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
};

export default AddProductForm;

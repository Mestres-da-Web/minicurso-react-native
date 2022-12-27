import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../../routes";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const Details = ({ route, navigation }: Props) => {
  return (
    <View>
      <Text>Hello from Details</Text>
      <Button
        title="Navigate"
        onPress={() => {
          navigation.navigate("Products");
        }}
      />
    </View>
  );
};

export default Details;

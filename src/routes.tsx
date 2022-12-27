import { Text, View } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from "@react-navigation/native-stack";
import Products from "./screens/Products";
import Details from "./screens/Details";
import Header from "./components/Header";

export type RootStackParamList = {
  Products: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props: NativeStackHeaderProps) => <Header />,
      }}
    >
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Routes;

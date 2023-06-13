import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "./Home"
import { SinglePost } from "./SinglePost"
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SinglePost" component={SinglePost} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
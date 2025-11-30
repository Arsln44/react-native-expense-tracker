import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>(); // Stack nesnesini oluşturduk (tip güvenliği ile)

const AppNavigator = () => {
    return (
        // NavigationContainer : Tüm navigasyon yapısını saran konteyner (Spring ApplicationContext gibi)
        <NavigationContainer>
            <Stack.Navigator // Navigator: rotaları yöneten bileşen
            initialRouteName="Home"
            screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: '#3D0066' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
                headerTitleAlign: 'center',
            }}
            >
                <Stack.Screen // URL mapping gibi düşünebiliriz "Home" route'u HomeScreen bileşenine yönlendirir.
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Harcamalarım" }} // Ekran başlığı
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
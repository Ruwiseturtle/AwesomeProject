import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import TabNavigation from "./Screens/TabNavigation";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/inter-black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

 
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Register"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            // component={PostsScreen}
            component={TabNavigation}
            options={{
              headerShown: false,
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="CreatePostsScreen"
            component={TabNavigation}
            options={{
              title: "Створити публікацію",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={TabNavigation}
            options={{ title: "Профіль", headerTitleAlign: "center" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  containerTwo: {
    flex: 1,
    width: "100%",
    height: "100%",
    // alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FFFFFFC0",
  },
});

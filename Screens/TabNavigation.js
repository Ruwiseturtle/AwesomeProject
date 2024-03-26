import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import {  Image } from "react-native";

const Tab = createBottomTabNavigator();

function TabNavigation({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: true,
          headerTitle: "Публікації",
          tabBarLabel: "Публікації текст",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../assets/pngPosts.png")}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerShown: true,
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/pngPlus.png")}
              style={{ tintColor: "grey", width: 25, height: 25 }}
            ></Image>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          headerTitle: "Профіль",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../assets/pngUser.png")}></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;

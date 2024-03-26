import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { Image, View,Text, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

function TabNavigation({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: true,
          // headerTitle: "Публікації",
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 0, color: "red" }}>Публікації</Text>
          ),
          headerTitleAlign: "center",
          tabBarIcon: ({ color, focused, size }) => (
            <View
              style={[
                styles.containerIcon,
                { backgroundColor: focused ? "#FF6C00" : "white" },
              ]}
            >
              <Image
                source={require("../assets/pngPosts.png")}
                style={{
                  tintColor: focused ? "white" : "#212121",
                  width: 24,
                  height: 24,
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerShown: true,
          headerTitle: "Створити публікацію",
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 0, color: "red" }}>
              створити публікацію
            </Text>
          ),
          headerTitleAlign: "center",
          tabBarIcon: ({ color, focused, size }) => (
            <View
              style={[
                styles.containerIcon,
                { backgroundColor: focused ? "#FF6C00" : "white" },
              ]}
            >
              <Image
                source={require("../assets/pngPlus.png")}
                style={{
                  tintColor: focused ? "white" : "#212121",
                  width: 13,
                  height: 13,
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          headerTitle: "Профіль",
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 0, color: "red" }}>Профіль</Text>
          ),
          headerTitleAlign: "center",
          tabBarIcon: ({ color, focused, size }) => (
            <View
              style={[
                styles.containerIcon,
                { backgroundColor: focused ? "#FF6C00" : "white" },
              ]}
            >
              <Image
                source={require("../assets/pngUser.png")}
                style={{
                  tintColor: focused ? "white" : "#212121",
                  width: 24,
                  height: 24,
                }}
              ></Image>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  containerIcon: {
    width: 70,
    height: 40,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabNavigation;

import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

  // Функция для обработки нажатия на иконку выхода
  const handleLogout = () => {
   console.log('====================================');
   console.log('выход');
   console.log('====================================');
  };


const PostsScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Публікації</Text>
    </View>
  );
};

// Устанавливаем параметры навигации (например, заголовок)
PostsScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity onPress={() => handleLogout}>
      {/* Иконка выхода */}
      {/* <Ionicons
        name="log-out-outline"
        size={24}
        color="black"
        style={{ marginRight: 10 }}
      /> */}
      <View
        style={[
          styles.containerIcon,
          { backgroundColor: focused ? "#FF6C00" : "#E5E5E5" },
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
    </TouchableOpacity>
  ),
});

const styles = StyleSheet.create({
  containerIcon: {
    width: 70,
    height: 40,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PostsScreen;

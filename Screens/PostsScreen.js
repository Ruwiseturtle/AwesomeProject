import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderPostsScreen from "../Components/HeaderPostsScreen";

const PostsScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <HeaderPostsScreen />
      <Text>Публікації</Text>
     
    </View>
  );
};



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

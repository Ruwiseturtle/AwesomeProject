import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderPostsScreen from "../Components/HeaderPostsScreen";
import postsData from "../posts.json";

const PostsScreen = () => {
  const navigation = useNavigation();

  const goPersonalArea = () => {
    console.log('personal cabinet');
  }
  return (
    <View>
      <HeaderPostsScreen />
      <View style={styles.postsContainer}>
        {/* {контейнер для аватарки та імені користувача} */}
        <View style={styles.boxUserInfo}>
          <View style={styles.boxMainAvatar}>
            <Pressable style={styles.imageMainAvatar} onPress={goPersonalArea}>
              <Image
                source={require("../assets/images/testAvatar.jpg")}
                style={[styles.mainAvatar, { width: 60, height: 60 }]}
              />
            </Pressable>
            <View style={styles.boxInfoUser}>
              <Text
                style={styles.textAvatar}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Name Avatar biggg naaaaaaame
              </Text>
              <Text
                style={styles.textAvatar}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                name@email.com
              </Text>
            </View>
          </View>
        </View>
        <Text>xxxxxxxxxxxx</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    width: 171,
    height: 60,
    paddingTop: 32,
  },
  //контейнер з фото та імям юзера

  boxUserInfo: {
    width: 171,
    height: 60,
    marginBottom:32,
    // backgroundColor: "#B84747",
  },
  boxMainAvatar: {
    flexDirection: "row",
    width: 60,
    height: 60,
    backgroundColor: "green",
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  imageMainAvatar: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 16,
    marginRight: 8,
  },
  mainAvatar: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  boxInfoUser: {
    width: 103,
    justifyContent:'center',
  },
  textAvatar: {},
});

export default PostsScreen;

import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HeaderPostsScreen = () => {
  const navigation = useNavigation();

  const goLogin = () => {
    navigation.navigate("Login");
  };

  // компон
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Публікації</Text>
      <View style={styles.imageContainer}>
        <Pressable onPress={goLogin}>
          <Image
            source={require("../assets/pngExit.png")}
            style={styles.image}
          ></Image>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 88,
    backgroundColor: "##FFFFFF",
    paddingTop: 44,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10,
  },
  textHeader: {
    fontSize: 17,
    fontFamily: "Roboto",
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: -0.41,
    textAlign: "center",
    alignItems: "center",
  },
  imageContainer: {
    position: "absolute",
    right: 10,
    width: 24,
    height: 24,
  },
  image: {
    flex: 1, // Растягиваем изображение на всю доступную ширину контейнера
  },
});

export default HeaderPostsScreen;

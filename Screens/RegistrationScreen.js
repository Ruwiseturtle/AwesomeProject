import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export const RegistrationScreen = () => {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Реєстрація</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        value={text}
        placeholder={"Please type here…"}
      />
      <View style={styles.avatar}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center", // Вирівнювання тексту по центру по горизонталі
    backgroundColor: "white",
    position: "absolute",
    top: 263,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 92,
  },
  avatar: {
    position: "absolute",
    top: -60,
    width: 132,
    height: 120,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  input: {
    padding: 16,
    // marginTop: 32,
    width: "calc(100% - 32px)",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
});

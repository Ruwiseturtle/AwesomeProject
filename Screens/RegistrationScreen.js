import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export const RegistrationScreen = () => {
   const [login, setLogin] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  const handleLoginChange = (newText) => {
    setLogin(newText);
  };

  const handleEmailChange = (newText) => {
    setEmail(newText);
  };

  const handlePasswordChange = (newText) => {
    setPassword(newText);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Реєстрація</Text>
      </View>
      <TextInput
        style={[styles.input, { marginTop: 32 }]}
        onChangeText={handleLoginChange}
        value={login}
        placeholder={"Логін"}
        placeholderTextColor={"#BDBDBD"}
      />
      <TextInput
        style={[styles.input, { marginTop: 16 }]}
        onChangeText={handleEmailChange}
        value={email}
        placeholder={"Адреса електронної пошти"}
        placeholderTextColor={"#BDBDBD"}
      />
      <TextInput
        style={[styles.input, { marginTop: 16 }]}
        onChangeText={handlePasswordChange}
        value={password}
        placeholder={"Пароль"}
        placeholderTextColor={"#BDBDBD"}
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
    borderColor: "#E8E8E8",
    borderRadius: 5,
    backgroundColor: "#F6F6F6",
  },
});

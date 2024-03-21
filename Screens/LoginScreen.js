import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginChange = (newText) => {
    setLogin(newText);
  };

  const handleEmailChange = (newText) => {
    setEmail(newText);
  };

  const handlePasswordChange = (newText) => {
    setPassword(newText);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Увійти</Text>
      </View>
      <TextInput
        style={[styles.input, { marginTop: 16 }]}
        onChangeText={handleEmailChange}
        value={email}
        placeholder={"Адреса електронної пошти"}
        placeholderTextColor={"#BDBDBD"}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { marginTop: 16 }]}
          onChangeText={handlePasswordChange}
          value={password}
          placeholder={"Пароль"}
          placeholderTextColor={"#BDBDBD"}
          secureTextEntry={!showPassword}
        />
        <Pressable
          onPress={togglePasswordVisibility}
          style={styles.toggleButton}
        >
          <Text style={styles.toggleButtonText}>
            {showPassword ? "Приховати" : "Показати"}
          </Text>
        </Pressable>
      </View>
      <Pressable style={[styles.LoginButton, { marginTop: 43 }]}>
        <Text style={{ color: "white" }}>Увійти</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={styles.linkToRegister}>
          Немає акаунту? Зареєструватися
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  input: {
    padding: 16,
    width: "90%",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 5,
    backgroundColor: "#F6F6F6",
  },
  passwordContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  toggleButtonText: {
    color: "#1B4371",
  },
  toggleButton: {
    position: "absolute",
    right: 20,
    top: 25,
    padding: 8,
    backgroundColor: "#F6F6F6",
    borderRadius: 5,
    marginLeft: 8,
  },

  LoginButton: {
    width: "90%",
    height: 51,
    backgroundColor: "#FF6C00",
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  linkToRegister: {
    color: "#1B4371",
  },
});

export default LoginScreen;

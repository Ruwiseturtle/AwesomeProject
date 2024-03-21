import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";

const RegistrationScreen = ({ navigation }) => {
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

  const goLogin = () => {
    navigation.navigate("Login");
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
      <View style={styles.avatar}>
        <Pressable style={styles.buttonAddAvatar}>
          <Image source={require("../assets/add.png")} />
        </Pressable>
      </View>
      <Pressable style={[styles.registerButton, { marginTop: 43 }]}>
        <Text style={{ color: "white" }}>Зареєструватися</Text>
      </Pressable>
      <Pressable onPress={goLogin}>
        <Text style={styles.linkToAccount}>Вже є акаунт? Увійти</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center", // Вирівнювання тексту по центру по горизонталі
    // backgroundColor: "inherit",
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
  buttonAddAvatar: {
    position: "absolute",
    top: 81,
    right: -12.5,
    width: 25,
    height: 25,
  },
  registerButton: {
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
  linkToAccount: {
    color: "#1B4371",
  },
});

export default RegistrationScreen;

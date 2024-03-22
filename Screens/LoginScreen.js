import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    navigation.navigate("Register");
  };

  const registration = () => {
    console.log("====================================");
    console.log(email);
    console.log(password);
    console.log("====================================");
  };

  return (
    <ImageBackground
      style={styles.backgroundStyle}
      source={require("../assets/Photo-BG.jpeg")}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Увійти</Text>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            style={styles.box}
          >
            <TextInput
              style={[styles.input, { marginTop: 32 }]}
              onChangeText={handleEmailChange}
              // value={email}
              placeholder={"Адреса електронної пошти"}
              placeholderTextColor={"#BDBDBD"}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.input, { marginTop: 16 }]}
                onChangeText={handlePasswordChange}
                // value={password}
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
          </KeyboardAvoidingView>
          <Pressable
            style={[styles.registerButton, { marginTop: 43 }]}
            onPress={registration}
          >
            <Text style={{ color: "white" }}>Увійти</Text>
          </Pressable>
          <Pressable onPress={goLogin}>
            <Text style={styles.linkToAccount}>
              Немає акаунту? Зареєструватися
            </Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  keyboardContainerStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  container: {
    position: "relative",
    width: "100%",
    height: 489,
    alignItems: "center", // Вирівнювання тексту по центру по горизонталі
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  backgroundStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  box: {
    flex: 1,
    width: "100%",
    alignItems: "center",
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
    alignItems: "center",
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
    right: 25,
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
    marginBottom: 45,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 100,
  },
});

export default LoginScreen;

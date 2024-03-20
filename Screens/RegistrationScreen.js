import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const RegistrationScreen = () => {
  return (    
      <Text style={styles.text}>сторінка реєстрації</Text>   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Вирівнювання тексту по центру по горизонталі
    justifyContent: "center", // Вирівнювання тексту по центру по вертикалі
    position: "relative",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
  },
});

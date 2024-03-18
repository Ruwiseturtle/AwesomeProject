import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
    const [fontsLoaded] = useFonts({
      "Inter-Black": require("./assets/fonts/inter-black.ttf"),
    });
  
   if (!fontsLoaded) {
     return null;
   }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>bla bla bla bla</Text>
      <Text style={styles.text}>bla bla bla 123</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FFFFFFC0",
  },
});

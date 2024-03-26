import React from "react";
import { StyleSheet,View, Text } from "react-native";
import { gStyle } from "../styles/style";

const CreatePostsScreen = ({ navigation }) => {
  console.log("CreatePostsScreen");


  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Створити публікацію</Text>    
    </View>
  );
};


const styles = StyleSheet.create({
  buttonBack: {
    width: 200,
    height: 100,
    backgroundColor: 'red',
  },
});

export default CreatePostsScreen;

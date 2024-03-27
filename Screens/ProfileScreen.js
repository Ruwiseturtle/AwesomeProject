import React from "react";
import {  View, Text } from "react-native";
import { gStyle } from "../styles/style";

const ProfileScreen = ({ navigation }) => {
  console.log("ProfileScreen");

 
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Профіль</Text>
    </View>
  );
};

export default ProfileScreen;

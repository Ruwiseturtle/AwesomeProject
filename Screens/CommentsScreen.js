import React from "react";
import {  View, Text } from "react-native";
import { gStyle } from "../styles/style";

const CommentsScreen = () => {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Коментарі</Text>
    </View>
  );
};

export default CommentsScreen;

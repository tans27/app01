import { StyleSheet, TouchableOpacity, Dimensions,View,Text } from "react-native";

import styleGlobal from "../assets/css/globalStyles";
import React from "react"; 
const ButtonCustom = ({ onPress, title, style,icon,styleCustom,active }) => {
  return (
    <TouchableOpacity
      style={[
        styleGlobal.flexCenter,
        styles.button,
        style === "solid"
          ? styleGlobal.backgroundColorPrimary
          : styleGlobal.backgroundColorFourth,
          styleCustom,active ? {
            backgroundColor:"#f7c1a8"
          }:null]}
      onPress={onPress}
      disabled={active}
    >
      {icon &&
    <View style={{marginRight:10,}}>
    {icon}
    </View>}
      <Text
        style={[
          styles.text, 
          style === "solid" ? { color: "#fff" } : styleGlobal.colorPrimary,
        ]}
        >{title} </Text>
       
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 15,
    width: Dimensions.get("window").width - 40, 
    marginBottom: 15,  
  },
  text: {
    fontSize: 18,
    lineHeight: 21, 
    letterSpacing: 0.25,
    fontWeight:"600"
  },
});

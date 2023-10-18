import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity } from "react-native";
import styleGlobal from "../assets/css/globalStyles";
import logoGoogle from '../assets/images/logo-google.png'
import React from "react";

const SignInGoogle = () => {
  return (
    <TouchableOpacity style={[styleGlobal.flexCenter, styles.button]}>
        <Image source={logoGoogle} style={styles.image} />
      <Text style={[styles.text]}>Đăng nhập bằng Google</Text>
    </TouchableOpacity>
  );
};

export default SignInGoogle;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 15,
        width: Dimensions.get("window").width - 40, 
        marginVertical: 15, 
        borderColor:"#f1f1fa",
        borderWidth: 1,
      },
      text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
      },
      image:{
        width:25,
        height:25,
        marginRight: 10,
      },
});

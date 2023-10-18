import { StyleSheet, View, SafeAreaView, TouchableOpacity,Text } from "react-native";
import styleGlobal from "../../assets/css/globalStyles"; 
import React from "react";
import Input from "../../components/InputCustom";
import Button from "../../components/ButtonCustom";
import SignInGoogle from "../../components/SignInGoogle";
import CheckBox from "../../components/CheckBox";
import { useForm } from "react-hook-form";
import { validateEmail } from "../../extensions/validateEmail";
const SignUpScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (
      validateEmail(data.emailNew) &&
      data.nameNew.length > 3 &&
      data.passwordNew.length > 0
    ) {
      console.log(data);
      navigation.navigate("SendEmailSuccess", { email: data.emailNew });
    }
  };
  return (
    <SafeAreaView style={[styleGlobal.backgroundColorTheme, { flex: 1 }]}>
      <View style={[styles.container, { paddingTop: 100 }]}>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          name="emailNew"
          control={control}
        />
        <Input placeholder="Họ và tên" name="nameNew" control={control} />
        <Input
          placeholder="Mật khẩu"
          secureTextEntry={true}
          name="passwordNew"
          control={control}
        />
        <View style={[styles.checkboxContainer, styleGlobal.flexRow]}>
          <CheckBox />
          <Text
            style={[styles.text]}>
                <Text>{"Tôi đồng ý với điều khoản và điều kiện đưa ra trong"}</Text> 
                <Text
                  style={styleGlobal.colorPrimary}
                  >{" Điều khoản Dịch vụ và Chính sách Bảo mật"}</Text> 
                  </Text>
        </View>
        <Button
          onPress={() =>navigation.navigate("Nhập mã xác thực")}
          title="Đăng ký"
          style="solid"
        />
        <Text style={[styles.span]} text={"hoặc"} />
        <SignInGoogle />
        <View style={styleGlobal.flexCenter}>
          <Text
            style={[styles.span, { fontWeight: "400" }]}
            >{"Bạn đã có tài khoản?"}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Đăng nhập")}>
            <Text
              style={[
                styleGlobal.colorPrimary,
                { textDecorationLine: "underline", marginLeft: 5 },
              ]}
              text={"Login"} >{"Đăng nhập"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  span: {
    textAlign: "center",
    color: "#91919f",
  },
  checkboxContainer: {
    marginBottom: 15,
  },
});

import {
  StyleSheet,
  ActivityIndicator,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import styleGlobal from "../../assets/css/globalStyles";
import React, { useState } from "react";
import Input from "../../components/InputCustom";
import Button from "../../components/ButtonCustom";
import { useForm } from "react-hook-form";
import { validateEmail } from "../../extensions/validateEmail";
import { useUserActions } from "../../hooks/useUserActionsContext";
import axios from "axios";
const FormData = global.FormData; 
const SignInScreen = ({ navigation }) => {
  // const [db] = useState("hr_diligo");
  // const [login, setLogin] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const bodyFormData = new FormData();
  bodyFormData.append("db", "hrm_diligo");
  bodyFormData.append("login", "phattrienungdung5@diligo.vn");
  bodyFormData.append("password", "123");

  const handleLogin = () => {
    setError(null);
    setLoading(true);
  };
  const { control, handleSubmit } = useForm();
  const { login } = useUserActions();
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    // if (
    //   !validateEmail(data.emailUser) &&
    //   data.emailUser === "lukim" &&
    //   data.passwordUser === "lukim"
    // ) {
    //   // retrieveToken()
    //   setLoading(true);
    //   setTimeout(async () => {
    //     await login(data);
    //     setLoading(false);
    //   }, 1000);
    // } else {
    //   setLoading(true);
    //   setTimeout(async () => {
    //     setLoading(false);
    //   }, 1000);
    // axios.post("http://hrm.diligo.vn/api/auth/token", bodyFormData, {
    // }
    axios({
      url: "http://hrm.diligo.vn/api/auth/token",
      method: "POST",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((resp) => console.log(resp.data.response))
      .catch((error) => console.log("SignIn",error));
  };
  return (
    <SafeAreaView style={[styleGlobal.backgroundColorTheme, { flex: 1 }]}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#e66426" />
        </View>
      ) : (
        <View style={[styles.container, { paddingTop: 100 }]}>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            name="emailUser"
            control={control}
          />
          <Input
            placeholder="Mật khẩu"
            secureTextEntry={true}
            name="passwordUser"
            control={control}
          />
          <Button
            onPress={handleSubmit(onSubmit)}
            title="Đăng nhập"
            style="solid"
          />
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Lấy lại mật khẩu")}
            >
              <Text style={[styles.title, styleGlobal.colorPrimary]}>
                Quên mật khẩu?
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styleGlobal.flexCenter}>
          <Text style={[styles.span,styleGlobal.font500]}>Bạn chưa có tài khoản?</Text> 
          <TouchableOpacity onPress={() => navigation.navigate("Đăng ký tài khoản")}>
            <Text
              style={[
                styleGlobal.colorPrimary,
                styleGlobal.font500,
                { textDecorationLine: "underline", marginLeft: 5 },
              ]} >Đăng ký</Text>
          </TouchableOpacity>
        </View> */}
        </View>
      )}
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 25,
  },
});

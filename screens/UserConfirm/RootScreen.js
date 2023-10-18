import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import IntroScreen from "./IntroScreen";
import SignInScreen from "./SignInScreen";
// import SignUpScreen from "./SignUpScreen";
import ForgotPassword from "./ForgotPassword";
import SendEmailSuccess from "./SendEmailSuccess";
import Verification from "./Verification";
const Stack = createNativeStackNavigator();

const RootScreen = ({ navigation }) => {
  const screenRoute = [
    {
      name: "IntroScreen",
      component: IntroScreen,
    },
    {
      name: "Đăng nhập",
      component: SignInScreen,
    },
    // {
    //   name: "Đăng ký tài khoản",
    //   component: SignUpScreen,
    // },
    {
      name: "Lấy lại mật khẩu",
      component: ForgotPassword,
    },
    {
      name: "SendEmailSuccess",
      component: SendEmailSuccess,
    },
    {
      name: "Nhập mã xác thực",
      component: Verification,
    },
  ];
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screenRoute.map((ele, index) => {
          return (
            <Stack.Screen
              key={index}
              name={ele.name}
              component={ele.component}
              options={({ navigation }) => ({
                headerShown:
                  ele.name === "IntroScreen" || ele.name === "SendEmailSuccess"
                    ? false
                    : true,
                title: ele.name,
                headerStyle: {
                  backgroundColor: "#fff",
                },
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={25} color="#000" />
                  </TouchableOpacity>
                ),
                headerTintColor: "#000",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              })}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootScreen;

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import styleGlobal from "../../assets/css/globalStyles";
import Input from "../../components/InputCustom";
import Button from "../../components/ButtonCustom";
const Feedback = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    //   if(validateEmail(data.emailReset)) {
    //     navigation.navigate("SendEmailSuccess",{email:data.emailReset})
    //   }
    if (data.title.length > 0 && data.description.length > 0) {
      console.log(data);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? "60" : "height"}
        style={[
          styles.container,
          {
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: Dimensions.get("window").height,
            backgroundColor: "#fff",
          },
        ]}
      >
        <View
          style={[
            styleGlobal.p_2,
            {
              flex: 1,
              backgroundColor: "#fff", 
            },
          ]}
        >
          <View style={{width: Dimensions.get("window").width - 40}}>
            <Input placeholder="Tiêu đề" name="title" control={control} />
            <Input
              placeholder="Mô tả chi tiết"
              name="description"
              multiline={true}
              numberOfLines={5}
              control={control}
            />
          </View>
          <View style={{position: 'absolute',bottom: 0, left:20,}}>
            <Button
              onPress={handleSubmit(onSubmit)}
              title="Gửi"
              style="solid"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Feedback;

const styles = StyleSheet.create({});

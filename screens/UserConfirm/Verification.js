import {
  StyleSheet,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Dimensions, 
  Alert,
  Text
} from "react-native";
import React from "react";
import CountDown from "react-native-countdown-component";
import Button from "../../components/ButtonCustom";
import stylesGlobal from "../../assets/css/globalStyles"; 
const Verification = ({navigation}) => {
  const [text, setText] = React.useState(""); 
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
       behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? "50" : "height"}   
        style={[
          stylesGlobal.backgroundColorPrimary,
          {
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "flex-end",
          },
        ]}
      >
        <View style={styles.inner}>
        <View style={{ paddingHorizontal: 20, marginBottom: 40 }}>
          <Text
            style={[ styles.title]}
            text={"Nhập\nMã xác thực"}
          >{"Nhập\nMã xác thực"}</Text>
          <View style={{ position: "relative", marginBottom: 40 }}>
            <View style={[stylesGlobal.flexStart, styles.containerDot]}>
              <View style={[stylesGlobal.flexCenter, styles.boxDot]}>
                {text.charAt(0) !== "" ? (
                  <Text
                    style={[{fontWeight:"700"}, styles.textInput]}
                    text={text.charAt(0)}
                  >{text.charAt(0)}</Text>
                ) : (
                  <View style={styles.dot}></View>
                )}
              </View>
              <View style={[stylesGlobal.flexCenter, styles.boxDot]}>
                {text.charAt(1) !== "" ? (
                  <Text
                    style={[{fontWeight:"700"}, styles.textInput]}
                    text={text.charAt(1)}
                  >{text.charAt(1)}</Text>
                ) : (
                  <View style={styles.dot}></View>
                )}
              </View>
              <View style={[stylesGlobal.flexCenter, styles.boxDot]}>
                {text.charAt(2) !== "" ? (
                  <Text
                    style={[{fontWeight:"700"}, styles.textInput]}
                    text={text.charAt(2)}
                  >{text.charAt(2)}</Text>
                ) : (
                  <View style={styles.dot}></View>
                )}
              </View>
              <View style={[stylesGlobal.flexCenter, styles.boxDot]}>
                {text.charAt(3) !== "" ? (
                  <Text
                    style={[{fontWeight:"700"}, styles.textInput]}
                    text={text.charAt(3)}
                  >{text.charAt(3)}</Text>
                ) : (
                  <View style={styles.dot}></View>
                )}
              </View>
              <View style={[stylesGlobal.flexCenter, styles.boxDot]}>
                {text.charAt(4) !== "" ? (
                  <Text
                    style={[{fontWeight:"700"}, styles.textInput]}
                    text={text.charAt(4)}
                  >{text.charAt(4)}</Text>
                ) : (
                  <View style={styles.dot}></View>
                )}
              </View>
              <View style={[stylesGlobal.flexCenter, styles.boxDot]}>
                {text.charAt(5) !== "" ? (
                  <Text
                    style={[{fontWeight:"700"}, styles.textInput]}
                    text={text.charAt(5)}
                  >{text.charAt(5)}</Text>
                ) : (
                  <View style={styles.dot}></View>
                )}
              </View>
              <TextInput
                style={styles.input}
                placeholder="!"
                onChangeText={(newText) => setText(newText)}
                keyboardType={"numeric"}
                maxLength={6} 
              />
            </View>
          </View>
          <View style={[stylesGlobal.flexStart]}>
            <CountDown
              until={300}
              onFinish={() => alert("finished")}
              onPress={() => alert("hello")}
              digitStyle={{ width: 22 }}
              digitTxtStyle={{
                color: "#e66426",
                fontSize: 18,
                fontWeight: "600",
              }}
              timeLabels={{ m: null, s: null }}
              showSeparator
              timeToShow={["M", "S"]}
              separatorStyle={{ color: "#e66426" }}
            />
          </View>
          <Text
            style={[
              styles.note, 
              { marginBottom: 20, marginTop: 8,fontWeight:"700" },
            ]}>
              <>
                <Text text={"Mã xác thực đã được gửI đến email "}>{"Mã xác thực đã được gửI đến email "}</Text>
                <Text
                  style={stylesGlobal.colorPrimary}
                  text={"brajaoma*****@gmail.com"}
                >{"luki*****@gmail.com"}</Text>
                <Text text={". You can check your inbox."} />
              </> </Text> 
          <Text
            style={[styles.note, stylesGlobal.colorPrimary]}
            text={"Bạn không nhận được mã? Thử lại"}
          >{"Bạn không nhận được mã? Thử lại"}</Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Button
            onPress={() =>Alert.alert("Tính năng đang được cập nhật!")}
            title="Xác thực"
            style="solid"
          />
        </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Verification;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    color: "#0D0E0F",
    lineHeight: 43.57, 
  },
  textInput: {
    fontSize: 32,
    color: "#161719",
    lineHeight: 39,
    position: "absolute",
  },
  note: {
    fontSize: 16,
    color: "#292B2D",
    lineHeight: 19.36,
  },
  containerDot: {
    marginTop: 53, 
    paddingVertical: 11.5,
  },
  dot: {
    backgroundColor: "#E0E2E9",
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  boxDot: {
    position: "relative",
    width: 21,
    height: 16,
    marginHorizontal: 8,
  },
  input: {
    backgroundColor: "transparent",
    height: 40,
    position: "absolute",
    width: Dimensions.get("window").width - 40,
    opacity: 0,
  },
});

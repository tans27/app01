import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import styleGlobal from "../../assets/css/globalStyles";
import Button from "../../components/ButtonCustom";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Chip from "../../components/Chip";
import { DetailJobContext } from "./Context";
import Calendar from "./Calendar";
import moment from "moment";
import DropDown from "../../components/DropDown";
const AddJob = ({ navigation }) => {
  const [opacity] = useState(new Animated.Value(0));
  const [height] = useState(new Animated.Value(0));
  const [showDropDown, setShowDropDown] = useState(false);
  const { time, employees, setPrioritize, prioritize } =
    useContext(DetailJobContext);
  const [option] = useState("Chọn giai đoạn");
  const [listOption] = useState([
    { label: "Giai đoạn 1", value: "first" },
    { label: "Giai đoạn 2", value: "second" },
    { label: "Vận hành thử nghiệm", value: "test" },
    { label: "Go live", value: "live" },
  ]);
  const showContent = () => {
    Animated.timing(height, {
      toValue: !showDropDown ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();

    Animated.timing(opacity, {
      toValue: !showDropDown ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();
  };
  const maxHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 500], // <-- value that larger than your content's height
  });
  useEffect(() => {
    showContent();
  }, [showDropDown]);
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
        <ScrollView style={[
            styleGlobal.p_2,{ width: "100%" }]}>
          <View >
            <View style={styles.inputBox}>
              <TextInput
                style={[styles.input, { height: 50 }]}
                keyboardType={"default"}
                placeholder={"Tên công việc"}
                placeholderTextColor="#91919f"
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={[styles.input, { height: 50 }]}
                keyboardType={"default"}
                placeholder={"Ghi chú"}
                placeholderTextColor="#91919f"
              />
            </View>
            <TouchableOpacity
              style={[styleGlobal.inputBox]}
              onPress={() => setShowDropDown(!showDropDown)}
            >
              <View
                style={[
                  styleGlobal.flexBetween,
                  styleGlobal.input,
                  { marginBottom: 0 },
                ]}
              >
                <Text style={[styleGlobal.inputButton]}>
                  {time.from
                    ? `Từ ngày ${moment(time.from).format("L")} ${
                        time.to ? "đến ngày " + moment(time.to).format("L") : ""
                      }`
                    : "Chọn thời gian kế hoạch"}
                </Text>
                {!showDropDown ? (
                  <Feather
                    name="chevron-right"
                    size={20}
                    color={"#9e9ea7"}
                  ></Feather>
                ) : (
                  <Feather
                    name="chevron-down"
                    size={20}
                    color={"#9e9ea7"}
                  ></Feather>
                )}
              </View>
            </TouchableOpacity>

            <Animated.View style={{ opacity: opacity, maxHeight: maxHeight }}>
              <Calendar />
            </Animated.View>
            
            <TouchableOpacity
              style={[styles.inputBox, { marginTop: 20 }]}
              onPress={() => navigation.navigate("Chọn nhân viên")}
            >
              <View
                style={[
                  styleGlobal.flexBetween,
                  styles.input,
                  employees.length === 0 ? { height: 50 } : null,
                ]} 
              >
                {employees.length === 0 ? (
                  <Text style={[styles.inputButton]}>Chọn nhân viên</Text>
                ) : (
                  <View
                    style={[
                      styleGlobal.flexStart,
                      { flexWrap: 'wrap', width: "90%", paddingVertical: 10 },
                    ]}
                  >
                    {employees.map((e, i) => {
                      return <Chip key={i} avatar={e.avatar} name={e.name} />;
                    })}
                  </View>
                )}
                <Feather
                  name="chevron-right"
                  size={20}
                  color={"#9e9ea7"}
                ></Feather>
              </View>
            </TouchableOpacity>
            <View style={{ zIndex: 5 }}>
              <DropDown valueDefault={option} listOption={listOption} />
            </View>
            <View style={[styleGlobal.flexRow]}>
              <TouchableOpacity onPress={() => setPrioritize(!prioritize)}>
                {prioritize ? (
                  <AntDesign name="star" size={20} color={"#f3cc00"} />
                ) : (
                  <AntDesign name="staro" size={20} color={"#9e9ea7"} />
                )}
              </TouchableOpacity>
              <Text style={{ marginTop: 2, marginLeft: 3, paddingBottom: 150 }}>
                Ưu tiên cao, thực hiện trước
              </Text>
            </View>
          </View>
    </ScrollView>
    <View style={[
            styleGlobal.px_2]}>
      
          <Button
            onPress={() => navigation.navigate("Thành công", {
              text: "Tạo nhiệm vụ thành công",
            })}
            title="Thêm"
            style="solid"
            active={false}
          />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
  );
};

export default AddJob;

const styles = StyleSheet.create({
  inputBox: {
    position: "relative",
  },
  input: {
    borderRadius: 15,
    marginBottom: 20,
    borderColor: "#e6e6ef",
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  inputButton: {
    color: "#91919f",
  },
});

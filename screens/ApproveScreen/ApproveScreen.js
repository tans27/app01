import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React,{useState} from "react";
import styleGlobal from "../../assets/css/globalStyles";
import { searchData } from "../../extensions/searchData";
import Tabs from "./Tabs";
import Row from "./RowAccordition"; 
import Feather from 'react-native-vector-icons/Feather'
const ApproveScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [targetSearch] = useState(["title"]);
  const data = [
    {
      title: "Đi công tác",
      author: "Nguyễn Huy Hoàng",
      listJob: "pending",
      category: ["Đi công tác"],
    },

    {
      title: "Mua sắm & Cung ứng",
      author: "Nguyễn Huy Hoàng",
      status: "approved",
      category: [
        "Mua sắm & Cung ứng",
        "Procurement",
        "Thiết bị/ Công cụ dụng cụ",
        "Đặt văn phòng phẩm",
      ],
    },

    {
      title: "Đặt phòng họp",
      author: "Nguyễn Huy Hoàng",
      status: "refused",
      category: ["Đặt phòng họp"],
    },
    {
      title: "Đặt xe",
      author: "Nguyễn Huy Hoàng",
      status: "pending",
      category: ["Đặt xe"],
    },
  ];
  return ( 
    <>
      <SafeAreaView style={[{ flex: 1, backgroundColor: "#fff" }]}>
        <Tabs />
        <View style={[styleGlobal.inputBox, { paddingHorizontal: 20,marginTop: 10}]}>
          <TextInput
            style={[
              styleGlobal.input,
              { width: Dimensions.get("window").width - 40 },
            ]}
            keyboardType={"default"}
            onChangeText={(val) => setValue(val)}
            placeholder={"Tìm kiếm phê duyệt"}
            placeholderTextColor="#91919f"
            defaultValue={value}
          />
          <TouchableOpacity style={styles.icon}>
            <Feather name="search" size={20} color="#91919f" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View>
            <View style={[styleGlobal.px_2]}>
              {searchData(data, targetSearch, value).map((ele, index) => {
                return (
                  <Row
                    title={ele.title}
                    category={ele.category}
                    key={index}
                    onPress={() => {
                      navigation.navigate(ele.title);
                    }}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView> 
      </>
  );
};

export default ApproveScreen;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    right: 35,
    top: 15,
  },
  buttonFixed: {
    backgroundColor: "#c01e2e",
    width: 55,
    height: 55,
    borderRadius: 40,
    position: "absolute",
    bottom: 30,
    right: 30,
    opacity: 0.8,
  },
});

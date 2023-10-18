import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import styleGlobal from "../../assets/css/globalStyles";
const UseProcess = () => {
  return (
    <View>
      <View
        style={[
          styleGlobal.flexStart,
          { justifyContent: "flex-start", alignItems: "flex-start" },
        ]}
      >
        <View
          style={[
            styleGlobal.flexLeft,
            styles.lineProgress,
            { backgroundColor: "#00A86B" },
          ]}
        ></View>
        <View style={[styles.container]}>
          <Text>23/06/2022</Text>
          <View style={[styles.boxInforProgress]}>
            <Text style={[styles.text]}>Người bàn giao: Nguyễn Huy Hoàng</Text>
            <Text  style={[styles.text]}>Phòng ban sử dụng: Công nghệ & Kiểm soát</Text>
            <Text  style={[styles.text]}>Nhân sự sử dụng: </Text>
          </View>

          <Text>05/09/2022</Text>
          <View style={[styles.boxInforProgress]}>
            <Text style={[styles.text]}>Người bàn giao: Nguyễn Huy Hoàng</Text>
            <Text  style={[styles.text]}>Phòng ban sử dụng: Công nghệ & Kiểm soát</Text>
            <Text  style={[styles.text]}>Nhân sự sử dụng: </Text>
          </View>
        </View>
      </View> 
    </View>
  );
};

export default UseProcess;

const styles = StyleSheet.create({
  lineProgress: {
    width: 5,
    height: '100%',
    borderRadius: 15,
  },
  container: {
    paddingLeft: 5,
  },
  boxInforProgress: {
    backgroundColor: "#CFFAEA",
    width: Dimensions.get("window").width - 80,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 15,
    marginTop: 10,
    marginBottom:15,
    borderRadius: 8,
  },
  text:{
    marginBottom:5,
    fontSize:13,
    fontWeight: "500"
  }
});

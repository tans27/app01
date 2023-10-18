import { StyleSheet, Text, View,TouchableWithoutFeedback,Alert } from "react-native";
import React from "react";
import styleGlobal from "../../assets/css/globalStyles"; 
const RowInfor = ({ title, status, dateCreat,navigation }) => {
  return (
    // <TouchableWithoutFeedback onPress={() => Alert.alert("Tính năng đang được cập nhật!")}>
    <View style={[styleGlobal.flexBetween, styleGlobal.p_2, styles.rowIcon]}>
      <View style={[styleGlobal.flexCenter]}> 
        <View style={{ marginLeft: 10 }}>
          <Text style={[styles.title, {}]} numberOfLines={1}>{title}</Text>
          <Text style={[styles.description, {}]}>Ngày tạo: {dateCreat}</Text>
        </View>
      </View>
    </View>
    // </TouchableWithoutFeedback>
  );
};

export default RowInfor;

const styles = StyleSheet.create({  
  progressIcon: { 
    backgroundColor: "#FEEED0",
  },   
  title: {
    fontSize: 19,
    fontWeight: "700",
  },

  description: {
    fontSize: 12,
    color: "#4f4f4f",
    marginTop: 2,
  },
  rowIcon: { 
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 19,
    fontWeight: "700",
  }, 
});

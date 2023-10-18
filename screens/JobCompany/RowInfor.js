import { StyleSheet, Text, View,TouchableWithoutFeedback } from "react-native";
import React from "react";
import styleGlobal from "../../assets/css/globalStyles";
import Feather from "react-native-vector-icons/Feather";
const RowInfor = ({ title, status, dateCreat,navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={navigation}>
    <View style={[styleGlobal.flexBetween, styleGlobal.p_2, styles.rowIcon]}>
      <View style={[styleGlobal.flexCenter]}>
          {status === 'done' && <View style={[styleGlobal.flexCenter, styles.boxIcon,styles.successIcon]}>
          <Feather name="check-circle" size={25} color={"#00A86B"}></Feather>
        </View> }
        {status === 'progress' && <View style={[styleGlobal.flexCenter, styles.boxIcon,styles.progressIcon]}>
          <Feather name="loader" size={25} color={"#FCAC12"}></Feather>
        </View> }
        {status === 'late' && <View style={[styleGlobal.flexCenter, styles.boxIcon,styles.alertIcon]}>
          <Feather name="alert-triangle" size={25} color={"#FD3C4A"}></Feather>
        </View> }
        <View style={{ marginLeft: 10 }}>
          <Text style={[styles.title, {}]} numberOfLines={1}>{title}</Text>
          <Text style={[styles.description, {}]}>Ngày tạo: {dateCreat}</Text>
        </View>
      </View>
    </View></TouchableWithoutFeedback>
  );
};

export default RowInfor;

const styles = StyleSheet.create({
  boxIcon: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  successIcon: { 
    backgroundColor: "#CFFAEA",
  },  
  alertIcon: { 
    backgroundColor: "#FDD5D7",
  },  
  progressIcon: { 
    backgroundColor: "#FEEED0",
  },  
  rowIcon: {
    backgroundColor: "#faf9ff",
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1,
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
});

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import styleGlobal from "../assets/css/globalStyles";
const SelectYear = ({ prevPress, nextPress, title }) => {
  return (
    <View style={[styleGlobal.flexBetween, styles.container]}>
      <TouchableOpacity onPress={prevPress}>
        <Feather name="chevron-left" size={23} color={"#000"} />
      </TouchableOpacity>
      <View style={[styleGlobal.flexCenter, styles.boxMain]}>
        <Text style={[styles.yearText]}>{title}</Text>
        <Text style={[styles.monthText]}>{`(01/01 - 31/12)`}</Text>
      </View>
      {title < new Date().getFullYear() ? (
        <TouchableOpacity onPress={nextPress}>
          <Feather name="chevron-right" size={23} color={"#000"} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Feather name="chevron-right" size={23} color={"#e7e6eb"} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SelectYear;

const styles = StyleSheet.create({
  boxMain: {
    backgroundColor: "#e7e6eb",
    borderRadius: 10,
    width: Dimensions.get("window").width - 150,
    paddingVertical: 5,
  },
  container: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    paddingHorizontal: 20,
  },
  yearText: {
    fontSize: 20,
    fontWeight: "600",
    marginRight: 5,
  },
  monthText: {
    fontSize: 12,
    fontWeight: "500",
  },
});

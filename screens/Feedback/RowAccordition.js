import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Collapsible from "react-native-collapsible";
import styleGlobal from "../../assets/css/globalStyles";
import Octicons from "react-native-vector-icons/Octicons";
import DonutPoint from "../../components/DonutPoint";
const RowAccordition = ({ title, index, number }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View style={[styleGlobal.px_2, styles.row, { padding: 15 }]}>
      <View style={[styleGlobal.flexBetween]}>
        <Text style={[styles.text]}>Tháng {title + 1}</Text>
        <View style={[styleGlobal.flexBetween]}>
          <Text style={[styles.text, styleGlobal.colorPrimary]}>
            {number} công việc
          </Text>
          <TouchableOpacity
            onPress={() => toggleExpanded()}
            style={[
              styleGlobal.flexCenter,
              styleGlobal.backgroundColorPrimary,
              styles.iconPlus,
            ]}
          >
            <Octicons name={collapsed ? "plus" : "dash" } size={14} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
      {/*Content of Single Collapsible*/}
      <Collapsible collapsed={collapsed} align="center">
        <View
          style={[
            styles.content,
            styleGlobal.flexBetween,
            {
              marginTop: 15,
              backgroundColor: "#faf9ff",
              padding: 10,
              borderRadius: 10,
              width: Dimensions.get("window").width - 40,
            },
          ]}
        >
          <View>
            <DonutPoint />
            <Text style={[{ textAlign: "center" }]}>Dự kiến</Text>
          </View>
          <View>
            <DonutPoint />
            <Text style={[{ textAlign: "center" }]}>Điểm Thực</Text>
          </View>
          <View>
            <View
              style={[
                styleGlobal.flexCenter,
                {
                  backgroundColor: "green",
                  width: 80,
                  height: 80,
                  borderRadius: 80,
                },
              ]}
            ></View>
            <Text style={[{ textAlign: "center" }]}>Excel</Text>
          </View>
        </View>
      </Collapsible>
    </View>
  );
};

export default RowAccordition;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  boxChart: {
    backgroundColor: "#fff",
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  row: {
    width: Dimensions.get("window").width,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
  iconPlus: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginLeft: 15,
  },
});

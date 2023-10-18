import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React, { useContext,useState } from "react";
import styleGlobal from "../../assets/css/globalStyles";
import { ITHelpDeskContext } from "./Context";
const Tab = () => {
  const { listRender, setListRender } = useContext(ITHelpDeskContext); 
  return (
    <View style={[styleGlobal.flexCenter, { marginTop: 10 }]}>
      <TouchableWithoutFeedback onPress={() => setListRender("Tất cả")}>
        <View
          style={[
            styleGlobal.flexCenter,
            {
              borderWidth: 1,
              borderColor: "#c01e2e",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              width: 80,
              height: 35,
              backgroundColor: listRender === "Tất cả" ? "#c01e2e" : null,
            },
          ]}
        >
          <Text
            style={[
              styles.titleSecond,
              {
                textAlign: "center",
                color: listRender === "Tất cả" ? "#fff" : "#c01e2e",
              },
            ]}
          >
            Tất cả
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setListRender("Được giao")}>
        <View
          style={[
            styleGlobal.flexCenter,
            {
              borderWidth: 1,
              borderColor: "#c01e2e",
              width: 100,
              height: 35,
              backgroundColor: listRender === "Được giao" ? "#c01e2e" : null,
            },
          ]}
        >
          <Text
            style={[
              styles.titleSecond,
              {
                textAlign: "center",
                color: listRender === "Được giao" ? "#fff" : "#c01e2e",
              },
            ]}
          >
            Được giao
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setListRender("Yêu cầu")}>
        <View
          style={[
            styleGlobal.flexCenter,
            {
              borderWidth: 1,
              borderColor: "#c01e2e",
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              width: 80,
              height: 35,
              backgroundColor: listRender === "Yêu cầu" ? "#c01e2e" : null,
            },
          ]}
        >
          <Text
            style={[
              styles.titleSecond,
              {
                textAlign: "center",
                color: listRender === "Yêu cầu" ? "#fff" : "#c01e2e",
              },
            ]}
          >
            Yêu cầu
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  titleSecond: {
    fontSize: 16,
    fontWeight: "700",
  },
});

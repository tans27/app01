import { StyleSheet, Text, View } from "react-native";
import { withTheme } from "react-native-paper";
import styleGlobal from "../assets/css/globalStyles";
import React from "react";
import Switch from "./Switch";
const ActionLine = (props) => {
  const { colors } = props.theme; 
  return (
    <View
      style={[
        styleGlobal.flexBetween,
        styles.container,
        { borderBottomColor: colors.borderColor },
      ]}
    >
      <View>
        <Text style={[styles.title ]}>
          {props.title}
        </Text>
        <Text style={[styles.description ]}>
          {props.description}
        </Text>
      </View>
      <Switch status={props.status} onPress={props.onPress} />
    </View>
  );
};

export default withTheme(ActionLine);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10, 
  },
  title: {
    fontSize: 16,
    color: "#000",
  },
  description: {
    fontSize: 13,
    color: "#91919f",
    maxWidth: 300,
    marginTop:3,
  },
});

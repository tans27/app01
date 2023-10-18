import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import styleGlobal from "../assets/css/globalStyles";
export default function Box({
  icon,
  title,
  description,
  navigation,
  borderColor,
}) {
  return (
    <TouchableWithoutFeedback onPress={navigation}>
      <View
        style={[
          styleGlobal.flexBetween,
          styles.box,
          {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <View
          style={[
            styleGlobal.flexBetween,
            styles.boxIcon,
            {
              alignItems: "center",
              justifyContent: "center",
              borderColor: borderColor,
            },
          ]}
        >
          {icon}
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width / 2 - 30,
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,

    elevation: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    textTransform: "uppercase",
    marginTop: 15,
    marginBottom: 5,
    color: "#c01e2e",
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    color: "rgba(0,0,0,0.7)",
  },
  boxIcon: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 0.6,
  },
});

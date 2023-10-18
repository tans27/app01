import React, { useState } from "react";
import { StyleSheet, View, Switch } from "react-native";

export default function SwitchCustom(props) { 

  return (
    <View style={styles.container}>
      <Switch
        onValueChange={props.onPress} 
        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
        value={props.status}
        trackColor={{ false: "#c6c6c6", true: "#e66426" }}
        ios_backgroundColor="#c6c6c6"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});

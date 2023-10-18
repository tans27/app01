import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

const PercentChart = ({done,total}) => {
  const radius = 70;
  const circleCircumference = 2 * Math.PI * radius;  

  const spentAmount = done;
  const percentage = (spentAmount / total) * 100;
  const strokeDashoffset =
    circleCircumference - (circleCircumference * percentage) / 100;

  return (
    <View style={styles.container}>
      <View style={styles.graphWrapper}>
        <Svg height="140" width="140" viewBox="0 0 180 180">
          <G rotation={-90} originX="90" originY="90">
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="#F1F6F9"
              fill="transparent"
              strokeWidth="20"
            />
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="#c01e2e"
              fill="transparent"
              strokeWidth="20"
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </G>
        </Svg>
        <Text style={styles.text}>{percentage.toFixed(0)}%</Text>
      </View>
    </View>
  );
};

export default PercentChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  graphWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    color: "#c01e2e",
  },
});
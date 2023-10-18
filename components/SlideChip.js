import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
} from "react-native";
import React from "react";
import stylesGlobal from "../assets/css/globalStyles";
import { DataContext } from "../data/dataProvider"; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const SlideChip = () => {
  const { statusJob, setStatusJob } = React.useContext(DataContext);
  const [status, setStatus] = React.useState(0);
  let transformX = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (status === 0) {
      Animated.timing(transformX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else if (status === 1) {
      Animated.timing(transformX, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else if (status === 2) {
      Animated.timing(transformX, {
        toValue: 2,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else if (status === 3) {
      Animated.timing(transformX, {
        toValue: 3,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [status,transformX]);

  const rotationX = transformX.interpolate({
    inputRange: [0, 4],
    outputRange: [0, Dimensions.get("screen").width - 28],
  });
  return (
      <View
        style={[
          stylesGlobal.flexBetween,
          styles.optionsChip,
          {
            position: "relative", 
          },
        ]}
      >
        <Animated.View
          style={[
            styles.optionsChip,
            stylesGlobal.backgroundColorPrimary,
            {
              position: "absolute", 
              paddingVertical: 16,   
              width:(Dimensions.get("window").width  - 28)/ 4,
              transform: [
                {
                  translateX: rotationX,
                },
              ],
            },
          ]}
        ></Animated.View>
        <View style={[
          stylesGlobal.flexBetween,{width: Dimensions.get("screen").width - 28,position: "absolute"}]}>
          <TouchableWithoutFeedback
            onPress={() => {
              setStatusJob("delivered");
              setStatus(0);
            }}
          >
            <View
              style={[
                stylesGlobal.flexCenter,
                styles.boxOptionChip,
                statusJob === "delivered" && styles.optionsChipActive,
              ]}
            >
              <View
                style={[
                  statusJob === "delivered"
                    ? {fontWeight:"700"}
                    :{fontWeight:"500"},
                  styles.optionsText,
                  statusJob === "delivered" && styles.optionsTextActive,
                ]} 
              ><FontAwesome5 name="list-alt" size={25} color={statusJob === "delivered" ? "#fff" : "#c6c6c6"}/></View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setStatusJob("doing");
              setStatus(1);
            }}
          >
            <View
              style={[
                stylesGlobal.flexCenter,
                styles.boxOptionChip,
                statusJob === "doing" && styles.optionsChipActive,
              ]}
            >
              <View
                style={[
                  statusJob === "doing"
                  ? {fontWeight:"700"}
                  :{fontWeight:"500"},
                  styles.optionsText,
                  statusJob === "doing" && styles.optionsTextActive,
                ]} 
              ><MaterialIcons name="timelapse" size={25} color={statusJob === "doing" ? "#fff" : "#c6c6c6"}/></View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setStatusJob("alert");
              setStatus(2);
            }}
          >
            <View
              style={[
                stylesGlobal.flexCenter,
                styles.boxOptionChip,
                statusJob === "alert" && styles.optionsChipActive,
              ]}
            >
              <View
                style={[
                  statusJob === "alert"
                  ? {fontWeight:"700"}
                  :{fontWeight:"500"},
                  styles.optionsText,
                  statusJob === "alert" && styles.optionsTextActive,
                ]} 
              ><Ionicons name="ios-alert-circle" size={25} color={statusJob === "alert" ? "#fff" : "#c6c6c6"}/></View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setStatusJob("done");
              setStatus(3);
            }}
          >
            <View
              style={[
                stylesGlobal.flexCenter,
                styles.boxOptionChip,
                statusJob === "done" && styles.optionsChipActive,
              ]}
            >
              <View
                style={[
                  statusJob === "done"
                  ? {fontWeight:"700"}
                  :{fontWeight:"500"},
                  styles.optionsText,
                  statusJob === "done" && styles.optionsTextActive,
                ]}
                
              ><MaterialCommunityIcons name="text-box-check" size={25} color={statusJob === "done" ? "#fff" : "#c6c6c6"}/></View>
            </View>
          </TouchableWithoutFeedback>
        </View>
    </View>
  );
};

export default SlideChip;

const styles = StyleSheet.create({
  optionsChip: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 16,
  }, 
  optionsText: {
    fontSize: 14,
    color: "#91919F",
  },
  optionsTextActive: {
    color: "#fff",
  }, 
  boxOptionChip: { 
    paddingHorizontal: 24,
    paddingVertical: 8,
    width: (Dimensions.get("screen").width - 28) / 4, 
  },
});

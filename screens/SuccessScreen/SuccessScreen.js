import React, { useState } from "react";
import { View, Animated, Text, Easing, Dimensions } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import Button from "../../components/ButtonCustom";  
import { Audio } from 'expo-av';
const spinValue = new Animated.Value(0);
const lineLeftValue = new Animated.Value(0);
const lineRightValue = new Animated.Value(0);

export default function App({ navigation,route }) { 
  const [cobra, setCollapsed] = useState(0);
  const [sound, setSound] = React.useState();

  async function playSound() { 
    const { sound } = await Audio.Sound.createAsync(
       require('../../assets/sounds/success.mp3')
    );
    setSound(sound); 
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]); 
  React.useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const lineLeft = lineLeftValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });
  const lineRight = lineRightValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });
  React.useLayoutEffect(() => {
    if (cobra <= 98) {
      setTimeout(
        // change to some random crap every 800 ms
        () => setCollapsed(cobra + 2),
        1
      );
    } else {
      clearTimeout(); 
      Animated.timing(lineLeftValue, {
        toValue: 1,
        duration: 500, 
        useNativeDriver: false,
      }).start(
        Animated.timing(lineRightValue, {
          toValue: 1,
          duration: 500, 
          useNativeDriver: false,
        }).start()
      )
      playSound()
    }
  }, [cobra]);
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
        },
      ]}
    >
      <View
        style={[
          {
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
          },
        ]}
      >
        <View
          style={[
            {
              height: 250,
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              marginTop:100,
            },
          ]}
        >
          <View style={[{ position: "absolute" }]}>
            <Animated.View
              style={{
                transform: [{ rotate: spin }],
                width: Dimensions.get("window").width * 0.5,
                height: Dimensions.get("window").width * 0.5,
                backgroundColor: "#fff",
                borderColor: "#c01e2e",
                borderWidth: 4,
                borderStyle: "dashed",
                borderRadius: Dimensions.get("window").width * 0.75,
              }}
            />
          </View>
          <View
            style={{
              width: 8,
              backgroundColor: "#fff",
              height: 50,
              transform: [{ rotate: "-50deg" }], 
              left: -20,
              top: 50,
              borderRadius: 10,
            }}
          >
            <Animated.View
              style={{
                width: 8,
                backgroundColor: "#c01e2e",
                height: lineLeft,
                borderRadius: 10,
              }}
            ></Animated.View>
          </View>
           <View
            style={{
              width: 8,
              backgroundColor: "#fff",
              height: 80,
              transform: [{ rotate: "40deg" }], 
              right: -19,
              top: -29,
              borderRadius: 10,
            }}
          >
           <Animated.View
              style={{
                width: 8,
                backgroundColor: "#c01e2e",
                height: lineRight,
                borderRadius: 10,
              }}
            ></Animated.View>
          </View> 
          <View style={[{ position: "absolute" }]}>
            <Svg
              height={Dimensions.get("window").width * 0.5}
              width={Dimensions.get("window").width * 0.5}
              viewBox="0 0 180 180"
            >
              <G rotation={-90} originX="90" originY="90">
                <Circle
                  cx="50%"
                  cy="50%"
                  r={70}
                  stroke="#fff"
                  fill="transparent"
                  strokeWidth="4"
                />
                <Circle
                  cx="50%"
                  cy="50%"
                  r={70}
                  stroke="#c01e2e"
                  fill="transparent"
                  strokeWidth="5"
                  strokeDasharray={2 * Math.PI * 70}
                  strokeDashoffset={
                    2 * Math.PI * 70 - (2 * Math.PI * 70 * Number(cobra)) / 100
                  }
                  strokeLinecap="round"
                />
              </G>
            </Svg>
          </View>
        </View>
        <Text style={[{ fontSize: 25, fontWeight: "600" }]}>
          {route.params.text}
        </Text>
      </View>
      <View style={[{ marginHorizontal: 20 }]}> 
        <Button
          onPress={() => navigation.goBack()}
          title="Quay lại Trang chủ"
          style="solid"
          active={false}
        />
      </View>
    </View>
  );
}

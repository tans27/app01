import React, { useState, useEffect, memo } from "react";
import {
  Text,
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Button,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styleGlobal from "../../assets/css/globalStyles";
// import { Camera } from 'expo-camera';
import cameraImage from "../../assets/images/camera.png";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
const DeviceQR = ({ navigation }) => {
  // Required
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [height] = useState(new Animated.Value(0));
  const [mode, setMode] = useState(Camera.Constants.FlashMode.torch.on);
  const [actionScan, setActionScan] = useState(true);
  const showContent = () => {
    Animated.timing(height, {
      toValue: actionScan ? 1 : 0,
      duration: 3000,
      useNativeDriver: false, // <-- neccessary
    }).start();
  };
  const scanArea = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 450], // <-- value that larger than your content's height
  });
  useEffect(() => {
    setTimeout(() => {
      setActionScan(!actionScan);
      showContent();
    }, 3000);
  }, [actionScan, showContent]);

  // Line Scan Effect
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    showContent();
  }, [showContent]);

  // UI Permissions

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={cameraImage}
          alt="/"
          style={{ width: 300, height: 200 }}
        />
        <Text
          style={[
            {
              color: "#000",
              fontSize: 20,
              paddingBottom: 90,
              fontWeight: "700",
            },
          ]}
        >
          {"Không truy cập được Camera!"}
        </Text>
      </View>
    );
  }

  // Handle When Scan
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate("Chi tiết thiết bị", {
      code: data,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quét mã QR để điểm danh</Text>
      <View style={styles.boxEffect}>
        <View
          style={[
            styles.boxCorner,
            { borderRightWidth: 3, borderTopWidth: 3, top: 0, right: 0 },
          ]}
        ></View>
        <View
          style={[
            styles.boxCorner,
            { borderLeftWidth: 3, borderTopWidth: 3, top: 0, left: 0 },
          ]}
        ></View>
        <View
          style={[
            styles.boxCorner,
            { borderBottomWidth: 3, borderRightWidth: 3, bottom: 0, right: 0 },
          ]}
        ></View>
        <View
          style={[
            styles.boxCorner,
            { borderBottomWidth: 3, borderLeftWidth: 3, bottom: 0, left: 0 },
          ]}
        ></View>
        <View style={styles.barcodebox}>
          <View style={styles.container}>
            <Camera
              style={styles.camera}
              flashMode={mode}
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            />
            <Animated.View
              style={{
                height: 5,
                top: scanArea,
                backgroundColor: "#c01e2e",
                width: 400,
                position: "absolute",
                zIndex: 999,
                elevation: 999,
              }}
            ></Animated.View>
          </View>
        </View>
      </View>
      <View
        style={[
          styleGlobal.flexBetween,
          { marginTop: 30, paddingHorizontal: 20 },
        ]}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setMode(
              mode === Camera.Constants.FlashMode.torch
                ? Camera.Constants.FlashMode.torch.on
                : Camera.Constants.FlashMode.torch
            );
          }}
        >
          <View style={[styleGlobal.flexBetween, { flexDirection: "column" }]}>
            <View
              style={[
                styleGlobal.flexBetween,
                styles.boxIcon,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "#c01e2e",
                  borderWidth: 2,
                },
                mode === Camera.Constants.FlashMode.torch.on
                  ? { backgroundColor: "#fff" }
                  : { backgroundColor: "#c01e2e" },
              ]}
            >
              <Ionicons
                name="flashlight"
                size={30}
                color={`${
                  mode === Camera.Constants.FlashMode.torch.on
                    ? "#c01e2e"
                    : "#fff"
                }`}
              />
            </View>
            <Text style={[styles.descript]}>Bật đèn pin</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      {/* {scanned && (
        <Button
          title={"Scan again?"}
          onPress={() => setScanned(false)}
          color="tomato"
        />
      )} */}
    </View>
  );
};

export default memo(DeviceQR);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: "tomato",
  },
  boxEffect: {
    height: 350,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "relative",
  },
  boxCorner: {
    position: "absolute",
    width: 40,
    height: 40,
    borderColor: "#c01e2e",
    borderRadius: 3,
  },
  boxIcon: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 0.6,
  },
  descript: {
    fontSize: 15,
    marginTop: 5,
    textAlign: "center",
    fontWeight: "600",
  },

  camera: {
    width: 400,
    height: 400,
  },
});

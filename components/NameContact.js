import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Modal, 
  Alert,
  Image,
  Linking,
} from "react-native";
import React, { useState, useCallback } from "react";
import styleGlobal from "../assets/css/globalStyles";
import AppIntroSlider from "react-native-app-intro-slider";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const NameContact = ({ name, style, phoneNumber,mail }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const slides = [
    {
      key: 0,
      listContact: [
        {
          image: require("../assets/images/zaloIcon.jpg"),
          contact: `https://zalo.me/${phoneNumber}`,
        },
        {
          image: require("../assets/images/mailIcon.jpg"),
          contact: `mailto:${mail}`,
        },
        {
          image: require("../assets/images/phoneIcon.jpg"),
          contact: `tel:${phoneNumber}`,
        },
      ],
    },
    // {
    //   key: 1,
    //   listContact: [
    //     {
    //       image: require("../assets/images/logo-google.png"),
    //       contact: "",
    //     },
    //     {
    //       image: require("../assets/images/logo-google.png"),
    //       contact: "",
    //     },
    //     {
    //       image: require("../assets/images/logo-google.png"),
    //       contact: "",
    //     },
    //   ],
    // },
  ]; 
  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Đã có lỗi xảy ra`);
      }
    }, [url]);

    return (
      <TouchableOpacity onPress={handlePress}><Text>{children}</Text></TouchableOpacity>
    );
  };
  const renderSlider = ({ item }) => {
    return (
      <View
        style={[styleGlobal.flexStart, { marginTop: 20, paddingBottom: 50 }]}
        key={item.key}
      >
        <OpenURLButton url={item.listContact[0].contact}>
          <View
            style={[
              styleGlobal.flexBetween,
              {
                flexDirection: "column",
                width: (Dimensions.get("window").width - 40) / 3,
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
                },
              ]}
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={item.listContact[0].image}
                alt="/"
              />
            </View>
          </View>
        </OpenURLButton>

        <OpenURLButton url={item.listContact[1].contact}>
          <View
            style={[
              styleGlobal.flexBetween,
              {
                flexDirection: "column",
                width: (Dimensions.get("window").width - 40) / 3,
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
                },
              ]}
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={item.listContact[1].image}
                alt="/"
              />
            </View>
          </View>
        </OpenURLButton>
        <OpenURLButton url={item.listContact[2].contact}>
          <View
            style={[
              styleGlobal.flexBetween,
              {
                flexDirection: "column",
                width: (Dimensions.get("window").width - 40) / 3,
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
                },
              ]}
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={item.listContact[2].image}
                alt="/"
              />
            </View>
          </View>
        </OpenURLButton>
      </View>
    );
  };
  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={[styleGlobal.flexStart]}> 
        <Text style={style}>{name}</Text>
        
        <MaterialCommunityIcons name="contactless-payment-circle" size={23} color={"#fd3c4a"}></MaterialCommunityIcons>
      </TouchableOpacity>
      <TouchableOpacity style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // this.closeButtonFunction()
            //   press
          }}
        >
          <TouchableOpacity
            style={{
              height: "100%",
              marginTop: "auto",
              backgroundColor: "#06060682",
            }}
           onPress={() => setModalVisible(false)}
          > 
            <View style={styles.mainModal}>
              <Text style={[styles.headerModal]}>Liên hệ trực tiếp</Text>
              <AppIntroSlider
                showNextButton={false}
                showDoneButton={false}
                showPrevButton={false}
                dotStyle={styles.dot}
                activeDotStyle={[
                  styles.dotActive,
                  styleGlobal.backgroundColorPrimary,
                ]}
                renderItem={renderSlider}
                data={slides}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </TouchableOpacity>
    </>
  );
};

export default NameContact;

const styles = StyleSheet.create({
  mainModal: {
    backgroundColor: "#fff",
    bottom: 0,
    position: "absolute",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30,
    paddingHorizontal: 20,
    width: Dimensions.get("window").width,
  },
  headerModal: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
  },
  boxIcon: {
    width: 60,
    height: 60,
    borderRadius: 40, 
  },
  dot: {
    backgroundColor: "#eee5ff",
    marginTop: 20,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 15,
    marginTop: 20,
  },
});

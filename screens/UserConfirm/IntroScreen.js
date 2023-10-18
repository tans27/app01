import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
import styleGlobal from "../../assets/css/globalStyles";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import Button from "../../components/ButtonCustom";
const IntroScreen = ({ navigation }) => {
  const slides = [
    {
      key: 0,
      title: "Quản lý nhân viên\n hiệu quả",
      text: "Mọi thông tin quan trọng\ntrong một ứng dụng duy nhất",
      image: require("../../assets/images/introscreen/slide01.png"),
    },
    {
      key: 1,
      title: "Đồng bộ & Tự động hoá\nquản lý",
      text: "Đồng bộ hoá quy trình xử lý và lưu trữ\nkhông giới hạn thông tin nhân viên",
      image: require("../../assets/images/introscreen/slide02.png"),
    },
    {
      key: 2,
      title: "Quản lý chi tiết\nbảng lương hàng tháng",
      text: "Bảng lương, dữ liệu chấm công\nđược thể hiện một cách trực quan",
      image: require("../../assets/images/introscreen/slide03.png"),
    },
  ];
  const renderSlider = ({ item }) => {
    return (
      <View style={styles.slide} key={item.image}>
        <Image source={item.image} style={styles.imageSlide} />
        <Text style={[styles.title, { fontWeight: "700" }]} text={item.title}>
          {item.title}
        </Text>
        <Text
          style={[styles.description, { fontWeight: "500" }]}
          text={item.text}
        >
          {item.text}
        </Text>
      </View>
    );
  };
  return (
    <>
      <AppIntroSlider
        showNextButton={false}
        showDoneButton={false}
        showPrevButton={false}
        dotStyle={styles.dot}
        activeDotStyle={[styles.dotActive, styleGlobal.backgroundColorPrimary]}
        renderItem={renderSlider}
        data={slides}
      />
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate("Đăng nhập")}
          title="Đăng nhập"
          style="solid"
        />
      </View>
    </>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  imageSlide: {
    width: Dimensions.get("window").width - 100,
    height: Dimensions.get("window").width - 100,
  },
  title: {
    fontSize: 30,
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: "#91919f",
    textAlign: "center",
  },
  dot: {
    backgroundColor: "#eee5ff",
  },
  dotActive: {
    backgroundColor: "red",
    width: 15,
    height: 15,
    borderRadius: 15,
  },
});

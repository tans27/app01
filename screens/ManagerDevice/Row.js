import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import styleGlobal from "../../assets/css/globalStyles";
import moment from "moment";
import nodata from "../../assets/images/nodata.jpg";
import AntDesign from "react-native-vector-icons/AntDesign";
const Row = ({ image, code, name, dateProvider, employee }) => {
  return (
    <View style={[styleGlobal.flexBetween]}>
      <View
        style={[
          styleGlobal.flexStart,
          styles.box,
          {
            alignItems: "center",
            justifyContent: "flex-start", 
            marginBottom: 10,
          },
        ]}
      >
        {image ? (
          <Image
            style={[styleGlobal.flexCenter, styles.image]}
            source={{
              uri: "http://hrm.diligo.vn/web/image?model=sci.device.main&id=2&field=image_1920",
            }}
            alt="/"
          />
        ) : (
          <Image
            style={[styleGlobal.flexCenter, styles.image]}
            source={nodata}
            alt="/"
          />
        )}
        <View
          style={[
            styleGlobal.flexStart,
            { alignItems: "flex-start", height: 80 },
          ]}
        >
          <View
            style={[
              {
                justifyContent: "center",
                alignItems: "flex-start",
                height: 80,
                width: Dimensions.get("window").width - 150,
              },
            ]}
          >
            <Text style={[styles.title]} numberOfLines={1}>
              {name}
              <Text style={[]}>{" (" + code + ")"}</Text>
            </Text>
            <Text style={[styles.price, { color: "#000" }]} numberOfLines={1}>
              {"Cấp cho: " + employee}
            </Text>
            <Text style={[styles.price]} numberOfLines={1}>
              {"Ngày cấp: " + moment(dateProvider).format("DD/MM/YYYY")}
            </Text>
          </View>
        </View>
        <View style={{ right: 20 }}>
          {moment
            .duration(
              moment(dateProvider, "YYYY-MM-DD").diff(moment().startOf("day"))
            )
            .asDays() %
            30 <
            10 && (
            <AntDesign name="warning" size={20} color={"red"}></AntDesign>
          )}
        </View>
      </View>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: "orange",
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: "600", 
  },
  price: {
    fontSize: 11,
    fontWeight: "500",
    marginTop: 10,
    color: "#c01e2e",
  },
});

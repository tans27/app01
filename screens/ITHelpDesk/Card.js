import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import styleGlobal from "../../assets/css/globalStyles";
import Avatar from "../../components/Avatar";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Entypo from 'react-native-vector-icons/Entypo' 
import moment from "moment";
import { convertNameStatus } from "../../extensions/convertNameStatus";
const Card = ({
  content,
  avatar,
  nameRequire,
  priority,
  from,
  nameHandle,
  to,
  request_date, 
  completion_time, 
  state, 
  the_average_time,
  navigation
}) => { 
  const [timeDeadline] = useState(
    Number(moment(moment(request_date).format()).format("x")) + Number(the_average_time) * 60  + 7*3600
  );
  return (
    <View style={[{ position: "relative", marginHorizontal: 20 }]}> 
      <View
        style={[
          styleGlobal.flexCenter,
          styles.flag,
          {
            zIndex: 2,
            elevation: 2,
            backgroundColor: convertNameStatus(state).background,
          },
        ]}
      >
        <Text style={{ fontWeight: "500", color: "#fff" }}>
          {convertNameStatus(state).name}
        </Text>
      </View>
      <View
        style={[
          {
            position: "absolute",
            zIndex: -3,
            elevation: -3,
            height: 40,
            backgroundColor: convertNameStatus(state).layout,
            width: 25,
            left: 1,
            top: 25,
            transform: [{ rotate: "-65deg" }],
          },
        ]}
      ></View> 
      <View
        style={[
          {
            position: "absolute",
            right: 15,
            top: 25,
            zIndex: 10,
            elevation: 10,
          },
        ]}
      >
        <View style={[styleGlobal.flexRow]}>
          {new Array(priority).fill("").map((ele, index) => {
            return (
              <AntDesign
                key={index}
                name="star"
                size={14}
                color={"#fcc64b"}
              ></AntDesign>
            );
          })}
          {new Array(5 - priority).fill("").map((ele, index) => {
            return (
              <AntDesign
                key={index}
                name="staro"
                size={14}
                color={"rgba(0,0,0,0.5)"}
              ></AntDesign>
            );
          })}
        </View>
      </View>
      <View style={[styles.card]}>
        <Text style={[{ fontSize: 18, fontWeight: "600", marginBottom: 15 }]}>
          {content}
        </Text>
        
      {/* <Text style={{ color: "#000" }}>{"a = " + Number(timeDeadline) +" - "+ moment(request_date).format("YYYY-MM-DDTHH:mm:ss")}</Text> 
      <Text style={{ color: "#000" }}>{"b = " +  (Number(moment(moment(moment(new Date()).format("YYYY-MM-DDTHH:mm:ss")).format()).format("x")) ) +" - " + moment(new Date()).format("YYYY-MM-DDTHH:mm:ss")}</Text>
      <Text style={{ color: "#000" }}>{((Number(timeDeadline) - Number(moment(moment(moment(new Date()).format("YYYY-MM-DDTHH:mm:ss")).format()).format("x")) ))/(the_average_time*60)}</Text> */}
        <View
          style={[
            styleGlobal.flexBetween,
            {
              borderBottomWidth: 1,
              borderBottomColor: "rgba(0,0,0,0.2)",
              paddingBottom: 15,
            },
          ]}
        >
          <View style={[styleGlobal.flexRow, { position: "relative" }]}>
            <View style={[styleGlobal.flexCenter, { flexDirection: "column" }]}>
              <Avatar
                image={avatar.toString()}
                style={{ width: 35, height: 35 }}
                styleBox={{ width: 33, height: 33 }}
                name={nameRequire}
                styleText={{ fontSize: 16, fontWeight: "600" }}
              />
              {/* <View
              style={[{ height: 60, backgroundColor: "#c01e2e", width: 3 }]}
            ></View> */}
              <View style={[styleGlobal.flexCenter]}>
                <View
                  style={[
                    styleGlobal.flexRow,
                    { alignItems: "center", flexDirection: "column" },
                  ]}
                >
                  <View
                    style={[
                      styleGlobal.flexCenter,
                      { height: 12, opacity: 0.2 },
                    ]}
                  >
                    <Feather
                      name="chevron-down"
                      size={11}
                      color={"#c01e2e"}
                    ></Feather>
                  </View>
                  <View
                    style={[
                      styleGlobal.flexCenter,
                      { height: 12, opacity: 0.6 },
                    ]}
                  >
                    <Feather
                      name="chevron-down"
                      size={13}
                      color={"#c01e2e"}
                    ></Feather>
                  </View>
                  <View
                    style={[
                      styleGlobal.flexCenter,
                      { height: 12, opacity: 0.8 },
                    ]}
                  >
                    <Feather
                      name="chevron-down"
                      size={14}
                      color={"#c01e2e"}
                    ></Feather>
                  </View>
                  <View
                    style={[styleGlobal.flexCenter, { height: 12, opacity: 1 }]}
                  >
                    <Feather
                      name="chevron-down"
                      size={15}
                      color={"#c01e2e"}
                    ></Feather>
                  </View>
                  <Avatar
                    image={avatar.toString()}
                    style={{ width: 35, height: 35 }}
                    styleBox={{ width: 33, height: 33 }}
                    name={nameRequire}
                    styleText={{ fontSize: 16, fontWeight: "600" }}
                  />
                </View>
                <View style={{ position: "absolute" }}>
                  <View
                    style={[
                      styleGlobal.flexCenter,
                      styles.chipProgress,
                      {
                        left: 50,
                        top: -15,
                        backgroundColor: convertNameStatus(state).background,
                      },
                    ]}
                  >
                    <Text style={{ color: "#fff" }}>
                    {
                    completion_time ? 
                    (Number(moment(completion_time, 'HH:mm:ss: A').diff(moment().startOf('day'), 'seconds'))/(Number(the_average_time)*0.6)).toFixed(0) < 100 ? 
                    (Number(moment(completion_time, 'HH:mm:ss: A').diff(moment().startOf('day'), 'seconds'))/(Number(the_average_time)*0.6)).toFixed(0) +'%' : 
                    <Entypo name="flag" size={14} color={"red"}/>
                    :(
                      timeDeadline - Number(moment(moment(new Date()).format()).format("x")) < 0 ?   <Entypo name="flag" size={14} color={"red"}/> : "ok"
                    )
                    }</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: convertNameStatus(state).background,
                      width: 10,
                      height: 20,
                      position: "absolute",
                      left: 49,
                      top: -15,
                      transform: [{ rotateX: "45deg" }, { rotateZ: "45deg" }],
                    }}
                  ></View>
                </View>
              </View>
            </View>
            <View
              style={[
                styleGlobal.flexBetween,
                { flexDirection: "column", alignItems: "flex-start" },
              ]}
            >
              <View>
                <Text
                  style={[{ marginLeft: 10, fontWeight: "600", fontSize: 15 }]}
                >
                  {nameRequire}
                </Text>
                <Text
                  style={[{ marginLeft: 10, fontWeight: "400", fontSize: 12 }]}
                >
                  {from}
                </Text>
              </View>
              <View>
                <Text
                  style={[{ marginLeft: 10, fontWeight: "600", fontSize: 15 }]}
                >
                  {nameHandle}
                </Text>
                <Text
                  style={[{ marginLeft: 10, fontWeight: "400", fontSize: 12 }]}
                >
                  {to}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styleGlobal.flexRow, { height: 120 }]}>{/*    */}</View>
        </View>
        <View style={[styleGlobal.flexBetween, { marginVertical: 15 }]}>
          <Text>{`${moment(request_date).format("hh:mm:ss")} ngày ${moment(request_date).format("DD/MM/YYYY")}`}</Text>
          <TouchableOpacity
            onPress={navigation}
            style={[styleGlobal.flexRow]}
          >
            <Text style={{ color: "rgba(0,0,0,0.5)", marginTop: 1 }}>
              Xem thêm
            </Text>
            <Feather
              name={'chevron-right'}
              size={20}
              color={"rgba(0,0,0,0.5)"}
            ></Feather>
          </TouchableOpacity>
        </View> 
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width - 40,
    borderWidth:0,
    borderRadius: 10,
    paddingTop: 55,
    paddingBottom: 15,
    paddingHorizontal: 15,

    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    backgroundColor: "#fff",
  },
  flag: {
    height: 25,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
    position: "absolute",
    left: -10,
    top: 22.5,
    borderWidth:0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  chipProgress: {
    paddingHorizontal: 15,
    height: 25,
    borderWidth:0,
    borderRadius: 5,
  },
});

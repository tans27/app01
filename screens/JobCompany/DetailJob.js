import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  Image,
  FlatList,TouchableOpacity
} from "react-native";
import React, { useContext, useState,useEffect,useLayoutEffect } from "react";

import { DetailJobContext } from "./Context";
import styleGlobal from "../../assets/css/globalStyles";
import Member from "../../components/Member";
import Feather from "react-native-vector-icons/Feather";
import PercentChart from "../../components/PercentChart";
import RowInfor from "./RowInfor";
import Tabs from "./TabsSecond";
import moment from "moment";
import nodata from "../../assets/images/nodata.png";
const DetailJob = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.title });
  }, []);
  const { status, tabs,setStatus } = useContext(DetailJobContext);
  const [showTask, setShowTask] = useState(false);
  const [opacity] = useState(new Animated.Value(0));
  const [height] = useState(new Animated.Value(0));
  const [rotate] = useState(new Animated.Value(0));
  const [heightChild] = useState(new Animated.Value(0));
  const [optionsFilter] = useState(["Tất cả","Công việc mới", "Đang xử lý","Đã hoàn thành","Kiểm soát", "Hủy"]) 
  const showContent = () => {
    Animated.timing(height, {
      toValue: !showTask ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();
    Animated.timing(heightChild, {
      toValue: !showTask ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();
    Animated.timing(opacity, {
      toValue: !showTask ? 0 : 1,
      duration: 200,
      useNativeDriver: false, // <-- neccessary
    }).start();
  };
  const maxHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 240], // <-- value that larger than your content's height
  });
  const maxHeightChild = heightChild.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 40], // <-- value that larger than your content's height
  });
  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"], // <-- value that larger than your content's height
  });
  useEffect(() => {
    showContent(); 
  }, [showTask]);
  const renderItem = ({ item }) => (
    <RowInfor
      title={item.title}
      dateCreat={
        item.date.start
          ? moment(item.date.start).format("DD/MM/YYYY")
          : "Đang cập nhật"
      }
      status={item.status}
      navigation={() =>
        navigation.navigate("Nhiệm vụ", {
          project: route.params.title,
          title: item.title,
          description: item.description,
          dateStart:
            item.date.start !== ""
              ? moment(item.date.start).format("DD/MM/YYYY")
              : "",
          dateEnd:
            item.date.end !== ""
              ? moment(item.date.end).format("DD/MM/YYYY")
              : "",
          member: item.member,
          listJob: item.list_jobs,
        })
      }
    />
  );
  return (
    <>
      <View
        style={{
          alignItems: "center",
          paddingBottom: 40,
          backgroundColor: "#fff",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          paddingTop: 25,
          height: 200,
        }}
      >
        <View> 
          <View style={[styles.boxTop, styleGlobal.flexStart]}>
            <View>
              <PercentChart
                done={
                  route.params.listJob.filter(
                    (value) => value.status.name === "Đã hoàn thành"
                  ).length
                }
                total={route.params.listJob.length}
              />
            </View>
            <View style={{ marginLeft: 30 }}>
              <Text
                style={{ marginBottom: 5, fontWeight: "600", fontSize: 16 }}
              >
                Đội ngũ
              </Text>
              <Member member={route.params.member.slice(0, 3)} />
            </View>
          </View>
        </View>
        <View></View>
      </View>
      <View style={[{ backgroundColor: "#f5f7fb", borderRadius: 20 }]}>
        <View
          style={[
            styleGlobal.flexBetween,
            {
              paddingHorizontal: 20,
              paddingVertical: 10,
              position: "relative",
              zIndex: 90,
              elevation: 90,
            },
          ]}
        >
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Thêm công việc")}
          >
            <View style={[styleGlobal.flexStart]}>
              <Text style={{ fontWeight: "600", fontSize: 16, marginRight: 8 }}>
                Thêm nhiệm vụ
              </Text>
              <View
                style={[
                  styleGlobal.flexCenter,
                  {
                    backgroundColor: "#c01e2e",
                    borderRadius: 10,
                    width: 28,
                    height: 28,
                  },
                ]}
              >
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate("Thêm công việc")}
                >
                  <Feather name="plus" size={20} color={"#fff"}></Feather>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setShowTask(!showTask)}>
            <View style={[styleGlobal.flexStart]}>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 16,
                  marginRight: 8,
                  color: "#888a97",
                }}
              >
                {status}
              </Text>
              <Animated.View style={[{transform: [{ rotate: spin }],}]}>
              <Feather
                name={'chevron-right'}
                size={20}
                color={"#888a97"}
              ></Feather>

              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
          <Animated.View
            style={[
              {
                position: "absolute",
                right: 20,
                backgroundColor: "#fff",
                top: 40,
                height:maxHeight,
                width: 150,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius:10,
                
              },
              {
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                
                elevation: 3,
              }
            ]}
          >
            {optionsFilter.map((ele, index)=>{
              return  <View  key={index}><TouchableWithoutFeedback onPress={() => {setStatus(ele)}}>
              <Animated.View style={[styles.rowDropdown,{backgroundColor: status === ele ? "#c01e2e" :"#fff",height:maxHeightChild,
                }]}>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 16,
                    marginRight: 8,
                    color: status === ele ? "#fff" :"#888a97",
                  }}
                >
                 {ele}
                </Text>
              </Animated.View>
            </TouchableWithoutFeedback></View> 
            })} 
          </Animated.View>
        </View>
        <View>
          <Tabs />
        </View>
        {tabs === "Nhiệm vụ" &&
        route.params.listJob.filter(
          (i) => i.status.name === (status === "Tất cả" ? i.status.name : status)
        ).length > 0 ? (
          <View
            style={{ height: Dimensions.get("window").height - 250 }} 
          >
            <FlatList
              data={route.params.listJob.filter(
                (i) =>
                  i.status.name === (status === "Tất cả" ? i.status.name : status)
              )}
              renderItem={renderItem}
              keyExtractor={(item) => item.title}
            />
          </View>
        ) : (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
            }}
          ></View>
        )} 
        {tabs === "Ghi chú" && (
          <View
            style={{
              height: Dimensions.get("window").height - 350,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={nodata} alt="/" />
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              Không tìm thấy tài liệu nào!
            </Text>
          </View>
        )}
      </View> 
    </>
  );
};

export default DetailJob;

const styles = StyleSheet.create({
  boxTop: {
    width: Dimensions.get("window").width - 40,
    height: 150,
  }, 
  rowDropdown: {  
    borderColor: "rgba(0,0,0,0.2)",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
  },
});

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState,useContext } from "react";
import { convertNameStatus } from "../../extensions/convertNameStatus";
import { convertPriority } from "../../extensions/convertPriority";
import styleGlobal from "../../assets/css/globalStyles";
import AntDesign from "react-native-vector-icons/AntDesign";
import moment from "moment";
import Entypo from "react-native-vector-icons/Entypo";
import { getParagraphs } from "../../extensions/regexTool";
import DownLoadFile from "../../components/DownLoadFile";
import Feather from "react-native-vector-icons/Feather"
import { ITHelpDeskContext } from './Context'
import LineEmploy from '../../components/LineEmployee'
import { arrayRemove} from '../../extensions/arrayRemoveSameID'
const DetailHelpDesk = ({ navigation, route }) => {
  const [showPart, setShowPart] = useState("Mô tả");
  const {supporter,setSuppoter} = useContext(ITHelpDeskContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.item.title + " (" + route.params.item.code + " )",
    });
  }, []);
  const [timeDeadline] = useState(
    Number(
      moment(moment(route.params.item.request_date).format()).format("x")
    ) +
      Number(route.params.item.the_average_time) * 60 +
      7 * 3600
  );
  const Row = ({ name, value }) => {
    return (
      <View style={[styleGlobal.flexBetween]}>
        <Text style={[{ fontSize: 14, fontWeight: "600", marginBottom: 15 }]}>
          {name}
        </Text>
        <View style={[{ width: Dimensions.get("window").width / 2 - 30 }]}>
          <Text
            style={[
              {
                fontSize: 14,
                fontWeight: "600",
                marginBottom: 15,
                textAlign: "right",
                textTransform: "capitalize",
              },
            ]}
          >
            {value}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={[{ backgroundColor: "#fff" }]}>
      <ScrollView style={[{ backgroundColor: "#fff" }]}>
        <View style={[{ flex: 1, backgroundColor: "#fff" }]}>
          <View style={[{ position: "relative", marginHorizontal: 20 }]}>
            <View
              style={[
                styleGlobal.flexCenter,
                styles.flag,
                {
                  zIndex: 2,
                  elevation: 2,
                  backgroundColor: convertNameStatus(route.params.item.state)
                    .background,
                },
              ]}
            >
              <Text style={{ fontWeight: "500", color: "#fff" }}>
                {convertNameStatus(route.params.item.state).name}
              </Text>
            </View>
            <View
              style={[
                {
                  position: "absolute",
                  zIndex: -3,
                  elevation: -3,
                  height: 40,
                  backgroundColor: convertNameStatus(route.params.item.state)
                    .layout,
                  width: 25,
                  left: 1,
                  top: 25.5,
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
                {new Array(route.params.item.priority)
                  .fill("")
                  .map((ele, index) => {
                    return (
                      <AntDesign
                        key={index}
                        name="star"
                        size={14}
                        color={"#fcc64b"}
                      ></AntDesign>
                    );
                  })}
                {new Array(6 - route.params.item.priority)
                  .fill("")
                  .map((ele, index) => {
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
              <View
                style={[
                  styleGlobal.backgroundColorPrimary,
                  styles.boxTitle,
                  styleGlobal.flexCenter,
                ]}
              >
                <Text
                  style={[{ fontSize: 16, fontWeight: "600", color: "#fff" }]}
                >
                  Người gửi yêu cầu
                </Text>
              </View>
              <View
                style={[
                  {
                    borderWidth: 2,
                    borderColor: "#c01e2e",
                    borderRadius: 10,
                    paddingTop: 15,
                    paddingHorizontal: 10,
                    marginBottom: 15,
                  },
                ]}
              >
                {[
                  {
                    key: "Mã yêu cầu",
                    value: route.params.item.code,
                  },
                  {
                    key: "Người gửi yêu cầu",
                    value: route.params.item.person_name.name,
                  },
                  {
                    key: "Phòng ban",
                    value: route.params.item.department_person,
                  },
                  {
                    key: "Email",
                    value: route.params.item.email,
                  },
                  {
                    key: "Điện thoại",
                    value: route.params.item.phone,
                  },
                  {
                    key: "Nguồn kênh",
                    value: route.params.item.channel,
                  },
                ].map((e, i) => {
                  return <Row key={i} name={e.key} value={e.value} />;
                })}
              </View>
              <View
                style={[
                  styleGlobal.backgroundColorPrimary,
                  styles.boxTitle,
                  styleGlobal.flexCenter,
                ]}
              >
                <Text
                  style={[{ fontSize: 16, fontWeight: "600", color: "#fff" }]}
                >
                  Phòng ban xử lý
                </Text>
              </View>
              <View
                style={[
                  {
                    borderWidth: 2,
                    borderColor: "#c01e2e",
                    borderRadius: 10,
                    paddingTop: 15,
                    paddingHorizontal: 10,
                    marginBottom: 15,
                  },
                ]}
              >
                {[
                  {
                    key: "Loại dịch vụ",
                    value: route.params.item.type,
                  },
                  {
                    key: "Dịch vụ chi tiết",
                    value: route.params.item.type_maintenance_request.name,
                  },
                  {
                    key: "Dịch vụ con",
                    value: route.params.item.area_type_maintenance_request.name,
                  },
                  {
                    key: "Bộ phận tiếp nhận",
                    value: route.params.item.category.name,
                  },
                  {
                    key: "Đội tiếp tiếp nhận",
                    value: route.params.item.maintenance_team_id.name,
                  },
                  {
                    key: "Người phụ trách",
                    value: route.params.item.emp_id.name,
                  },
                ].map((e, i) => {
                  return <Row key={i} name={e.key} value={e.value} />;
                })}
              </View>
              <View
                style={[
                  styleGlobal.backgroundColorPrimary,
                  styles.boxTitle,
                  styleGlobal.flexCenter,
                ]}
              >
                <Text
                  style={[{ fontSize: 16, fontWeight: "600", color: "#fff" }]}
                >
                  Kết quả xử lý
                </Text>
              </View>
              <View
                style={[
                  {
                    borderWidth: 2,
                    borderColor: "#c01e2e",
                    borderRadius: 10,
                    paddingTop: 15,
                    paddingHorizontal: 10,
                  },
                ]}
              >
                {[
                  {
                    key: "Độ ưu tiên",
                    value: convertPriority(route.params.item.priority),
                  },
                  {
                    key: "Ngày yêu cầu",
                    value: `${moment(route.params.item.request_date).format(
                      "hh:mm:ss"
                    )} - ${moment(route.params.item.request_date).format(
                      "DD/MM/YYYY"
                    )}`,
                  },
                  {
                    key: "Ngày đóng yêu cầu",
                    value: route.params.item.close_date
                      ? `${moment(route.params.item.close_date).format(
                          "hh:mm:ss"
                        )} - ${moment(route.params.item.close_date).format(
                          "DD/MM/YYYY"
                        )}`
                      : "Đang cập nhật",
                  },
                  {
                    key: "Thời gian hoàn thành",
                    value: route.params.item.completion_time ?  route.params.item.completion_time :"Đang cập nhật" ,
                  },
                  {
                    key: "Thời gian cam kết",
                    value: `${route.params.item.the_average_time} phút`,
                  },
                ].map((e, i) => {
                  return <Row key={i} name={e.key} value={e.value} />;
                })}
                <View style={[styleGlobal.flexBetween]}>
                  <Text
                    style={[
                      { fontSize: 14, fontWeight: "600", marginBottom: 15 },
                    ]}
                  >
                    {"Cảnh báo thời gian"}
                  </Text>
                  <View
                    style={[{ width: Dimensions.get("window").width / 2 - 30 }]}
                  >
                    <View
                      style={[
                        {
                          fontSize: 14,
                          fontWeight: "600",
                          marginBottom: 15,
                          position: "relative",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                        },
                      ]}
                    >
                      <View
                        style={[
                          styleGlobal.flexCenter,
                          styles.chipProgress,
                          {
                            right: 0,
                            backgroundColor: convertNameStatus(
                              route.params.item.state
                            ).background,
                          },
                        ]}
                      >
                        <Text style={{ color: "#fff" }}>
                          {route.params.item.completion_time ? (
                            (
                              Number(
                                moment(
                                  route.params.item.completion_time,
                                  "HH:mm:ss: A"
                                ).diff(moment().startOf("day"), "seconds")
                              ) /
                              (Number(route.params.item.the_average_time) * 0.6)
                            ).toFixed(0) < 100 ? (
                              (100 - (
                                Number(
                                  moment(
                                    route.params.item.completion_time,
                                    "HH:mm:ss: A"
                                  ).diff(moment().startOf("day"), "seconds")
                                ) /
                                (Number(route.params.item.the_average_time) *
                                  0.6)
                              ).toFixed(0)) + "%"
                            ) : (
                              <Entypo name="flag" size={14} color={"red"} />
                            )
                          ) : timeDeadline -
                              Number(
                                moment(moment(new Date()).format()).format("x")
                              ) <
                            0 ? (
                            <Entypo name="flag" size={14} color={"red"} />
                          ) : (
                            "ok"
                          )}
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: convertNameStatus(
                            route.params.item.state
                          ).background,
                          width: 10,
                          height: 20,
                          position: "absolute",
                          right: 0,
                          transform: [
                            { rotateX: "45deg" },
                            { rotateZ: "45deg" },
                          ],
                        }}
                      ></View>
                    </View>
                  </View>
                </View>

                {route.params.item.state === "done" && (
                  <>
                    <View style={[styleGlobal.flexBetween]}>
                      <Text
                        style={[
                          { fontSize: 14, fontWeight: "600", marginBottom: 15 },
                        ]}
                      >
                        {"Đánh giá"}
                      </Text>
                      <Text
                        style={[
                          { fontSize: 14, fontWeight: "600", marginBottom: 15 },
                        ]}
                      >
                        {route.params.item.support_rating
                          ? route.params.item.support_rating
                          : ""}
                      </Text>
                    </View>
                    <View style={[styleGlobal.flexBetween]}>
                      <Text
                        style={[
                          { fontSize: 14, fontWeight: "600", marginBottom: 15 },
                        ]}
                      >
                        {"Phản hồi"}
                      </Text>
                      <Text
                        style={[
                          { fontSize: 14, fontWeight: "600", marginBottom: 15 },
                        ]}
                      >
                        {route.params.item.support_comment
                          ? route.params.item.support_comment
                          : ""}
                      </Text>
                    </View>
                  </>
                )}
              </View>
            </View>
            <View style={[styleGlobal.flexCenter, { marginTop: 10 }]}>
              <TouchableOpacity
                onPress={() => setShowPart("Mô tả")}
                style={[
                  styleGlobal.flexCenter,
                  {
                    borderWidth: 1,
                    borderColor: "#c01e2e",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    width: 80,
                    height: 35,
                    backgroundColor: showPart === "Mô tả" ? "#c01e2e" : null,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.titleSecond,
                    {
                      textAlign: "center",
                      fontWeight: "600",
                      color: showPart === "Mô tả" ? "#fff" : "#c01e2e",
                    },
                  ]}
                >
                  
                  Mô tả
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowPart("Hiện trạng")}
                style={[
                  styleGlobal.flexCenter,
                  {
                    borderWidth: 1,
                    borderColor: "#c01e2e",
                    width: 100,
                    height: 35,
                    backgroundColor:
                      showPart === "Hiện trạng" ? "#c01e2e" : null,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.titleSecond,
                    {
                      textAlign: "center",
                      fontWeight: "600",
                      color: showPart === "Hiện trạng" ? "#fff" : "#c01e2e",
                    },
                  ]}
                >
                  Hiện trạng
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowPart("Giải pháp")}
                style={[
                  styleGlobal.flexCenter,
                  {
                    borderWidth: 1,
                    borderColor: "#c01e2e",
                    width: 100,
                    height: 35,
                    backgroundColor:
                      showPart === "Giải pháp" ? "#c01e2e" : null,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.titleSecond,
                    {
                      textAlign: "center",
                      fontWeight: "600",
                      color: showPart === "Giải pháp" ? "#fff" : "#c01e2e",
                    },
                  ]}
                >
                  Giải pháp
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowPart("Hỗ trợ")}
                style={[
                  styleGlobal.flexCenter,
                  {
                    borderWidth: 1,
                    borderColor: "#c01e2e",
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    width: 80,
                    height: 35,
                    backgroundColor: showPart === "Hỗ trợ" ? "#c01e2e" : null,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.titleSecond,
                    {
                      textAlign: "center",
                      fontWeight: "600",
                      color: showPart === "Hỗ trợ" ? "#fff" : "#c01e2e",
                    },
                  ]}
                >
                  
                  Hỗ trợ
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.boxContent]}>
              {showPart === "Mô tả" && (
                <View>
                  
                  {getParagraphs(route.params.item.description).map(
                    (ele, index) => {
                      return (
                        <Text
                          style={[styles.description, { fontWeight: "500" }]}
                          key={index}
                        >
                          {ele.replace(new RegExp("<[^>]*>", "g"), "")}
                        </Text>
                      );
                    }
                  )}
                  <Text style={{marginTop: 20}}>
                    {route.params.item.attachment &&  <DownLoadFile listLink={route.params.item.attachment.map(obj => {
                        return {link:obj.file,name:obj.file_name}
                     })} />
                    }
                  </Text>
                </View>
              )}
              {showPart === "Hỗ trợ" && 
                   <View>
                     <TouchableOpacity onPress={() => navigation.navigate("Danh sách nhân sự")} style={[styleGlobal.flexBetween,{backgroundColor:'#FDD5D7',padding:10,borderRadius:10}]}>
                     <Text style={{color:'#FD3C4A'}}>Thêm nhân sự hỗ trợ</Text>
                     <View style={[styleGlobal.flexCenter, styles.boxIcon]}>
                    <Feather name="plus" size={14} color={"#FD3C4A"}></Feather>
                  </View>
                   </TouchableOpacity> 
                   {supporter.map((ele, index) => {
                     return <LineEmploy
                     name={ele.name}
                     key={ele.id}
                     avatar={ele.avatar}
                     position={ele.position}
                     press={() => {   setSuppoter(arrayRemove(supporter,ele.id).filter((e) => e.id !== ele.id));
                     }}
                     active={supporter.find(o => o.id === ele.id)}
                   />
                   })}
                   </View>
                }
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailHelpDesk;

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width - 40,
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
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  boxTitle: {
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  chipProgress: {
    paddingHorizontal: 15,
    height: 25,
    borderRadius: 5,
  },
  boxContent: {
    width: Dimensions.get("window").width - 50,
    minHeight: 100,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    marginLeft: 7,
    padding: 10,
    borderColor: "#c01e2e",
  },
  boxIcon: {
    width: 25,
    height: 25,
    backgroundColor: "#faf9ff",
    borderRadius: 7, 
  },
});

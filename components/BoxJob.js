import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import styleGlobal from "../assets/css/globalStyles";
import Feather from "react-native-vector-icons/Feather";
// import ChipDeadline from '../components/ChipDeadline'
import Member from "../components/Member";
import Avatar from '../components/Avatar'
import { checkDate } from "../extensions/checkDate";
import Progress from "../components/Progress";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from "moment";
const BoxJob = ({
  title,
  description,
  status,
  member,
  deadLine,
  listJob,
  navigation,
  index,
  dateStart,
}) => {
  const [colorRandom] = useState([
    {
      backgroundColor: "#CFFAEA",
      color: "#00A86B",
    },
    {
      backgroundColor: "#FEEED0",
      color: "#FCAC12",
    },
    {
      backgroundColor: "#FDD5D7",
      color: "#FD3C4A",
    },
    {
      backgroundColor: "#7bdcff",
      color: "#0f5c90",
    },

    {
      backgroundColor: "#e7b7e6",
      color: "#a246a0",
    },
  ]);
  //Tổng thời gian dự án
  const [totalTime] = useState(
    moment([
      deadLine.split("-")[0],
      deadLine.split("-")[1] - 1,
      deadLine.split("-")[2],
    ]).diff(
      moment([
        dateStart.split("-")[0],
        dateStart.split("-")[1] - 1,
        dateStart.split("-")[2],
      ]),
      "days"
    )
  );
  // Thời gian còn lại
  const [timeUse] = useState(
    moment([
      deadLine.split("-")[0],
      deadLine.split("-")[1] - 1,
      deadLine.split("-")[2],
    ]).diff(
      moment([
        moment().format("YYYY-MM-DD").split("-")[0],
        moment().format("YYYY-MM-DD").split("-")[1] - 1,
        moment().format("YYYY-MM-DD").split("-")[2],
      ]),
      "days"
    )
  );
  return (
    <TouchableWithoutFeedback onPress={navigation}>
      <View style={styles.boxContainer}>
        {/* <View style={[styleGlobal.flexCenter, styles.chipTag]}>
        <Text style={styles.textChip}>Mới</Text>
      </View> */}
        <View>
          <View style={[styleGlobal.flexStart, { alignItems: "flex-start"}]}>
            <View style={[styleGlobal.flexRow, { flexDirection: "column" }]}>
              <View
                style={[
                  styleGlobal.flexCenter,
                  styles.boxCharacter,
                  {
                    backgroundColor:
                      colorRandom[index < colorRandom.length ? index : index%3]
                        .backgroundColor,
                  },
                ]}
              >
                <Text
                  style={[
                    {
                      fontSize: 25,
                      fontWeight: "700",
                      color:
                        colorRandom[index < colorRandom.length ? index : index%3 ]
                          .color,
                    },
                  ]}
                >
                  {title.charAt(0)}
                </Text>
              </View>
              <View style={[styleGlobal.flexBetween]}>
                <View style={[{ position: "relative" }]}>
                  <View style={[styleGlobal.flexCenter, styles.boxIcon]}>
                    <Feather name="link" size={14} color={"#9e9ea7"}></Feather>
                  </View>
                  <View style={[styleGlobal.flexCenter, styles.numberBoxIcon]}>
                    <Text style={[{ fontSize: 10, color: "#9e9ea7" }]}>2</Text>
                  </View>
                </View>
                <View style={[{ position: "relative" }]}>
                  <View style={[styleGlobal.flexCenter, styles.boxIcon]}>
                    <Feather name="mail" size={14} color={"#9e9ea7"}></Feather>
                  </View>
                  <View style={[styleGlobal.flexCenter, styles.numberBoxIcon]}>
                    <Text style={[{ fontSize: 10, color: "#9e9ea7" }]}>2</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[{ marginLeft: 15}]}>
              <Text style={styles.title}>{title}</Text> 
              <View style={[styleGlobal.flexStart]}>
              <Avatar
                image={'https://zpsocial-f49-org.zadn.vn/c8bc02cf0c43e31dba52.jpg'}
                style={{ width: 19, height: 19 }}
                styleBox={{ width: 21, height: 21 }}
                name={"Nhiệm"}
                styleText={{ fontSize: 18, fontWeight: "600" }}
              />
          <Text style={[styles.description,{marginLeft: 5}]}>{'Trần Nhiệm'}</Text> 
              </View>
              
              <View style={[styleGlobal.flexStart, { marginVertical: 10 }]}>
              <Text style={[{ fontSize: 15, fontWeight: "600" }]}>
                {moment(dateStart).format("DD/MM/YYYY")+" "}
              </Text>
              <MaterialCommunityIcons name='ray-start-arrow' color={
                        colorRandom[index < colorRandom.length ? index : index%3 ]
                          .color} size={20} />
              <Text style={[{ fontSize: 15, fontWeight: "600" }]}>
                {" "+moment(deadLine).format("DD/MM/YYYY")}
              </Text>
              {/* <Text style={[{fontSize:15,fontWeight:'600'}]}>{totalTime}</Text>  
              <Text style={[{fontSize:15,fontWeight:'600'}]}>{timeUse}</Text>   */}
            </View>
              <View
                style={[
                  styleGlobal.flexCenter,
                  {
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderRadius: 10,
                    marginTop:10,
                    backgroundColor:
                      colorRandom[index < colorRandom.length ? index : 0]
                        .backgroundColor,
                        alignSelf: 'flex-start'
                  },
                ]}
              >
                <Text style={[
                    {
                      fontSize: 12,
                      fontWeight: "700",
                      color:
                        colorRandom[index < colorRandom.length ? index : 0]
                          .color,
                    },
                  ]}>Ban Công Nghệ</Text>
              </View>
            </View>
          </View>

          <View>
            {/*<ChipDeadline status={status} deadLine={deadLine} />  */}
            {/* {timeUse < 30 ? (
              <Progress x={totalTime - timeUse} y={totalTime} color={"red"} />
            ) : timeUse > 60 ? (
              <Progress x={totalTime - timeUse} y={totalTime} color={"green"} />
            ) : (
              <Progress
                x={totalTime - timeUse}
                y={totalTime}
                color={"yellow"}
              />
            )} */}
            
          </View>
          <View
            style={[
              styleGlobal.flexBetween,
              {
                marginTop: 25,
                paddingVertical: 20,
                borderTopColor: "rgba(0,0,0,0.1)",
                borderTopWidth: 1,
              },
            ]}
          >
            <View
              style={[
                styleGlobal.flexCenter,
                // { alignItems: "center", justifyContent: "center" },
              ]}
            >
              <Feather name="folder" size={14} color={"#9e9ea7"}></Feather>
              <Text
                style={[{ marginLeft: 2, marginRight: 10, color: "#9e9ea7" }]}
              >
                {listJob && listJob.length}
              </Text>
              <Feather name="clock" size={14} color={"#9e9ea7"}></Feather>
              <Text style={[{ marginLeft: 2, color: "#9e9ea7" }]}>
                {listJob &&
                  listJob.length -
                    listJob.filter(
                      (value) => checkDate(value.date.end) === "isNormal"
                    ).length}
              </Text>
            </View>
            <View
              style={[
                styleGlobal.flexCenter,
                // { alignItems: "center", justifyContent: "center" },
              ]}
            >
              <Feather
                name="check-circle"
                size={14}
                color={"#9e9ea7"}
              ></Feather>
              <Text style={[{ marginLeft: 2, color: "#9e9ea7" }]}>
                {listJob &&
                  listJob.filter(
                    (value) => value.status.name === "Đã hoàn thành"
                  ).length}
                /{listJob && listJob.length}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BoxJob;

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  boxCharacter: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 5,
  },
  // chipTag: {
  //   borderRadius: 8,
  //   paddingVertical: 5,
  //   paddingHorizontal: 5,
  //   backgroundColor: "#fbced4",
  //   width: 50,
  // },

  // textChip: {
  //   textTransform: "uppercase",
  //   color: "red",
  //   fontWeight: "600",
  //   fontSize: 12,
  // },
  boxIcon: {
    width: 30,
    height: 30,
    backgroundColor: "#faf9ff",
    borderRadius: 7,
    marginTop: 10,
  },
  numberBoxIcon: {
    width: 18,
    height: 18,
    backgroundColor: "#faf9ff",
    borderRadius: 10,
    position: "absolute",
    bottom: -9,
    left: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
  },
  content: {
    fontWeight: "600",
    fontSize: 14,
    color: "#9e9ea7",
    marginBottom: 5,
    width: Dimensions.get("window").width - 150,
  },
});

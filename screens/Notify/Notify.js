import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import React from "react"; 
import { DataNotifyContext } from "./Context";
import notifyImage from "../../assets/images/nodata.jpg";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SettingContext } from "../SettingsScreen/Context";
import moment from "moment";
import styleGlobal from '../../assets/css/globalStyles'
import Notify from "../../notifications/test"
const NotificationScreen = ({navigation}) => {
  const { dataNotify } = React.useContext(DataNotifyContext);
  const { options } = React.useContext(SettingContext);
  const LineNotification = ({ title, time,navigation }) => {
    return (
      <TouchableWithoutFeedback onPress={navigation}>
      <View style={[styleGlobal.flexRow, styles.boxContainer]}>
      <View style={[styleGlobal.flexCenter, styles.icon]}>
        <Ionicons name="mail" size={25} color={"#c01e2e"} />
        <View style={[styles.dot]}></View>
      </View>
      <View style={[styles.content]}>
        <Text
          style={[{fontWeight:"600",fontSize:13,textTransform:"uppercase",width:Dimensions.get("window").width - 130}]} 
        >{title}</Text>
        <Text
          style={[{fontSize:11,lineHeight:20,width:Dimensions.get("window").width - 110}]}
        >{"Mô tả đang cập nhật!"}</Text>
        <Text style={[{fontWeight:"600",fontSize:11}]} >{"Ngày: "+moment(time).format("DD/MM/YYYY")}</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
    );
  };
  return (
    <>
    {/* <Notify /> */}
      {dataNotify && dataNotify.length > 0 ? (
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: options.theme === "Sáng" ? "#faf9ff" : "#2a2d41",
          }}
        >
          {dataNotify.map((ele, index) => {
            return (
              <LineNotification
                status={ele.status}
                title={ele.title}
                content={ele.content}
                time={ele.date_start}
                key={index}
                navigation={() => {navigation.navigate("Chi tiết thông báo", {
                  title: ele.title,
                  content: ele.content,  
                  file:ele.file ? ele.file :""
                })}}
              />
            );
          })}
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
        >
          <Image source={notifyImage} alt="/" />
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
            {"Không có thông báo nào!"}
          </Text>
        </View>
      )}
    </>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  boxContainer: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#fff",
    width:Dimensions.get("window").width -30,
    marginHorizontal:15,
    marginTop:15,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 50,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    position: "relative"
  },
  dot:{
    width:10,
    height:10,
    borderRadius:10,
    backgroundColor:'#FD3C4A',
    position:'absolute',
    top:5,
    right:0
  },
  content:{
      marginLeft:10,
      
  }
});

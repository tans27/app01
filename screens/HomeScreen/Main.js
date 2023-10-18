import {
  StyleSheet,
  View, 
  ScrollView,
  StatusBar,
  SafeAreaView, 
} from "react-native";
import Box from "../../components/Box";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styleGlobal from "../../assets/css/globalStyles";
const Main = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView style={{ backgroundColor: "rgba(255, 246, 229, 1)" }}>
      <ScrollView
        style={{ backgroundColor: "#faf9ff" }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
      >
        <View style={{ backgroundColor: "#faf9ff",borderTopRightRadius:20,borderTopLeftRadius:20,}}>
          <View
            style={[
              styleGlobal.flexBetween,
              styleGlobal.px_2,
              {
                flex: 1,  
                marginVertical: 20,
              },
            ]}
          >
            <Box
              icon={
                <Feather
                  name="check-circle"
                  size={35}
                  color={"#c01e2e"}
                ></Feather>
              }
              title="Phê duyệt"
              description="Phê duyệt đi muộn, về sớm, vắng mặt,.."
              navigation={() => navigation.navigate('Phê duyệt')}
              borderColor="#c01e2e"
            />
            <Box
              icon={<Ionicons name="md-calendar" size={35} color={"#c01e2e"} />}
              title="Chấm công"
              description="Lịch sử chấm công, đăng ký nghỉ,..."
              borderColor="#c01e2e"
              navigation={() => navigation.navigate('Lịch sử chấm công')}
            />
          </View>
          <View
            style={[
              styleGlobal.flexBetween,
              styleGlobal.px_2,
              { flex: 1,marginBottom:20},
            ]}
          >
            <Box
              icon={
                <MaterialIcons
                  name="attach-money"
                  size={35}
                  color={"#c01e2e"}
                  backgroundColor="#1b66f6"
                ></MaterialIcons>
              }
              title="Bảng lương"
              description="Tra cứu nội dung chi tiếT bảng lương"
              borderColor="#c01e2e"
              navigation={() => navigation.navigate('Bảng lương')}
            />
             <Box
              icon={
                <MaterialCommunityIcons name="devices" size={35} color={"#c01e2e"}></MaterialCommunityIcons>
              }
              title="Thiết bị"
              description="Quản lý phê duyệt trang thiết bị,..."
              borderColor="#c01e2e"
              navigation={() => navigation.navigate('Quản lý thiết bị')}
            />
          </View>
          <View
            style={[
              styleGlobal.flexBetween,
              styleGlobal.px_2,
              { flex: 1, marginBottom: 20 },
            ]}
          >
            <Box
              icon={
                <Ionicons name="md-layers" size={35} color={"#c01e2e"}></Ionicons>
              }
              title="Công việc"
              description="Theo dõi, Quản lý công việc cá nhân"
              borderColor="#c01e2e"
              navigation={() => navigation.navigate('Công việc chung')}
            />
            <Box
              icon={
                <MaterialIcons name="connect-without-contact" size={35} color={"#c01e2e"}></MaterialIcons>
              }
              title="IT Helpdesk"
              description="Đánh giá, quản lý, bảo trì trang thiết bị"
              borderColor="#c01e2e" 
              navigation={() => navigation.navigate('IT Helpdesk')}
            />
          </View>
          <View
            style={[
              styleGlobal.flexBetween,
              styleGlobal.px_2,
              { flex: 1, marginBottom: 40 },
            ]}
          >
           
            <Box
              icon={
                <Ionicons
                  name="ios-chatbox-ellipses"
                  size={35}
                  color={"#c01e2e"}
                  backgroundColor="#12a4f6"
                ></Ionicons>
              }
              title="Đánh giá"
              description="Đánh giá KPI, Hiệu suất của bạn,..."
              borderColor="#c01e2e"
              navigation={() => navigation.navigate('Đánh giá KPI')}
            />
             <Box
              icon={
                <Ionicons name="newspaper" size={35} color={"#c01e2e"}></Ionicons>
              }
              title="Tin tức"
              description="Cập nhật công văn, tin tức nội bộ mới nhất"
              borderColor="#c01e2e" 
              navigation={() => navigation.navigate('Tin tức')}
            />
            
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
      {/* <View style={[styles.shadowMenu, { height: 300 }]}></View> */}
    </>
  );
};

export default Main;
const styles = StyleSheet.create({});

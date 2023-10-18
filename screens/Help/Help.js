import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styleGlobal from "../../assets/css/globalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
const Help = ({ navigation }) => {
  const data = [
    {
      category: "Nhân viên",
      icon: (
        <Ionicons name="md-people-circle-outline" size={30} color="#0D0E0F" />
      ),
      data: [
        {
          question: "Tạo nhân viên mới",
          answer: (
            <View>
              <Text>
                Để tạo mới thông tin nhân viên mới, thực hiện các bước sau:
              </Text>
              <Text style={{ fontWeight: "700" }}>Bước 1:</Text>
              <Text> 
                Đăng nhập vào link: http://hrm.diligo.vn/web/login (Tài khoản
                đăng nhập do bên Ban công nghệ cung cấp)
              </Text>
              <Text style={{ fontWeight: "700" }}>Bước 2:</Text>
              <Text>{`Vào “Nhân viên” -> “Tạo”`}</Text>
              <Text style={{ fontWeight: "700" }}>Bước 3:</Text>
              <Text>
                {` Nhập các thông tin cho nhân viên mới
( Các thông tin có dấu * là thông tin bắt buộc phải nhập)
`}
                <Text style={{ fontWeight: "700" }}>Bước 4:</Text>
                <Text>
                  {`Bấm “Lưu” để tạo nhân viên mới. Ngược lại bấm “Hủy bỏ” để hủy tạo nhân viên.
`}
                </Text>
              </Text>
            </View>
          ),
        },
        {
          question: "Sửa thông tin nhân viên",
          answer: (
            <View>
              <Text>
              Để sửa thông tin nhân viên, thực hiện theo các bước sau:

              </Text>
              <Text style={{ fontWeight: "700" }}>Bước 1:</Text>
              <Text> 
               {`Vào module Nhân viên -> Chọn nhân viên muốn sửa thông tin
`}
              </Text>
              <Text style={{ fontWeight: "700" }}>Bước 2:</Text>
              <Text>{`Chọn “ Sửa” -> Sửa những trường thông tin cần sửa trong phạm vi điều kiện được phép sửa`}</Text>
              <Text style={{ fontWeight: "700" }}>Bước 3:</Text>
              <Text>
                {`Chọn “Lưu” để lưu thông tin đã sửa. Ngược lại chọn “ Hủy bỏ” để hủy hành động sửa thông tin nhân viên.`}
                
              </Text>
            </View>
          ),
        },
        {
          question: "Lưu trữ thông tin nhân viên",
          answer: (
            <View>
              <Text>
              Để lưu trữ thông tin nhân viên đã thôi việc, thực hiện các bước sau:
              </Text>
              <Text style={{ fontWeight: "700" }}>Bước 1:</Text>
              <Text> 
               {`Vào Module nhân viên -> Chọn nhân viên muốn lưu trữ
`}
              </Text>
              <Text style={{ fontWeight: "700" }}>Bước 2:</Text>
              <Text>{` Click “ Hành động” -> chọn “Lưu trữ”`}</Text>
              <Text style={{ fontWeight: "700" }}>Bước 3:</Text>
              <Text>
                {`Điền thông tin vào form lý do lưu trữ thông tin nhân viên`}
                
              </Text>
            </View>
          ),
        },
      ],
    },
    {
      category: "Thông báo/ Quyết định",
      icon: (
        <Ionicons name="md-people-circle-outline" size={24} color="#0D0E0F" />
      ),
      data: [
        {
          question: "Thông báo ándadaoidasjod",
          answer: "Câu trả lời 1",
        },
        {
          question: "Txử yiadiasud",
          answer: "Câu trả lời 1",
        },
      ],
    },
    {
      category: "Kỷ luật",
      icon: (
        <Ionicons name="md-people-circle-outline" size={24} color="#0D0E0F" />
      ),
      data: [
        {
          question: "Đây là câu hỏi 1",
          answer: "ádasdasdasd",
        },
      ],
    },
    {
      category: "Khen thưởng",
      icon: (
        <Ionicons name="md-people-circle-outline" size={24} color="#0D0E0F" />
      ),
      data: [
        {
          question: "Đây là câu hỏi 1",
          answer: "Câu trả lời 1",
        },
      ],
    },
    {
      category: "Phòng/ Ban",
      icon: (
        <Ionicons name="md-people-circle-outline" size={24} color="#0D0E0F" />
      ),
      data: [
        {
          question: "Đây là câu hỏi 1",
          answer: "Câu trả lời 1",
        },
      ],
    },
    {
      category: "Nghỉ việc",
      icon: (
        <Ionicons name="md-people-circle-outline" size={24} color="#0D0E0F" />
      ),
      data: [
        {
          question: "Đây là câu hỏi 1",
          answer: "Câu trả lời 1",
        },
      ],
    },
    {
      category: "Vị trí công việc",
      icon: (
        <Ionicons name="md-people-circle-outline" size={24} color="#0D0E0F" />
      ),
      data: [
        {
          question: "Đây là câu hỏi 1",
          answer: "Câu trả lời 1",
        },
      ],
    },
    {
      category: "Ứng viên",
      icon: (
        <Ionicons name="md-people-circle-outline" size={24} color="#0D0E0F" />
      ),
      data: [
        {
          question: "Đây là câu hỏi 1",
          answer: "Câu trả lời 1",
        },
      ],
    },
  ];
  const Row = ({ category, navigation, icon }) => {
    return (
      <TouchableOpacity onPress={navigation}>
        <View
          style={[
            styleGlobal.flexBetween,
            {
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderBottomColor: "#e3e3e3",
              borderBottomWidth: 1,
            },
          ]}
        >
          <View style={[styleGlobal.flexStart]}>
            <View style={[styleGlobal.flexCenter, styles.boxIcon]}>{icon}</View>
            <Text style={[styles.title]}>{category}</Text>
          </View>
          <View>
            <Feather name="chevron-right" size={24} color="#e66426" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={[{ flex: 1, backgroundColor: "#fff" }]}>
      {data.map((ele, index) => {
        return (
          <Row
            key={index}
            category={ele.category}
            icon={ele.icon}
            navigation={() => {
              navigation.navigate("Chi tiết Trợ giúp", {
                data: ele.data,
                title: ele.category,
              });
            }}
          />
        );
      })}
    </ScrollView>
  );
};

export default Help;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
  boxIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "red",
  },
});

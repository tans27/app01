import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import styleGlobal from "../../assets/css/globalStyles";
import { DetailJobContext } from "./Context";
const Tabs = () => {
  const { status, setStatus } = useContext(DetailJobContext);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={[styleGlobal.flexRow, styles.boxContainer]}>
        <TouchableOpacity
          style={[
            styleGlobal.flexCenter,
            styleGlobal.mr_1,
            status === "Công việc mới" && styles.activeChip,
            { borderColor: "#c01e2e", borderWidth: 1, borderRadius: 5 },
          ]}
          onPress={() => setStatus("Công việc mới")}
        >
          <View style={[styleGlobal.flexCenter]}>
            <Text
              style={[
                {
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  color: status === "Công việc mới" ? "#fff" : "#c01e2e",
                },
              ]}
            >
              Công việc mới
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styleGlobal.flexCenter,
            styleGlobal.mr_1,
            status === "Đang xử lý" && styles.activeChip,
            { borderColor: "#c01e2e", borderWidth: 1, borderRadius: 5 },
          ]}
          onPress={() => setStatus("Đang xử lý")}
        >
          <View style={[styleGlobal.flexCenter]}>
            <Text
              style={[
                {
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  color: status === "Đang xử lý" ? "#fff" : "#c01e2e",
                },
              ]}
            >
              Đang xử lý
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styleGlobal.flexCenter,
            styleGlobal.mr_1,
            status === "Đã hoàn thành" && styles.activeChip,
            { borderColor: "#c01e2e", borderWidth: 1, borderRadius: 5 },
          ]}
          onPress={() => setStatus("Đã hoàn thành")}
        >
          <View style={[styleGlobal.flexCenter]}>
            <Text
              style={[
                {
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  color: status === "Đã hoàn thành" ? "#fff" : "#c01e2e",
                },
              ]}
            >
              Đã hoàn thành
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styleGlobal.flexCenter,
            status === "Kiểm soát" && styles.activeChip,
            { borderColor: "#c01e2e", borderWidth: 1, borderRadius: 5,marginRight:10 },
          ]}
          onPress={() => setStatus("Kiểm soát")}
        >
          <View style={[styleGlobal.flexCenter]}>
            <Text
              style={[
                {
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  color: status === "Kiểm soát" ? "#fff" : "#c01e2e",
                },
              ]}
            >
              Kiểm soát
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styleGlobal.flexCenter,
            status === "Huỷ" && styles.activeChip,
            { borderColor: "#c01e2e", borderWidth: 1, borderRadius: 5 },
          ]}
          onPress={() => setStatus("Huỷ")}
        >
          <View style={[styleGlobal.flexCenter]}>
            <Text
              style={[
                {
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  color: status === "Huỷ" ? "#fff" : "#c01e2e",
                },
              ]}
            >
             Huỷ
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: "#faf9ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  activeChip: {
    backgroundColor: "#c01e2e",
  },
});

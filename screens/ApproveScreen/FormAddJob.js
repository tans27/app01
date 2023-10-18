import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useContext } from "react";
import FormCheck from "../../components/FormCheck";
import Button from "../../components/ButtonCustom";
import { ApproveContext } from "./Context";
import {dataTitle,dataAddress,dataRoom,dataType} from '../../data/dataFormApproved'
const FormAddJob = () => {
  const { questionFilter } = useContext(ApproveContext);
  
  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: "#fff" }]}>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={[{ paddingHorizontal: 10 }]}>
          <View
            style={[
              { backgroundColor: "#faf9ff", padding: 10, borderRadius: 10 },
            ]}
          >
            <Text
              style={[
                {
                  fontSize: 19,
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: 20,
                  marginTop: 10,
                },
              ]}
            >
              Chọn kiểu
            </Text>
            <FormCheck target="title"  data={dataTitle} />
          </View>
          <View
            style={[
              { backgroundColor: "#faf9ff", padding: 10, borderRadius: 10 },
            ]}
          >
            <Text
              style={[
                {
                  fontSize: 19,
                  fontWeight: "600",
                  textAlign: "center",
                  marginVertical: 20,
                },
              ]}
            >
              Chọn loại văn bản
            </Text>
            <FormCheck target="type"  data={dataType} />
          </View>
          <View
            style={[
              { backgroundColor: "#faf9ff", padding: 10, borderRadius: 10 },
            ]}
          >
            <Text
              style={[
                {
                  fontSize: 19,
                  fontWeight: "600",
                  textAlign: "center",
                  marginVertical: 20,
                },
              ]}
            >
              Nơi lưu trữ
            </Text>
            <FormCheck target="address"  data={dataAddress} />
          </View>
          <View
            style={[
              { backgroundColor: "#faf9ff", padding: 10, borderRadius: 10 },
            ]}
          >
            <Text
              style={[
                {
                  fontSize: 19,
                  fontWeight: "600",
                  textAlign: "center",
                  marginVertical: 20,
                },
              ]}
            >
              Nhóm nội dung
            </Text>
            <FormCheck target="room"  data={dataRoom} />
          </View>
        </View>
      </ScrollView>
      <View style={[{ position: "absolute", bottom: 10, marginLeft: 20 }]}>
        <Button
          onPress={() => Alert.alert("ok")}
          title="Gửi phê duyệt"
          style="solid"
          active={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default FormAddJob;

const styles = StyleSheet.create({});

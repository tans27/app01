import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  Text,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import styleGlobal from "../../assets/css/globalStyles";
import Button from "../../components/ButtonCustom";
import Input from "../../components/InputCustom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ITHelpDeskContext } from "./Context";
import DropDownCustom from "../../components/DropDownCustom";
const AddDevice = ({ navigation }) => {
  const [type, setType] = useState([]);
  const { options, setOptions } = useContext(ITHelpDeskContext);
  const getITHelpDesk = async () => {
    try {
      const response = await axios.get(
        "http://test.diligo.vn:15000/api/v1/type_maintenance",
        {}
      );
      setType(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getITHelpDesk();
  }, []);  
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate("Thành công", {
      text: "Đã thêm thiết bị",
    });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? "60" : "height"}
        style={[
          styles.container,
          {
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: Dimensions.get("window").height,
            backgroundColor: "#fff",
          },
        ]}
      >
        <ScrollView style={[styleGlobal.p_2, { width: "100%" }]}>
          <View style={[{ paddingBottom: 150 }]}>
          <Text style={{marginLeft:10,marginBottom:5,fontWeight:'600'}}>{'Nội dung'}</Text>
            <Input placeholder="Yêu cầu hỗ trợ" name="title" control={control} />
            <View style={{ zIndex: 5, marginBottom: 20 }}>
              <DropDownCustom
                placeholder={"Loại dịch vụ"}
                listOption={[
                  ...new Set(
                    type.map(function (el) {
                      return el.type;
                    })
                  ),
                ]}
                setOptions={setOptions}
                options={options}
                targetKey={"type"}
              />
            </View>
            <View style={{ zIndex: 5, marginBottom: 20 }}>
              <DropDownCustom
                placeholder={"Dịch vụ chi tiết"}
                listOption={[
                  ...new Set(
                    type.map(function (el) {
                      if (el.type === options.type) {
                        return el.name ;
                      }
                    })
                  ),
                ]}
                setOptions={setOptions}
                options={options}
                targetKey={"name"}
              />
            </View>
            <View style={{ zIndex: 5, marginBottom: 20 }}>
            <DropDownCustom
                placeholder={"Dịch vụ con"}
                listOption={type.filter(e=> ( e.name === options.name && e.type === options.type)).length > 0 ? type.filter(e=> ( e.name === options.name && e.type === options.type))[0].area.map(c=> {return c.name}) : []}
                setOptions={setOptions}
                options={options}
                targetKey={"area"}
              />
            </View>
            <View style={{ zIndex: 5, marginBottom: 20 }}>
              <DropDownCustom
                placeholder={"Bộ phận tiếp nhận"}
                listOption={["Công nghệ & Kiểm soát"]}
                setOptions={setOptions}
                options={options}
                targetKey={"team_maintain"}
              />
            </View>
            <View style={{ zIndex: 5, marginBottom: 20 }}>
              <DropDownCustom
                placeholder={"Đội tiếp nhận"}
                listOption={["Hạ tầng mạng & viễn thông","Phát triển và vận hành ứng dụng"]}
                setOptions={setOptions}
                options={options}
                targetKey={"area"}
              />
            </View>
            <View style={{ zIndex: 5, marginBottom: 20 }}>
              <DropDownCustom
                placeholder={"Người phụ trách"}
                listOption={["Nguyễn Hữu Chí","Nguyễn Đức Hoằng"]}
                setOptions={setOptions}
                options={options}
                targetKey={"area"}
              />
            </View>
            <Input
              placeholder="Mô tả chi tiết"
              name="description"
              multiline={true}
              numberOfLines={5}
              control={control}
            />
          </View>
        </ScrollView>
        <View style={[{ marginHorizontal: 20 }]}>
          <Button
            onPress={handleSubmit(onSubmit)}
            title="Tạo yêu cầu"
            style="solid"
            active={false}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default AddDevice;

const styles = StyleSheet.create({});

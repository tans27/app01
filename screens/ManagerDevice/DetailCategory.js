import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { searchData } from "../../extensions/searchData";
import { ManagerDeviceContext } from "./Context";
import styleGlobal from "../../assets/css/globalStyles";
import Feather from "react-native-vector-icons/Feather";
import Row from "./Row";
const DetailCategory = ({ navigation }) => {
  const { dataManagerDevice } = useContext(ManagerDeviceContext);
  const [value, setValue] = useState("");
  const [targetSearch] = useState(["name"]);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Chi tiết thiết bị", {
          code: item.code,
        })
      }
    >
      <Row
        name={item.name}
        code={item.code}
        image={item.image_device}
        dateProvider={item.date_import}
        data={item}
        serial={item.serial}
        employee={item.employee.name}
      />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: "#fff" }]}>
      <View style={[styleGlobal.flexRow]}>
        <View
          style={[
            styleGlobal.inputBox,
            styleGlobal.flexBetween,
            { alignItems: "baseline", paddingHorizontal: 20 },
          ]}
        >
          <TextInput
            style={[
              styleGlobal.input,
              { width: Dimensions.get("window").width - 100 },
            ]}
            keyboardType={"default"}
            onChangeText={(val) => setValue(val)}
            placeholder={"Tìm kiếm thiết bị"}
            placeholderTextColor="#91919f"
            defaultValue={value}
          ></TextInput>
        </View>
        <TouchableOpacity style={[styles.icon]}>
          <Feather name="search" size={20} color="#91919f" />
        </TouchableOpacity>
      </View>
      <View style={[{ marginLeft: 20 }]}>
        <FlatList
          data={searchData(dataManagerDevice, targetSearch, value)}
          renderItem={renderItem}
          keyExtractor={(item) => item.code}
        />
      </View>
    </SafeAreaView>
  );
};

export default DetailCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  icon: {
    position: "absolute",
    right: 35,
    top: 15,
  },
});

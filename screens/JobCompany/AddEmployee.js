import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity, 
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState, useContext } from "react";
import Feather from "react-native-vector-icons/Feather";
import styleGlobal from "../../assets/css/globalStyles";
import Avatar from "../../components/Avatar";
import { searchData } from "../../extensions/searchData";
import { arrayRemove } from "../../extensions/arrayRemoveSameID";
import { DetailJobContext } from "./Context"; 
import LineEmploy from '../../components/LineEmployee'
const AddEmployee = () => {
  const {loading, employees,allEmploy, setEmployees } = useContext(DetailJobContext);
  const [value, setValue] = useState("");
  const [targetSearch] = useState(["name"]);
  
  // console.log(allEmploy)
  const renderItem = ({ item }) => (
    <LineEmploy
      name={item.name}
      key={item.id}
      avatar={item.avatar}
      position={item.inforWork[0].position.name}
      press={() => {
        !employees.find(o => o.id === item.id)
          ? setEmployees((prevState) => [...prevState, {id:item.id,name:item.name,avatar:item.avatar}])
          : setEmployees(arrayRemove(employees,item.id).filter((e) => e.id !== item.id));
      }}
      active={employees.find(o => o.id === item.id)}
    />
  );
  return (
    <View style={[{ flex: 1, backgroundColor: "#fff" }]}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          keyboardType={"default"}
          onChangeText={(val) => setValue(val)}
          placeholder={"Tìm kiếm nhân viên"}
          placeholderTextColor="#91919f"
          defaultValue={value}
        />
        <TouchableOpacity 
          style={styles.icon}
        >
          <Feather name="search" size={20} color="#91919f" />
        </TouchableOpacity>
      </View>
      { loading === false && 
      <FlatList
        data={searchData(allEmploy, targetSearch, value)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />}
    </View>
  );
};

export default AddEmployee;

const styles = StyleSheet.create({
  inputBox: {
    position: "relative",
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: "#e6e6ef",
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  icon: {
    position: "absolute",
    right: 35,
    top: 15,
  },

  
  
});

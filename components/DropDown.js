import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
const DropDown = ({valueDefault,listOption}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(valueDefault);
  
  return ( 
    <DropDownPicker
      open={open}
      value={value}
      items={listOption}
      ArrowUpIconComponent={({style}) => <Icon name='chevron-up' size={20} color={"#91919F"} style={style} />}
      ArrowDownIconComponent={({style}) => <Icon name='chevron-down' size={20} color={"#91919F"} style={style} />}
      setOpen={setOpen}
      listMode="SCROLLVIEW"
      setValue={setValue} 
      placeholder={valueDefault}
      placeholderStyle={{
        color: "#91919F", 
      }}
      style={{
        height: 50,
        borderRadius: 15,
        marginBottom: 20,
        borderColor: "#e6e6ef",
        borderWidth: 1,
        paddingHorizontal: 15,
      }} 
      dropDownContainerStyle={{
        backgroundColor: "#fff", 
        borderRadius: 15,
        borderColor: "#e6e6ef",
        borderWidth: 1,  
        height:130,
      }}
      dropDownDirection="BOTTOM"
    />
  );
};

export default DropDown;

const styles = StyleSheet.create({ 
});

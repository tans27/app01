import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useContext,useEffect } from "react";
import styleGlobal from "../assets/css/globalStyles";
import Feather from "react-native-vector-icons/Feather";
import { ApproveContext } from "../screens/ApproveScreen/Context";
const Count = ({ data }) => {
  const {listProductAdd, setListProductAdd } = useContext(ApproveContext);
  
  const [count, setCount] = useState(1);
  useEffect(() => {
    if(listProductAdd.find(x => x.key === data.key)) {
      setCount(listProductAdd[listProductAdd.findIndex(item => item.key === data.key)].quantity)
    }
  },[data.id,listProductAdd])
  return (
    <View style={[styleGlobal.flexCenter, { position: "absolute", right: 0 }]}>
      {count > 1 && (
        <>
          <TouchableOpacity
            onPress={() => {
              setCount(count - 1); 
              if(listProductAdd.find(x => x.key === data.key)) {
                listProductAdd[listProductAdd.findIndex(item => item.key === data.key)].quantity-=(1)
                setListProductAdd((prevState) => [
                  ...prevState
                ]);   
              } 
            }}
            style={[styleGlobal.flexCenter, styles.button]}
          >
            <Feather name="minus" size={15} color={"#9e9ea7"} />
          </TouchableOpacity>
          <Text
            style={[{ fontSize: 15, marginHorizontal: 10, fontWeight: "600" }]}
          >
            {count-1}
          </Text>
        </>
      )}
      <TouchableOpacity
        onPress={() => {
          setCount(count + 1);
          if(listProductAdd.find(x => x.key === data.key)) {
            listProductAdd[listProductAdd.findIndex(item => item.key === data.key)].quantity+=(1)
            setListProductAdd((prevState) => [
              ...prevState
            ]); 
          }
         else {
          setListProductAdd((prevState) => [
            ...prevState,
            {
              key: data.key,
              name: data.name,
              image: data.image,
              quantity: count,
            },
          ]);
         }
        }}
        style={[
          styleGlobal.flexCenter,
          styles.button,
          { backgroundColor: "#c01e2e" },
        ]}
      >
        <Feather name="plus" size={15} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
};

export default Count;

const styles = StyleSheet.create({
  button: {
    width: 20,
    height: 20,
    backgroundColor: "#faf9ff",
    borderRadius: 20,
  },
});

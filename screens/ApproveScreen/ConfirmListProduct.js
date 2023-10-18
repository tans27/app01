import { StyleSheet, Text, View,Dimensions,Image,TouchableOpacity } from 'react-native'
import React,{useContext,useState} from 'react'
import styleGlobal from '../../assets/css/globalStyles'
import { ApproveContext} from './Context'
import Button from '../../components/ButtonCustom'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SwipeListView } from "react-native-swipe-list-view"; 
const ConfirmListProduct = ({navigation}) => {
  const {listProductAdd,setListProductAdd} = useContext(ApproveContext) 
  const Card = ({name,image,quantity}) => {
    return<View style={[styleGlobal.flexStart,styles.box,{alignItems:"start",justifyContent: "flex-start",marginHorizontal:10,}]}>
    <Image style={[styleGlobal.flexCenter,styles.image]} source={image} alt='/'/>
    <View style={[styleGlobal.flexStart,{alignItems:"center",height:80}]}>
    <View style={[styleGlobal.flexCenter,{justifyContent:"center",alignItems: "center",height:80,width:Dimensions.get("window").width - 120}]}>
      <View style={[styleGlobal.flexCenter,styles.button,styleGlobal.backgroundColorPrimary]}>
          <Text style={[{color:"#fff"}]}>{quantity}</Text>
      </View>
      
        <Text style={[styles.title]} numberOfLines={1}>x {name}</Text> 
    </View>   
    </View>
</View> 
  }
  const renderItem = ({ item }) => (
    <Card
      name={item.name} 
      key={item.key}
      image={item.image} 
      quantity={item.quantity}
    />
  );
  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}> 
      <TouchableOpacity
        style={[styles.actionButton, styles.deleteBtn]}
        onPress={() => deleteItem(rowMap, data.item.key)}
      >
       <View style={[styleGlobal.flexCenter, styles.boxIcon]}>
            <MaterialCommunityIcons name="trash-can" size={30} color={"#fd3c4a"}></MaterialCommunityIcons>
          </View>
      </TouchableOpacity>
    </View>
  );
  const closeItem = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteItem = (rowMap, rowKey) => {
    closeItem(rowMap, rowKey);
    const newData = [...listProductAdd];
    const prevIndex = listProductAdd.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListProductAdd(newData);
  };
  const onItemOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };
  return (
    <View style={[{flex:1, backgroundColor: "#fff"}]}> 
      <SwipeListView
          data={listProductAdd}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={0}
          rightOpenValue={-65}
          previewRowKey={"0"}
          previewOpenValue={0}
          previewOpenDelay={2000}
          onRowDidOpen={onItemOpen}
        />
      <View style={[styleGlobal.px_2]}>
      <Button  onPress={() => navigation.navigate("Mua sắm & Cung ứng")}
                      title="Xác nhận"
                      style="solid"
                      active={false} />
      </View>
    </View>
  )
}

export default ConfirmListProduct

const styles = StyleSheet.create({
  box:{ 
    borderWidth:1,
    borderColor:"rgba(0,0,0,0.1)",
    borderRadius:10,
    marginBottom: 10, 
    backgroundColor: "#fff",
},
image:{
    width:80,
    height:80,
    backgroundColor:"orange",
    marginRight:10,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
},
title:{
    fontSize:13,
    fontWeight:"600",
    width:Dimensions.get("window").width - 150
}, 
button: {
  width: 25,
  height: 25, 
  borderRadius: 20,
  marginRight:5,
},
container: {
  backgroundColor: "#fff",
  flex: 1,
},
list: {
  color: "#FFF",
}, 

boxIcon: {
  backgroundColor: "#FDD5D7",
  borderRadius: 10,
  width: 50,
  height: 50,
},
rowFront: {
  backgroundColor: "#fff",
},
rowBack: {
  alignItems: "center",
  backgroundColor: "#fff",
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  paddingLeft: 5,
},
actionButton: {
  alignItems: "center",
  bottom: 0,
  justifyContent: "center",
  position: "absolute",
  top: 0,
  width: 75,
}, 
deleteBtn: { 
  right: 0,
},
})
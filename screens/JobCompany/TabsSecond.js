import { StyleSheet, Text, View,Dimensions,TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import styleGlobal from '../../assets/css/globalStyles'
import {DetailJobContext} from './Context'
const TabsSecond = () => {
    const {tabs,setTabs} = useContext(DetailJobContext)
  return (
    <View style={[styles.container,styleGlobal.flexBetween]}>
        <TouchableOpacity onPress={() => setTabs("Nhiệm vụ")} style={[styleGlobal.flexCenter,styles.box,{backgroundColor:tabs === "Nhiệm vụ"?"#c01e2e":"#fff"}]}>
            <Text style={[styles.text,{color:tabs === "Nhiệm vụ"?"#fff":"#c01e2e"}]}>Nhiệm vụ</Text>
        </TouchableOpacity>
         
        <TouchableOpacity onPress={() => setTabs("Ghi chú")} style={[styleGlobal.flexCenter,styles.box,{backgroundColor:tabs === "Ghi chú"?"#c01e2e":"#fff"}]}>
            <Text style={[styles.text,{color:tabs === "Ghi chú"?"#fff":"#c01e2e"}]}>Ghi chú</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TabsSecond

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get("window").width - 40,
        marginHorizontal:20,
        backgroundColor: "#fff",
        borderRadius:10,
        padding:10,
    },
    box:{
        borderColor:'#c01e2e',
        borderRadius:10,
        height:40,
        width:(Dimensions.get("window").width - 80) / 2,
        borderWidth:2,
        marginHorizontal:3,
    },
    text:{
        fontSize:17,
        fontWeight: "600",
    }
})
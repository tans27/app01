import { StyleSheet, Text, View,Dimensions,Image,Alert ,TouchableOpacity} from 'react-native'
import React from 'react'
import styleGlobal from '../assets/css/globalStyles'
import {formatMoney} from '../extensions/formatMoney'
import Count from '../components/Count' 
const CardProduct = ({name,money,image,data}) => {
  return (
      <> 
    <View style={[styleGlobal.flexStart,styles.box,{alignItems:"start",justifyContent: "flex-start",marginHorizontal:20,}]}> 
        <Image style={[styleGlobal.flexCenter,styles.image]} source={image} alt='/'/> 
        <View style={[styleGlobal.flexStart,{alignItems:"center",height:80}]}>
        <View style={[{justifyContent:"center",alignItems: "flex-start",height:80,width:Dimensions.get("window").width - 140}]}>
            <Text style={[styles.title]} numberOfLines={1}>{name}</Text>
            <Text style={[styles.price]}>{formatMoney(money) +" VNĐ"}</Text>
        </View>  
        <Count data={data}/> 
        </View>
    </View> 
    </>
  )
}

export default CardProduct

const styles = StyleSheet.create({
    box:{ 
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.1)",
        borderRadius:10,
        marginBottom: 10, 
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
        width:Dimensions.get("window").width - 200
    },
    price:{
        fontSize:11,
        fontWeight:"500",
        marginTop:10,                                                                                                                                                      color:"#c01e2e"
    }, 
})
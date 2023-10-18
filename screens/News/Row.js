import { StyleSheet, Text, View,Dimensions,Image,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styleGlobal from '../../assets/css/globalStyles'
import moment from 'moment'
const Row = ({image,title,navigation,tag,date}) => {
  return (
      <TouchableWithoutFeedback onPress={navigation}>
    <View style={[styleGlobal.flexCenter,{marginBottom:30,borderBottomWidth:1,borderBottomColor:'#faf9ff'}]}> 
           <Image style={styles.image} source={{uri:image}} alt={title}/> 
       <View style={[styleGlobal.flexRow,{flexDirection:"column",marginLeft:8}]}>
           <View style={[styleGlobal.flexCenter,styleGlobal.backgroundColorPrimary,{borderRadius:20,paddingVertical:3,paddingHorizontal:8,alignSelf:"flex-start"}]}>
               
            <Text style={[styles.text,{color:"#fff"}]}>{tag ? tag :"Mới"}</Text>
           </View>
            <Text style={[styles.title]} numberOfLines={2}>{title}</Text>
            <View style={[styleGlobal.flexRow]}>
                <Text  style={[styles.text,styleGlobal.colorPrimary]}>{moment(date).format("DD/MM/YYYY")}</Text> 
            </View>
        </View>
    </View></TouchableWithoutFeedback>
  )
}

export default Row

const styles = StyleSheet.create({
    image:{
        width:Dimensions.get("window").width / 3,
        height: Dimensions.get("window").width / 3 - 30,
        borderRadius:10,
        backgroundColor:"orange"
    },
    text:{
        fontSize:12, 
        fontWeight:'500',
    },
    title:{
        fontSize:18, 
        fontWeight:'600',
        width:Dimensions.get("window").width / 3 * 2 - 40 ,
        marginVertical:7,
    }
})
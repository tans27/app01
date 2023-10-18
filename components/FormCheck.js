import { StyleSheet, Text, View,TouchableWithoutFeedback } from 'react-native'
import React,{useContext} from 'react'
import styleGlobal from '../assets/css/globalStyles'
import { ApproveContext } from "../screens/ApproveScreen/Context";
const FormCheck = ({data,onPress,target}) => {
    const { questionFilter,setQuestionFilter } = useContext(ApproveContext);
    console.log(Object.keys(questionFilter).map(k => questionFilter[k]))
    const Row = ({name}) => {
        return <TouchableWithoutFeedback onPress={() =>{ 
            setQuestionFilter(pre => [...pre,name] )
            // if(target === 'room') {
            //     setQuestionFilter({
            //         ...questionFilter,
            //         room:name,
            //     })
            // }
            // else if(target === 'title') {
            //     setQuestionFilter({
            //         ...questionFilter,
            //         title:name,
            //     })
            // }
            // else if(target === 'address') {
            //     setQuestionFilter({
            //         ...questionFilter,
            //         address:name,
            //     })
            // }
            // else if(target === 'type') {
            //     setQuestionFilter({
            //         ...questionFilter,
            //         type:name,
            //     })
            // }
            // else {
            //     return  false;
            // }
            
        }}>
             <View style={[styleGlobal.flexStart,styles.container]}>
            <View style={[styleGlobal.flexCenter,styles.dotBox]}>
                    <View style={[styleGlobal.flexCenter,styles.dot,{backgroundColor:(name === name) ? '#c01e2e' : "#fff"}]}></View>
            </View>
            <View>
                <Text style={[styles.text,{fontWeight: "500"}]}>{name}</Text>
            </View>
        </View></TouchableWithoutFeedback>
    }
  return (
    <View>
        {data.map((ele, index) => {
            return  <Row name={ele.name} key={index} onPress={onPress}/>
        })} 
    </View>
  )
}

export default FormCheck

const styles = StyleSheet.create({
    dot:{
        width:16, height:16, borderRadius:10 
    },
    dotBox:{
        backgroundColor:"#fff",
        width:24, height:23, borderRadius:20,borderWidth:2, borderColor:"#c01e2e"
    },
    container:{
        backgroundColor:"#fff",
        borderRadius:10,
        height:50, alignItems: "center",
        paddingLeft:15,
        marginBottom:10,
    },
    text:{
        fontSize:17,
        marginLeft:15,
    }
})
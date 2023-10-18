import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Input from '../../components/InputCustom'
import styleGlobal from '../../assets/css/globalStyles'
import { useForm } from "react-hook-form";
const ManagerJob = () => {
    const { control } = useForm(); 
    return (
        <View style={[styleGlobal.p_2,{flex:1,backgroundColor: "#fff" }]}> 
        <Input placeholder={"TÌm kiếm công việc"} name="card" control={control} />
        <View style={[styleGlobal.flexBetween]}>
            <TouchableOpacity style={[styleGlobal.flexCenter,{backgroundColor: "#e66426",borderRadius: 5}]} onPress={() => alert("OK")}>
                <View style={[styleGlobal.flexCenter]}>
                    <Text style={[{paddingVertical:8,paddingHorizontal: 8,color:"#fff"}]}>Chưa xong</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styleGlobal.flexCenter,{backgroundColor: "#e66426",borderRadius: 5}]} onPress={() => alert("OK")}>
                <View style={[styleGlobal.flexCenter]}>
                    <Text style={[{paddingVertical:8,paddingHorizontal: 8,color:"#fff"}]}>Đã xong</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styleGlobal.flexCenter,{backgroundColor: "#e66426",borderRadius: 5}]} onPress={() => alert("OK")}>
                <View style={[styleGlobal.flexCenter]}>
                    <Text style={[{paddingVertical:8,paddingHorizontal: 8,color:"#fff"}]}>Đang làm</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styleGlobal.flexCenter,{backgroundColor: "#e66426",borderRadius: 5}]} onPress={() => alert("OK")}>
                <View style={[styleGlobal.flexCenter]}>
                    <Text style={[{paddingVertical:8,paddingHorizontal: 8,color:"#fff"}]}>Đã hoàn thành</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default ManagerJob

const styles = StyleSheet.create({})
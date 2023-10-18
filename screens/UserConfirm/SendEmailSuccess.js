import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions} from 'react-native'
import React from 'react'
import styleGlobal from '../../assets/css/globalStyles'  
import Button from "../../components/ButtonCustom";
import sendEmail from '../../assets/images/introscreen/sendMail.png'
const SendEmailSuccess = ({navigation,route}) => {
  return (
    <SafeAreaView
      style={[
        styleGlobal.backgroundColorTheme,
        { flex: 1 },
      ]}
    >
      <View style={[styles.container,{justifyContent:"space-between",flex:1}]}>
         <View>
         <Image source={sendEmail} style={styles.image}/>
        <Text style={[{fontWeight:"700"},styles.title]}>{"Thông tin đã được gửi"}</Text>
        <Text style={styles.text}>{`Kiểm tra email ${route.params.email} và lấy lại mật khẩu của bạn!`}</Text> 
         </View>
        <Button onPress={() =>navigation.navigate("Đăng nhập")} title="Quay lại đăng nhập" style="solid" />
          
      </View>
    </SafeAreaView>
  )
}

export default SendEmailSuccess

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        marginHorizontal: 20,
      },
      title:{
        fontSize:25,
        textAlign: 'center',  
        marginTop:20,
        marginBottom:25,
      }, 
      text:{
        textAlign: 'center',
        fontSize:15,
        marginBottom:25,
      },
      image:{
        width:Dimensions.get("window").width - 100,
      height:Dimensions.get("window").width - 100,
      }
})
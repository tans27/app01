import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import styleGlobal from '../../assets/css/globalStyles' 
import Input from "../../components/InputCustom";
import Button from "../../components/ButtonCustom";
import { useForm } from "react-hook-form";
import { validateEmail } from '../../extensions/validateEmail'
const ForgotPassword = ({navigation}) => {
  const { control, handleSubmit } = useForm(); 
  const onSubmit = (data) => {
    if(validateEmail(data.emailReset)) { 
      navigation.navigate("SendEmailSuccess",{email:data.emailReset})
    }
  };
  return (
    <SafeAreaView
      style={[
        styleGlobal.backgroundColorTheme,
        { flex: 1 },
      ]}
    >
      <View style={[styles.container,{paddingTop:100}]}>
        <Text style={[styles.title,{fontWeight:"700"}]}>{"Nhập Email của bạn và chúng tôi sẽ giúp bạn lấy lại mật khẩu!"}</Text>
        <Input placeholder="Email" keyboardType="email-address"  name="emailReset"
          control={control}/>  
        <Button onPress={ handleSubmit(onSubmit)} title="Tiếp tục" style="solid" />
          
      </View>
    </SafeAreaView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        marginHorizontal: 20,
      },
      title:{
        fontSize:25,
        textAlign:'left', 
        marginTop:20,
        marginBottom:25,
      }, 
})
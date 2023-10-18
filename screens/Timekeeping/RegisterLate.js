import { StyleSheet, Text, View,
    Alert,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions, 
TextInput } from 'react-native'
import React,{useState} from 'react'
import Button from '../../components/ButtonCustom'
import styleGlobal from '../../assets/css/globalStyles'
import DropDown from '../../components/DropDown'
import {useForm,Controller } from 'react-hook-form'
const RegisterLate = () => { 
  const { control, handleSubmit,  formState  } = useForm({
    mode:"onChange",
  });
  const onSubmit = data => console.log(data);
    const [option] = useState("Chọn khoảng thời gian nghỉ");
  const [listOption] = useState([
    { label: "Đầu ca", value: "first" },
    { label: "Giữa ca", value: "mid" },
    { label: "Cuối ca", value: "last" }, 
  ]);
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View 
      style={[
        styles.container,
        styleGlobal.p_2,
        {
          flex: 1,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          height: Dimensions.get("window").height,
          backgroundColor: "#fff",
        },
      ]}
    >
      <View style={[{ width: "100%" }]}>
        <View style={styleGlobal.inputBox}>
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => ( 
          <TextInput
            style={styleGlobal.input} 
            placeholder={"Tên công việc"}
            placeholderTextColor="#91919f" 
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      /> 
        </View> 
        <View style={[styleGlobal.inputBox]}>
        <Controller
        control={control}
        rules={{
         required: true, 
        }}
        render={({ field: { onChange, onBlur, value } }) => ( 
         
          <TextInput
            style={[styleGlobal.textArea]}
            keyboardType={"default"}
            placeholder={"Lý do"}
            placeholderTextColor="#91919f"
            multiline={true}
    numberOfLines={5}  
    onBlur={onBlur}
    onChangeText={onChange}
    value={value}
          />
        )}
        name="reason"
      /> 
        </View>  
        
        <DropDown valueDefault={option} listOption={listOption} />
      </View>
      {
        (!formState.isDirty || !formState.isValid ) ? <Button 
          title="Gửi yêu cầu"
          style="solid"
          active={true}
        /> :
        <Button
          onPress={handleSubmit(onSubmit)}
          title="Gửi yêu cầu"
          style="solid"
          active={false}
        />
      }
    </View>
  </TouchableWithoutFeedback>
  )
}

export default RegisterLate

const styles = StyleSheet.create({})
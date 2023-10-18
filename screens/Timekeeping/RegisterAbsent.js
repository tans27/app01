import { StyleSheet,  View,
    Alert,Text, 
    Animated,
    TouchableOpacity,
    Dimensions, 
    ScrollView,
TextInput } from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import Button from '../../components/ButtonCustom'
import styleGlobal from '../../assets/css/globalStyles' 
import Calendar from '../../components/Calendar'
import Feather from 'react-native-vector-icons/Feather'
import { TimekeepingContext} from './Context'
import moment from 'moment'

const RegisterAbsent = () => { 
  const [opacity] = useState(new Animated.Value(0));
  const [height] = useState(new Animated.Value(0));
  const [showDropDown,setShowDropDown] = useState(true)  
  const {registerAbsent} = useContext(TimekeepingContext)   
  const showContent = () => {
    Animated.timing(height, {
      toValue: !showDropDown ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();
  
    Animated.timing(opacity, {
      toValue: !showDropDown ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();
  };
  const maxHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 600], // <-- value that larger than your content's height
  });
  React.useEffect(() => {
    showContent()
  },[showDropDown])
  return (
    <>
    <ScrollView 
      style={[
        styles.container,
        styleGlobal.p_2,
        { 
          height: Dimensions.get("window").height,
          backgroundColor: "#fff",
        },
      ]}
    >
      <View style={[{ width: "100%" }]}>
        
      <TouchableOpacity style={[styleGlobal.inputBox]} onPress={() => setShowDropDown(!showDropDown)}>
            <View style={[styleGlobal.flexBetween,styleGlobal.input,{marginBottom:0}]}>
              <Text style={[styleGlobal.inputButton]}>{registerAbsent.from ? `Từ ngày ${moment(registerAbsent.from).format('L')} đến ngày ${registerAbsent.to ? moment(registerAbsent.to).format('L') : ''}` : 'Chọn ngày vắng mặt'}</Text> 
              {!showDropDown ? <Feather name="chevron-right" size={20} color={"#9e9ea7"}></Feather> : <Feather name="chevron-down" size={20} color={"#9e9ea7"}></Feather>}
              
            </View>
          </TouchableOpacity>
          <Animated.View style={{ opacity: opacity, maxHeight: maxHeight}}>
      <Calendar />
          </Animated.View> 
        <View style={[styleGlobal.inputBox,{marginTop:20}]}>
          <TextInput
            style={[styleGlobal.textArea]}
            keyboardType={"default"}
            placeholder={"Lý do"}
            placeholderTextColor="#91919f"
            multiline={true}
          numberOfLines={5}  
          />
        </View>   
      </View>
    </ScrollView>
      
      <View style={[{position: "absolute",bottom:0,left:20,}]}>
      <Button
        onPress={() => Alert.alert("Tính năng đang được cập nhật!")}
        title="Gửi yêu cầu"
        style="solid"
        active={false}
      />
      </View>
  </>
  )
}

export default RegisterAbsent

const styles = StyleSheet.create({})
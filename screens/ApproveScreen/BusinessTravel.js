import { StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions,
    TouchableOpacity,
    Animated,
    ScrollView,} from 'react-native'
  import React,{useState, useContext, useEffect } from 'react'
  import styleGlobal from "../../assets/css/globalStyles";
  import Calendar from './Calendar'
  import Button from "../../components/ButtonCustom";
  import Input from "../../components/InputCustom";
  import { useForm } from "react-hook-form";
  import Feather from "react-native-vector-icons/Feather"; 
  import { ApproveContext } from './Context';
  import DropDown from "../../components/DropDown";
  import moment from 'moment'
  const BusinessTravel = ({ navigation,route}) => { 
  const { time} =
  useContext(ApproveContext);
  const [opacity] = useState(new Animated.Value(0));
  const [height] = useState(new Animated.Value(0));
  const [showDropDown, setShowDropDown] = useState(false);
  const [option] = useState("Chọn phương tiện");
  const [listOption] = useState([
    { label: "Văn phòng", value: "office" },
    { label: "Cá nhân", value: "personal" },
    { label: "Xe máy", value: "motorbike" },
    { label: "Tàu hoả", value: "train" },
    { label: "Khác", value: "other" },
  ]);
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
    outputRange: [0, 500], // <-- value that larger than your content's height
  });
  useEffect(() => {
    showContent();
  }, [showDropDown]);
  const { control, handleSubmit } = useForm(); 
  const onSubmit = (data) => {
        console.log(data) 
        navigation.navigate('Thành công',{
            text:"Đã tạo Phê duyệt"
          })
    };
    return (
      <> 
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? "60" : "height"}
            style={[
              styles.container,
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
          <ScrollView style={[
              styleGlobal.p_2,{ width: "100%"}]}>
  <View style={[{paddingBottom:150}]}>
  <Input placeholder="Nội dung yêu cầu"  name="title"
            control={control}/>  
      <Input placeholder="Mô tả chi tiết"  name="description"
          multiline={true}
        numberOfLines={5}  
        control={control}/>  
  <TouchableOpacity
                style={[styleGlobal.inputBox]}
                onPress={() => setShowDropDown(!showDropDown)}
              >
                <View
                  style={[
                    styleGlobal.flexBetween,
                    styleGlobal.input,
                    { marginBottom: 0 },
                  ]}
                >
                  <Text style={[styleGlobal.inputButton]}>
                    {time.from
                      ? `Từ ngày ${moment(time.from).format("L")} ${
                          time.to ? "đến ngày " + moment(time.to).format("L") : ""
                        }`
                      : "Chọn thời gian kế hoạch"}
                  </Text>
                  {!showDropDown ? (
                    <Feather
                      name="chevron-right"
                      size={20}
                      color={"#9e9ea7"}
                    ></Feather>
                  ) : (
                    <Feather
                      name="chevron-down"
                      size={20}
                      color={"#9e9ea7"}
                    ></Feather>
                  )}
                </View>
              </TouchableOpacity>
              
              <Animated.View style={{ opacity: opacity, maxHeight: maxHeight }}>
                <Calendar />
              </Animated.View>
              <View style={{ zIndex: 5,marginTop:20 }}>
                <DropDown valueDefault={option} listOption={listOption} />
              </View></View>
              </ScrollView>
              <View style={[ {marginHorizontal:20}]}>
                
                    <Button
                      onPress={handleSubmit(onSubmit)}
                      title="Gửi phê duyệt"
                      style="solid"
                      active={false}
                    />
                    </View>
                  </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                </>
    )
  }
  
  export default BusinessTravel
  
  const styles = StyleSheet.create({})
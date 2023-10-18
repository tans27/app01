import React, { useContext } from 'react'
import { TouchableHighlight,View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { SettingContext } from './Context'; 
import ActionLine from '../../components/ActionLine'; 
const NotifycationScreen = (props) => {
    const {notifycationExpense,setNotifycationExpense,notifycationBudget,setNotifycationBudget,options} = useContext(SettingContext) 
    const { colors } = props.theme;  

  return (
    <View style={{paddingHorizontal:20,backgroundColor:options.theme  === "Sáng" ? "#fff":'#24283b',height:"100%"}}>  
        <ActionLine title="Thông báo công việc" description="Bật hoặc Tắt thông báo ngoài giờ hành chính" status={notifycationExpense}  onPress={() =>setNotifycationExpense(!notifycationExpense)}/>   
        <ActionLine title="Thông báo cập nhật" description="Nhận thông báo cập nhật tính năng mới" status={notifycationBudget} onPress={() =>setNotifycationBudget(!notifycationBudget)} />   
        </View>
  );
};

export default withTheme(NotifycationScreen);

import React, { useContext } from 'react'
import { TouchableHighlight,View,Alert } from 'react-native';
import { withTheme } from 'react-native-paper';
import { SettingContext } from './Context'; 
import InforLine from '../../components/InforLine';
import Icon from 'react-native-vector-icons/Feather';
import stylesGlobal from '../../assets/css/globalStyles'
const SecurityChooseScreen = () => {
    const settings = useContext(SettingContext)  
  return (
    <View style={{backgroundColor:settings.options.theme  === "Sáng" ? "#fff":'#24283b',flex:1,height:'100%'}}> 
        <TouchableHighlight onPress={() => settings.chooseSecurity('Mã PIN')} underlayColor="#ffffff00"> 
            <InforLine title="Mã PIN" value={'Mã PIN'}   icon = {settings.options.security==='Mã PIN' && <View style={[stylesGlobal.iconCheck,stylesGlobal.flexCenter,stylesGlobal.backgroundColorPrimary]}><Icon name={'check'} size={15} color={"#fff"}/></View>}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => Alert.alert("Tính năng đang được cập nhật!")} underlayColor="#ffffff00"> 
            <InforLine title="Bảo mật vân tay" value={'Bảo mật vân tay'}  icon = {settings.options.security==='Bảo mật vân tay' && <View style={[stylesGlobal.iconCheck,stylesGlobal.flexCenter,stylesGlobal.backgroundColorPrimary]}><Icon name={'check'} size={15} color={"#fff"}/></View>}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => Alert.alert("Tính năng đang được cập nhật!")} underlayColor="#ffffff00"> 
            <InforLine title="Face ID" value={'face'}  icon = {settings.options.security==='face' && <View style={[stylesGlobal.iconCheck,stylesGlobal.flexCenter,stylesGlobal.backgroundColorPrimary]}><Icon name={'check'} size={15} color={"#fff"}/></View>}/>
        </TouchableHighlight> 

        {/* <TouchableHighlight onPress={() => settings.chooseSecurity('fingerprint')} underlayColor="#ffffff00"> 
            <InforLine title="Bảo mật vân tay" value={'Bảo mật vân tay'}  icon = {settings.options.security==='Bảo mật vân tay' && <View style={[stylesGlobal.iconCheck,stylesGlobal.flexCenter,stylesGlobal.backgroundColorPrimary]}><Icon name={'check'} size={15} color={"#fff"}/></View>}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => settings.chooseSecurity('face')} underlayColor="#ffffff00"> 
            <InforLine title="Face ID" value={'face'}  icon = {settings.options.security==='face' && <View style={[stylesGlobal.iconCheck,stylesGlobal.flexCenter,stylesGlobal.backgroundColorPrimary]}><Icon name={'check'} size={15} color={"#fff"}/></View>}/>
        </TouchableHighlight>  */}
    </View>
  );
};

export default withTheme(SecurityChooseScreen);

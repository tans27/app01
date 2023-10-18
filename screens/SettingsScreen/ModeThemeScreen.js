import React, { useContext } from 'react'
import { TouchableHighlight,View,Alert } from 'react-native';
import { withTheme } from 'react-native-paper';
import { SettingContext } from './Context'; 
import InforLine from '../../components/InforLine';
import Icon from 'react-native-vector-icons/Feather';
import stylesGlobal from '../../assets/css/globalStyles'
const ModeThemeScreen = (props) => {
  const settings = useContext(SettingContext)  
  return (
    <View style={{backgroundColor:settings.options.theme  === "Sáng" ? "#fff":'#24283b',flex:1,height:'100%'}}>
    <TouchableHighlight onPress={() => settings.chooseTheme('Sáng')} underlayColor="#ffffff00"> 
            <InforLine title="Sáng" value={'Sáng'}   icon = {settings.options.theme==='Sáng' && <View style={[stylesGlobal.iconCheck,stylesGlobal.flexCenter,stylesGlobal.backgroundColorPrimary]}><Icon name={'check'} size={15} color={"#fff"}/></View>}/>
        </TouchableHighlight>
        
        <TouchableHighlight onPress={() =>  settings.chooseTheme('Tối')} underlayColor="#ffffff00"> 
            <InforLine title="Tối" value={'Tối'}  icon = {settings.options.theme==='Tối' && <View style={[stylesGlobal.iconCheck,stylesGlobal.flexCenter,stylesGlobal.backgroundColorPrimary]}><Icon name={'check'} size={15} color={"#fff"}/></View>}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => Alert.alert("Tính năng đang được cập nhật!")} underlayColor="#ffffff00"> 
            <InforLine title="Chế độ thiết bị" value={'device'}  icon = {settings.options.theme==='device' && <View style={[stylesGlobal.iconCheck,stylesGlobal.flexCenter,stylesGlobal.backgroundColorPrimary]}><Icon name={'check'} size={15} color={"#fff"}/></View>}/>
        </TouchableHighlight> 
        {/* <TouchableHighlight onPress={() => settings.chooseTheme('Tối')} underlayColor="#ffffff00"> 
            <InforLine title="Tối" value={'Tối'}  icon = {settings.options.theme==='Tối' && <View style={[stylesGlobal.iconCheck,stylesGlobal.flexCenter,stylesGlobal.backgroundColorPrimary]}><Icon name={'check'} size={15} color={"#fff"}/></View>}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => settings.chooseTheme('device')} underlayColor="#ffffff00"> 
            <InforLine title="Chế độ thiết bị" value={'device'}  icon = {settings.options.theme==='device' && <View style={[stylesGlobal.iconCheck,stylesGlobal.flexCenter,stylesGlobal.backgroundColorPrimary]}><Icon name={'check'} size={15} color={"#fff"}/></View>}/>
        </TouchableHighlight>  */}
    </View>
  )
}

export default withTheme(ModeThemeScreen) 
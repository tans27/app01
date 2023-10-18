import React, { useContext } from 'react'
import { TouchableHighlight,View,Alert } from 'react-native';
import { withTheme } from 'react-native-paper';
import { SettingContext } from './Context'; 
import InforLine from '../../components/InforLine';
import Icon from 'react-native-vector-icons/Feather';
import stylesGlobal from '../../assets/css/globalStyles'
const LanguageChooseScreen = () => {
    const settings = useContext(SettingContext)  
  return (
    <View style={{backgroundColor:settings.options.theme  === "Sáng" ? "#fff":'#24283b',flex:1,height:'100%'}}> 
        <TouchableHighlight onPress={() => settings.chooseLanguage('Tiếng Việt')} underlayColor="#ffffff00"> 
            <InforLine title="Tiếng Việt" value={'Tiếng Việt'}  icon = {settings.options.language==='Tiếng Việt' && <View style={[stylesGlobal.iconCheck,stylesGlobal.flexCenter,stylesGlobal.backgroundColorPrimary]}><Icon name={'check'} size={15} color={"#fff"}/></View>}/>
        </TouchableHighlight> 
        <TouchableHighlight onPress={() => Alert.alert("Tính năng đang được cập nhật!")} underlayColor="#ffffff00"> 
            <InforLine title="Tiếng Anh" value={'Tiếng Anh'}   icon = {settings.options.language==='Tiếng Anh' && <View style={[stylesGlobal.iconCheck,stylesGlobal.flexCenter,stylesGlobal.backgroundColorPrimary]}><Icon name={'check'} size={15} color={"#fff"}/></View>}/>
        </TouchableHighlight>
        {/* <TouchableHighlight onPress={() => settings.chooseLanguage('Tiếng Việt')} underlayColor="#ffffff00"> 
            <InforLine title="Tiếng Việt" value={'Tiếng Việt'}  icon = {settings.options.language==='Tiếng Việt' && <View style={[stylesGlobal.iconCheck,stylesGlobal.flexCenter,stylesGlobal.backgroundColorPrimary]}><Icon name={'check'} size={15} color={"#fff"}/></View>}/>
        </TouchableHighlight>  */}
    </View>
  );
};

export default withTheme(LanguageChooseScreen);

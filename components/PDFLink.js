import React, { useCallback,useContext } from "react";
import { Alert , Linking, TouchableOpacity,StyleSheet, View ,Text} from "react-native";
import styleGlobal from '../assets/css/globalStyles'
import Icon from 'react-native-vector-icons/Feather'; 
 import {SettingContext} from '../screens/SettingsScreen/Context'

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Đã có lỗi xảy ra!`);
    }
  }, [url]);

  return <TouchableOpacity onPress={handlePress}>{children}</TouchableOpacity>;
};

const PDFLink = ({title,pdfURL}) => { 
  const {options} =useContext(SettingContext)
  return ( 
      <OpenURLButton url={pdfURL}>
        <View style={[styleGlobal.flexBetween ,styles.container]}> 
        <Text  style={[styles.title,styleGlobal.bold,styleGlobal.colorMains,{color:options.theme === "Tối" ? "#fff":'#000'}]}>{title}</Text>
        <View style={[styleGlobal.flexCenter,styles.title,styles.grey]}>
                
                <View  style={{marginTop:0}}>
                  <Icon name={'chevron-right'} size={20} style={styles.iconArrow} color={'#e66426'}/>
                </View>
              </View>
              </View>
      </OpenURLButton> 
  );
};

const styles = StyleSheet.create({
  container: {
    height:50, 
    paddingHorizontal:20,  
  },
  title: {  
    fontSize:16, 
    fontWeight:'600',  
  }, 
  grey: {
    color:'#91919f',
  },
  iconArrow: {
    marginLeft:10,
    borderRadius:20,
  }
});

export default PDFLink;
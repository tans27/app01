import { StyleSheet, Text, View } from 'react-native';
import { formatMoney } from '../extensions/formatMoney';  
import {SettingContext} from '../screens/SettingsScreen/Context'
import styleGlobal from '../assets/css/globalStyles'
import Icon from 'react-native-vector-icons/Feather';
import React,{ useContext} from 'react';

const InforLine = (props) => { 
  const {options} = useContext(SettingContext)
  return (
    <View style={[styleGlobal.flexBetween ,styles.container ]}> 
        <Text style={[styles.title, {color:options.theme  === "Sáng" ? '#000' :"#fff"}]}>{props.title}</Text> 
        {
          props.stack === false && <Text  style={[styles.title,styleGlobal.bold,styleGlobal.colorMains,{color:options.theme  === "Sáng" ? '#000' :"#fff" }]}>{props.value ? formatMoney(props.value) : "-"} <Text style={[styles.param]}>VNĐ</Text></Text>
        }
        {
          props.stack === true && <View style={[styleGlobal.flexCenter,styles.title,styles.grey]}>
                                    <Text style={[styles.title,styles.grey,{textTransform: 'capitalize'}]}>{props.value}</Text>
                                    <View  style={{marginTop:0}}>
                                      <Icon name={'chevron-right'} size={20} style={styles.iconArrow} color={'#e66426'}/>
                                    </View>
                                  </View>
        }
        {
          props.icon !== "" && props.icon
        } 
    </View>
  );
};

export default InforLine;

const styles = StyleSheet.create({ 
  container: {
    height:50, 
    paddingHorizontal:20,  
  },
  title: {  
    fontSize:16, 
    fontWeight:'600',  
  },
  param: {
    fontSize:13,
    color:'#91919f'
  },
  grey: {
    color:'#91919f',
  },
  iconArrow: {
    marginLeft:10,
    borderRadius:20,
  }
});

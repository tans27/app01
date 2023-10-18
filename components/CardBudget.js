import { StyleSheet, Text, View,Dimensions,Image } from 'react-native';  
import styleGlobal from '../assets/css/globalStyles'
import logoMb from '../assets/images/Logo_MB_new.png'
import React from 'react';
import { removeVietnameseTones} from '../extensions/convertWord'
const CardMain = ({numberCard,bank,name}) => { 
  return (
    <View style={[styles.card]}>
       <View> 
         <Image style={[styles.logo]} source={logoMb} alt='/'/>
         <Text style={[styles.white]}>Premium Account</Text>
       </View>
       <View>
         <Text style={[styles.white,styles.number]}>{numberCard}</Text>
       </View>
       <View style={[styles.white,styleGlobal.flexBetween]}>
         <Text style={[styles.white,styles.nameUser,{textTransform:"uppercase"}]}>{removeVietnameseTones(name)}</Text>
         <View>
         <Text style={styles.white}>Ngày hết hạn</Text>
         <Text style={styles.white}>23/06/2028</Text> 
         </View>
       </View>
    </View>
  );
};

export default CardMain;  
const styles = StyleSheet.create({ 
  card:{
    width: Dimensions.get("window").width - 40,
    height: 230,
    borderRadius:15,
    backgroundColor:"#162be3",
    padding:20,
    position:"relative"
  },
  logo:{
    width:100,
    height:50,
  },
  number:{
    fontSize:35,
    fontWeight:'600', 
    marginTop:20,
    marginBottom:20
  },
  nameUser:{
    fontSize:18, 
  },
  white:{
    color:"#fff"
  }
});
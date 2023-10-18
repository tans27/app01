import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from './Avatar'
import styleGlobal from '../assets/css/globalStyles'
const Chip = ({avatar,name}) => {
  return (
    <View style={[styleGlobal.flexCenter,styleGlobal.backgroundColorPrimary,styles.chip]}>
        <Avatar
            image={avatar}
            style={{ width: 20, height:20 }}
            styleBox={{ width: 22, height: 22 }}
            styleText={{fontSize:12,fontWeight:'400'}}
            name={name}

          /> 
          <Text style={{marginLeft:3,fontSize:12,color:"#fff"}}>{name}</Text> 
    </View>
  )
}

export default Chip

const styles = StyleSheet.create({
  chip:{ 
    padding: 5,
    borderRadius:20,
    marginRight:5,
    marginBottom:8,
  }
})
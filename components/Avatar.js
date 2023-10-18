import { StyleSheet, Image, View,Text } from 'react-native'
import React from 'react'
import stylesGlobal from '../assets/css/globalStyles' 
const Avatar = ({image,style,styleBox,name,styleText}) => {
  return (
    <View style={[stylesGlobal.flexCenter, styles.boxProfile,styleBox]}>
      {image!=='' ?  <Image source={{
          uri: image,
        }} style={[styles.profileImage,style]} /> : <Text style={[styleText]}>{name.charAt(0)}</Text>}
      
  </View>
  )
}

export default Avatar

const styles = StyleSheet.create({ 
  boxProfile: {
    backgroundColor: "#fff", 
    borderRadius: 50,
    borderColor: "#c01e2e",
    borderWidth: 2,
  },
  
  profileImage: { 
    borderRadius: 40,
  },
})
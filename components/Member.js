import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import imageDemo from "../assets/images/avatarDefault.jpg";
import styleGlobal from '../assets/css/globalStyles'
import Feather from 'react-native-vector-icons/Feather'
const Member = ({member}) => {
  return (
    <View style={[styleGlobal.flexBetween]}>
            {member && member.map((ele, index) => {
              return (
                <View key={index}>
                  {ele === "Luki" ? (
                    <Image
                      style={[styles.member, { zIndex: member.length - index }]}
                      source={imageDemo}
                      alt="/"
                    />
                  ) : (
                    <View
                      style={[
                        styleGlobal.flexBetween,
                        styles.member,
                        {
                          zIndex: 2,
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      ]}
                    >
                      <Text style={[styles.content]}>{ele.name && ele.name.charAt(0)}</Text>
                    </View>
                  )}
                </View>
              );
            })}
            <View
                      style={[
                        styleGlobal.flexBetween,
                        styles.member,
                        {
                          zIndex: 2,
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      ]}
                    >
                      <Feather name="plus" size={14} color={"#000"}></Feather>
                    </View>
          </View>
  )
}

export default Member

const styles = StyleSheet.create({
  
  member: {
    width: 30,
    height: 30,
    borderRadius: 10, 
    marginRight:5,
    backgroundColor: "#faf9ff",
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
})
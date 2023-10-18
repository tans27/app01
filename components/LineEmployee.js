import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import styleGlobal from '../assets/css/globalStyles'
import Avatar from '../components/Avatar'
const LineEmployee = ({ name, position, avatar, press, active }) => {
  return (
    <View
          style={[
            styleGlobal.flexBetween,
            styles.rowIcon, 
          ]}
        >
          <View style={[styleGlobal.flexCenter]}>
            <Avatar
              image={avatar.toString()}
              style={{ width: 40, height: 40 }}
              styleBox={{ width: 50, height: 50 }}
              name={name}
              styleText={{fontSize:18,fontWeight:'600'}}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.description}>{position ? position :"Đang cập nhật"}</Text>
            </View>
          </View>
          {
            <View style={[styleGlobal.flexBetween]}>
              <TouchableOpacity onPress={press}>
              <View
                style={[styleGlobal.flexCenter, styles.boxAction,active ? {borderColor:"#c01e2e"} : styleGlobal.backgroundColorPrimary]}
                
              >
                <Text style={[styles.title,active ? styleGlobal.colorPrimary : {color:"#fff"}]}>{active ? "Xoá" : "Thêm"}</Text>
              </View>
              </TouchableOpacity>
            </View>
          }
        </View> 
  )
}

export default LineEmployee

const styles = StyleSheet.create({
  rowIcon: {
    backgroundColor: "#fff",
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1,
    paddingVertical: 15 ,
    paddingHorizontal:20,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },

  description: {
    fontSize: 12,
    color: "#4f4f4f",
    maxWidth:Dimensions.get("window").width - 190
  },
  boxAction: {
    backgroundColor: "#faf9ff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginLeft: 10,
    borderWidth: 2,
    borderColor:"transparent"
  },
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styleGlobal from '../../assets/css/globalStyles'
const LineInfor = ({date,times,detailTime}) => {
  return (
    <View>
      <View style={[styleGlobal.flexBetween, styles.rowIcon, styleGlobal.p_2]}>
        <View style={[styleGlobal.flexCenter]}>
          <View style={[styleGlobal.flexCenter, styles.boxIcon]}>
            <Ionicons name="finger-print-sharp" size={30} color={"#FD3C4A"}></Ionicons>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.title}>{date}</Text>
            <Text style={styles.description}>Số lần: {times}</Text>
            <Text style={styles.description}>Chi tiết: {detailTime}</Text>
          </View>
        </View>
        {
            times !== 2 &&<Ionicons name="warning-outline" size={30} color={"red"}></Ionicons>
        }
        
        </View>
    </View>
  )
}

export default LineInfor

const styles = StyleSheet.create({
    boxIcon: {
        backgroundColor: "#FDD5D7",
        borderRadius: 10,
        width: 50,
        height: 50,
      },
      rowIcon: {
        backgroundColor: "#fff",
        borderBottomColor: "#f4f4f4",
        borderBottomWidth: 1,
      },
      title: {
        fontSize: 16,
        fontWeight: "700",
      },
    
      description: {
        fontSize: 12,
        color: "#4f4f4f",
      },
})
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import NameContact from '../../components/NameContact'
import styleGlobal from '../../assets/css/globalStyles'
import {getParagraphs} from '../../extensions/regexTool'
import Feather from 'react-native-vector-icons/Feather'
const ContentCard = ({code,email,phone,category,description,nameRequire,attachment,type_maintenance_request}) => {
  return (
    <View
          style={[
            {
              width: Dimensions.get("window").width - 70,
            },
          ]}
        >
            <View style={[styleGlobal.flexBetween, styles.rowInfor,{alignItems:'flex-start',}]}>
        <Text style={[styles.description]}>Mã Yêu cầu: </Text>
        <View style={[{width:Dimensions.get("window").width - 160,alignItems:'flex-end'}]}>
          <View style={[styleGlobal.backgroundColorPrimary,{paddingVertical:3,paddingHorizontal:8,borderRadius:20}]}>
          <Text style={[styles.description, { fontWeight: "400" ,textAlign: "right",color:"#fff"}]}>
          {code}
        </Text>
          </View>
       
        </View>
      </View> 
      <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
            <Text style={[styles.description]}>Dịch vụ chi tiết: </Text>
            <Text style={[styles.description, { fontWeight: "400" }]}>
              {type_maintenance_request}
            </Text>
          </View>
          <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
            <Text style={[styles.description]}>Bộ phận tiếp nhận: </Text>
            <Text style={[styles.description, { fontWeight: "400" }]}>
              {category}
            </Text>
          </View>
          <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
            <Text style={[styles.description]}>Tệp đính kèm: </Text>
            <View style={[styleGlobal.flexRow]}>
            <Text style={[styles.description, { fontWeight: "400",marginRight:4 }]}>
            {attachment.length}
            </Text>
            <Feather name="link" size={14} color={"#000"}></Feather>
            </View>
          </View>
          <View style={[styleGlobal.flexBetween, styles.rowInfor,{flexDirection: "column",alignItems: "flex-start" }]}>
            <Text style={[styles.description]}>Mô tả: </Text>
            <Text style={[styles.description, { fontWeight: "400",marginTop:5,marginLeft:5,width: Dimensions.get("window").width - 70,paddingHorizontal:5}]}>
            <View style={[styleGlobal.flexRow,{flexDirection: "column" }]}>
            {getParagraphs(description).map((ele, index) => {
                return <Text style={[styles.description, { fontWeight:'400'}]}  key={index}>{ele.replace(new RegExp('<[^>]*>', 'g'), '')}</Text>
            })}
            </View>
            </Text>
          </View>
          <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
            <Text style={[styles.description]}>Liên hệ: </Text>
            <Text style={[styles.description, { fontWeight: "400" }]}> 
                <NameContact 
                  phoneNumber = {phone}
                  mail={email}
                  
                  style={[styles.description, { fontWeight: "400" }]}
                  name={nameRequire}
                /> 
            </Text>
          </View> 
        </View>
  )
}

export default ContentCard

const styles = StyleSheet.create({ 
      description: {
        fontSize: 16,
        fontWeight: "500",
      },
    rowInfor: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.1)",
    },
})
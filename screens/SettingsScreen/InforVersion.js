import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { SettingContext } from './Context';  
const InforVersion = () => {
  const {options} = useContext(SettingContext) 
  return (
    <View style={{
      padding: 15,flex:1,backgroundColor:options.theme  === "Sáng" ? "#fff":'#24283b'}}>
    <View style={[styles.boxContent,{backgroundColor:options.theme  === "Sáng" ? "#fff":'#24283b'}]}>
      <Text style={[styles.text,{color:options.theme === "Tối" ? "#fff":'#000'}]}>Phiên bản ứng dụng: v1.0.0</Text>
      <Text style={[styles.text,{color:options.theme === "Tối" ? "#fff":'#000'}]}>Đội ngũ phát triển: Luki Team</Text>
      <Text style={[styles.text,{color:options.theme === "Tối" ? "#fff":'#000'}]}>{`Thông tin chi tiết:\nỨng dụng`}</Text><Text style={{fontWeight:"600",color:options.theme === "Tối" ? "#fff":'#000'}}>{`Quản lý Nhân sự của Công ty Cổ phần Diligo`}</Text><Text style={[styles.text,{color:options.theme === "Tối" ? "#fff":'#000'}]}>{`cung cấp đầy đủ các chức năng quản trị nhân sự giúp quản lý, duy trì và phát huy tối đa sức mạnh nguồn nhân lực.

Các chức năng chính:
- Quản lý Hồ sơ Nhân sự
- Cổng thông tin nhân sự Portal
- Quản lý Chấm công
- Quản lý Tính lương
- Bảo hiểm, Phúc lợi
- Tuyển dụng
- Đào tạo
- Đánh giá KPI
- Hệ thống Cảnh báo & Báo cáo
- Quản trị Hệ thống.

Email hỗ trợ: nguyenhuyhoangdevelop@gmail.com

Hotline: 0963395763`}</Text>
    </View>

</View>
    )
}

export default InforVersion

const styles = StyleSheet.create({
  boxContent: {
    borderRadius: 10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
padding:15,
  },
  text:{
    marginBottom:3,
  }
})
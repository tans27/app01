import { StyleSheet, Text, Dimensions, View, ScrollView,Alert } from "react-native";
import React, { useContext } from "react";
import CardBudget from "../../components/CardBudget";
import Ionicons from "react-native-vector-icons/Ionicons";
import styleGlobal from "../../assets/css/globalStyles";
import { DataContext } from "../../data/dataProvider";
import Button from '../../components/ButtonCustom'
import Feather from 'react-native-vector-icons/Feather' 
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   
</head>
<body style="font-family: Arial, Helvetica, sans-serif;font-size: 14px;"> 
    <h1 style="color: #dc3545;">Phiếu Lương</h1>
    <p>Phiếu lương của Lê Hoàng Long cho tháng 3-2022</p>
    <table style="height: 150px; width: 100%; padding-left:10px;  border-collapse: collapse; border: 2px solid black ;">
        <tr>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Tên</th>
            <td style="border: 2px solid black ;padding-left: 10px;">Lê Hoàng Long</td>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Bổ nhiệm</th>
            <td style="border: 2px solid black ;padding-left: 10px;">Chuyên viên phát triển ứng dụng Oddo</td>
        </tr>

        <tr>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Địa chỉ</th>
            <td style="border: 2px solid black ;padding-left: 10px;" colspan="3"></td>
        </tr>

        <tr>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Email</th>
            <td style="border: 2px solid black ;padding-left: 10px;">phattrienungdung4@diligo.vn</td>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Số CMND</th>
            <td style="border: 2px solid black ;padding-left: 10px;">001203035471</td>
        </tr>

        <tr>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Tham chiếu</th>
            <td style="border: 2px solid black ;padding-left: 10px;">SLIP/001</td>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Tài khoản ngân hàng</th>
            <td style="border: 2px solid black ;padding-left: 10px;"></td>
        </tr>

        <tr>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Từ ngày</th>
            <td style="border: 2px solid black ;padding-left: 10px;">01/03/2022</td>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Đến ngày</th>
            <td style="border: 2px solid black ;padding-left: 10px;">31/3/2022</td>
        </tr>

    </table>

        <table style="height: 300px; width: 100%; margin-top: 20px;border-collapse: collapse;">
        <tr>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Mã</th>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Tên</th>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Số lượng/Tỷ lệ</th>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Tổng tiền</th>
            <th style="color: #dc3545;text-align: left; border: 2px solid black ;padding-left: 10px;">Tổng</th>
        </tr>
        <tr>
            <td style="border: 2px solid black ;padding-left: 10px;">BASIC</td>
            <td style="border: 2px solid black ;padding-left: 10px;">Lương Cơ bản</td>
            <td style="border: 2px solid black ;padding-left: 10px;">1,0</td>
            <td style="border: 2px solid black ;padding-left: 10px;">3.756.522 <small><ins>đ</ins></small></td>
            <td style="border: 2px solid black ;padding-left: 10px;">3.756.522 <small><ins>đ</ins></small></td>
        </tr>

        <tr>
            <td style="border: 2px solid black ;padding-left: 10px;">KPIs</td>
            <td style="border: 2px solid black ;padding-left: 10px;">Lương trách nhiệm KPIs(PP) - Nhân viên</td>
            <td style="border: 2px solid black ;padding-left: 10px;">1,0</td>
            <td style="border: 2px solid black ;padding-left: 10px;">782.609<small><ins>đ</ins></small></td>
            <td style="border: 2px solid black ;padding-left: 10px;">782.609<small><ins>đ</ins></small></td>
        </tr>

        <tr>
            <td style="border: 2px solid black ;padding-left: 10px;">CAR</td>
            <td style="border: 2px solid black ;padding-left: 10px;">Phụ cấp xăng xe</td>
            <td style="border: 2px solid black ;padding-left: 10px;">1,0</td>
            <td style="border: 2px solid black ;padding-left: 10px;">156.522<small><ins>đ</ins></small></td>
            <td style="border: 2px solid black ;padding-left: 10px;">156.522<small><ins>đ</ins></small></td>
        </tr>

        <tr>
            <td style="border: 2px solid black ;padding-left: 10px;">Mobile</td>
            <td style="border: 2px solid black ;padding-left: 10px;">Phụ cấp điện thoại</td>
            <td style="border: 2px solid black ;padding-left: 10px;">1,0</td>
            <td style="border: 2px solid black ;padding-left: 10px;">156.522<small><ins>đ</ins></small></td>
            <td style="border: 2px solid black ;padding-left: 10px;">156.522<small><ins>đ</ins></small></td>
        </tr>

        <tr>
            <td style="border: 2px solid black ;padding-left: 10px;">INSUR_BHXH</td>
            <td style="border: 2px solid black ;padding-left: 10px;">Khấu trừ BHXH</td>
            <td style="border: 2px solid black ;padding-left: 10px;">1,0</td>
            <td style="border: 2px solid black ;padding-left: 10px;">-378.400<small><ins>đ</ins></small></td>
            <td style="border: 2px solid black ;padding-left: 10px;">-378.400<small><ins>đ</ins></small></td>
        </tr>

        <tr>
            <td style="border: 2px solid black ;padding-left: 10px;">INSUR_BHYT</td>
            <td style="border: 2px solid black ;padding-left: 10px;">Khấu trừ BHYT</td>
            <td style="border: 2px solid black ;padding-left: 10px;">1,0</td>
            <td style="border: 2px solid black ;padding-left: 10px;">-70.950<small><ins>đ</ins></small></td>
            <td style="border: 2px solid black ;padding-left: 10px;">-70.950<small><ins>đ</ins></small></td>
        </tr>

        <tr>
            <td style="border: 2px solid black ;padding-left: 10px;">INSUR_BHTN</td>
            <td style="border: 2px solid black ;padding-left: 10px;">Khấu trừ BHTN</td>
            <td style="border: 2px solid black ;padding-left: 10px;">1,0</td>
            <td style="border: 2px solid black ;padding-left: 10px;">-47.300<small><ins>đ</ins></small></td>
            <td style="border: 2px solid black ;padding-left: 10px;">-47.300<small><ins>đ</ins></small></td>
        </tr>

        <tr>
            <td style="border: 2px solid black ;padding-left: 10px;">GROSS</td>
            <td style="border: 2px solid black ;padding-left: 10px;">Tổng</td>
            <td style="border: 2px solid black ;padding-left: 10px;">1,0</td>
            <td style="border: 2px solid black ;padding-left: 10px;">4.852.174<small><ins>đ</ins></small></td>
            <td style="border: 2px solid black ;padding-left: 10px;">4.852.174<small><ins>đ</ins></small></td>
        </tr>
        <tr>
            <td style="border: 2px solid black ;padding-left: 10px;">Net</td>
            <td style="border: 2px solid black ;padding-left: 10px;">Lương Thực Lĩnh</td>
            <td style="border: 2px solid black ;padding-left: 10px;">1,0</td>
            <td style="border: 2px solid black ;padding-left: 10px;">4.355.524<small><ins>đ</ins></small></td>
            <td style="border: 2px solid black ;padding-left: 10px;">4.355.524<small><ins>đ</ins></small></td>
        </tr>
    </table>
</body>
</html>
`;
const Salary = () => { 
  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html
      
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' ,name:"Bảng lương tháng 4"});
  }
  const { salary } = useContext(DataContext);
  return (
    <ScrollView style={{ 
      backgroundColor: "#fff", 
    }}> 
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#fff",
          height: "100%",
          paddingTop: 20,
          paddingBottom: 10,
        }}
      >
        <CardBudget
          numberCard={salary[0].numberBank}
          bank={salary[0].bank}
          name={salary[0].name}
        />
        <View style={[styles.inforDetail]}>
          <View
            style={[
              styleGlobal.flexBetween,
              styles.boxIcon,
              {
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              },
            ]}
          >
            <Ionicons name="newspaper" size={30} color={"#c01e2e"}></Ionicons>
          </View>
          <View style={{ marginTop: 30 }}>
            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Mã nhân viên</Text>
              <Text>NHH23</Text>
            </View>
            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Họ và tên</Text>
              <Text>{salary[0].name}</Text>
            </View>
            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Chức danh</Text>
              <Text>{salary[0].job}</Text>
            </View>
            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Từ ngày</Text>
              <Text>{salary[0].inforDetail[0].from}</Text>
            </View>
            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Đến ngày</Text>
              <Text>{salary[0].inforDetail[0].to}</Text>
            </View>
            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Địa chỉ</Text>
              <Text style={{ width: "60%" }} numberOfLines={1}>
                {salary[0].address}
              </Text>
            </View>
            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Email</Text>
              <Text style={{ width: "60%" }} numberOfLines={1}>
                {salary[0].email}
              </Text>
            </View>
            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Mã phiếu lương</Text>
              <Text>{salary[0].inforDetail[0].reference}</Text>
            </View>

            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Lương cơ bản</Text>
              <Text>{salary[0].inforDetail[0].basicSalary}</Text>
            </View>

            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Lương KPI</Text>
              <Text>{salary[0].inforDetail[0].kpiSalary}</Text>
            </View>

            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Phụ cấp xăng xe</Text>
              <Text>{salary[0].inforDetail[0].carSalary}</Text>
            </View>
            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Khấu trừ BHXH</Text>
              <Text>{salary[0].inforDetail[0].BHXH}</Text>
            </View>
            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Khấu trừ BHYT</Text>
              <Text>{salary[0].inforDetail[0].BHYT}</Text>
            </View>
            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text>Khấu trừ BHTN</Text>
              <Text>{salary[0].inforDetail[0].BHTN}</Text>
            </View>

            <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
              <Text style={{ fontWeight: "700" }}>Tổng thực lĩnh</Text>
              <Text>{salary[0].inforDetail[0].BHTN}</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop:20,}}>
        <Button
          onPress={printToFile}
          title="Tải xuống PDF"
          style="solid"
          active={false}
          icon={
            <Feather name="download" size={24} color={"#fff"}></Feather>}
        />
        </View>
      </View>
    </ScrollView>
  );
};

export default Salary;

const styles = StyleSheet.create({
  inforDetail: {
    backgroundColor: "#faf9ff",
    borderRadius: 15,
    padding: 20,
    width: Dimensions.get("window").width - 40,
    marginTop: 50,
    position: "relative",
    minHeight: 100,
  },
  boxIcon: {
    width: 70,
    height: 70,
    borderRadius: 40,
    position: "absolute",
    top: -30,
    left: (Dimensions.get("window").width - 40) / 2 - 35,
    borderWidth: 2,
    borderColor: "#c01e2e",
  },
  rowInfor: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
});

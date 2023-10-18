import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Dimensions,
    StatusBar,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, {useState, useContext} from "react";
  import Avatar from "../../components/Avatar";  
  import stylesGlobal from "../../assets/css/globalStyles";
  import Feather from "react-native-vector-icons/Feather";
  import { DataContext } from "../../data/dataProvider"; 
  import { SettingContext} from '../SettingsScreen/Context'
const EditProfile = ({navigation}) => {
const { user } = useContext(DataContext); 
  const {options} = useContext(SettingContext)
  const [edit,setEdit] = useState(false)
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <View style={{ flex: 1, backgroundColor:options.theme  === "Sáng" ?"#fff":"#24283b" }}>  
        <View style={{ backgroundColor: "transparent",borderRadius:50, position: "relative",
                zIndex: 3,  
                elevation: 3, }}>
          <TouchableOpacity
            onPress={() =>{
              navigation.navigate("Hồ sơ");
              setEdit(!edit)
            }
            }
            style={[
              stylesGlobal.flexCenter,
              {
                right: 0,
                top:60,
                position: "absolute",
                backgroundColor: "#c01e2e",
                borderRadius: 40,
                width: 40,
                height: 40,
                marginRight: 20,
                marginTop: 10, 
              },
            ]}
          >
            <Feather name="check" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <ScrollView>
        <View
          style={[
            stylesGlobal.flexRow,
            stylesGlobal.py_2,
            { alignItems: "center", justifyContent: "center",position:"relative" },
          ]}
        >
          <Avatar image={user.inforPerson.avatar} name='Luki' style={{ width: 80, height: 80 }} styleBox={{width: 90, height: 90 }} />
         {edit && <View style={{position:"absolute"}}>
          <ChooseAvatar />
          </View>}
        </View>
          <View style={[{ paddingHorizontal: 15, marginTop: 20,borderRadius:50 }]}>
            
            <View style={[stylesGlobal.p_2, styles.boxContent,{backgroundColor:options.theme  === "Sáng" ?"#faf9ff" :"#2a2d41"}]}>
            <View style={[styles.chipHeader, { alignItems: "center", alignSelf: "flex-center" }]}>
              <Text
                style={[
                  {
                    fontWeight: "600",
                    fontSize: 15,
                    textTransform: "uppercase",
                    textAlign: "center",
                    color:"#fff"
                  },
                ]}
              >
                Thông tin cá nhân
              </Text>
            </View>
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Họ và tên</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                keyboardType={"default"}
                value={user.inforPerson.fullName}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Số điện thoại</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                keyboardType={"numeric"}
                value={user.inforPerson.phone}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Số điện thoại</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.inforPerson.email}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Ngày sinh</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                keyboardType={"default"}
                value={user.inforPerson.dob}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Giới tính</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={
                  user.inforPerson.gender === "male" ? "Nam" : "Nữ"
                }
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />

              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Nơi sinh</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                keyboardType={"default"}
                value={user.inforPerson.born}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Thường trú</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                keyboardType={"default"}
                value={user.inforPerson.address}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Tỉnh/Thành phố</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                keyboardType={"default"}
                value={user.inforPerson.province}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Quận/huyện</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                keyboardType={"default"}
                value={user.inforPerson.district}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Phường/Xã</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                keyboardType={"default"}
                value={user.inforPerson.town}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
            </View>
          </View>

          <View style={[{ paddingHorizontal: 15, marginTop: 20 }]}> 
            <View style={[stylesGlobal.p_2, styles.boxContent,{backgroundColor:options.theme  === "Sáng" ?"#faf9ff" :"#2a2d41"}]}>
              
            <View style={[styles.chipHeader, { alignItems: "center", alignSelf: "flex-center" }]}>
              <Text
                style={[
                  {
                    fontWeight: "600",
                    fontSize: 15,
                    textTransform: "uppercase",
                    textAlign: "center",
                    color:"#fff"
                  },
                ]}
              >
                Thông tin tài khoản
              </Text>
            </View>
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Số tài khoản</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                keyboardType={"decimal-pad"}
                value={user.inforAccount.numberAccount}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Ngân hàng</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.inforAccount.bank}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Chi nhánh Ngân hàng</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.inforAccount.branch}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
            </View>
          </View>
          <View style={[{ paddingHorizontal: 15, marginTop: 20 }]}> 
            <View style={[stylesGlobal.p_2, styles.boxContent,{backgroundColor:options.theme  === "Sáng" ?"#faf9ff" :"#2a2d41"}]}>
              
            <View style={[styles.chipHeader, { alignItems: "center", alignSelf: "flex-center" }]}>
              <Text
                style={[
                  {
                    fontWeight: "600",
                    fontSize: 15,
                    textTransform: "uppercase",
                    textAlign: "center",
                    color:"#fff"
                  },
                ]}
              >
                Thông tin Định danh
              </Text>
            </View>
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Số CCCD</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                keyboardType={"numeric"}
                value={user.identification.number}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Ngày cấp</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.identification.dateProvide}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Nơi cấp</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.identification.addressProvide}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />  
            </View>
          </View>

          <View style={[{ paddingHorizontal: 15, marginTop: 20 }]}> 
            <View style={[stylesGlobal.p_2, styles.boxContent,{backgroundColor:options.theme  === "Sáng" ?"#faf9ff" :"#2a2d41"}]}>
              <View style={[styles.chipHeader, { alignItems: "center", alignSelf: "flex-center" }]}>
              <Text
                style={[
                  {
                    fontWeight: "600",
                    fontSize: 15,
                    textTransform: "uppercase",
                    textAlign: "center",
                    color:"#fff"
                  },
                ]}
              >
                Sơ yếu lý lịch
              </Text>
            </View>
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Mã số thuế</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                keyboardType={"decimal-pad"}
                value={user.curriculumVitae.numberTax}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Email Cá nhân</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.curriculumVitae.email}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Quốc tịch</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.curriculumVitae.nationality}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Dân tộc</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.curriculumVitae.nation}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Tôn giáo</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={
                  user.curriculumVitae.religion === "none"
                    ? "Không"
                    : user.curriculumVitae.religion
                }
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              /> 
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Nguyên quán</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.curriculumVitae.domicile}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Tình trạng hôn nhân</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.curriculumVitae.status}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              /> 
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Tạm trú</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.curriculumVitae.address}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Tỉnh/Thành phố</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.curriculumVitae.province}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Quận / Huyện</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.curriculumVitae.district}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Phường / Xã</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.curriculumVitae.town}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
            </View>
          </View>

          <View style={[{ paddingHorizontal: 15, marginTop: 20 }]}> 
            <View style={[stylesGlobal.p_2, styles.boxContent,{backgroundColor:options.theme  === "Sáng" ?"#faf9ff" :"#2a2d41"}]}>
            <View style={[styles.chipHeader, { alignItems: "center", alignSelf: "flex-center" }]}>
              <Text
                style={[
                  {
                    fontWeight: "600",
                    fontSize: 15,
                    textTransform: "uppercase",
                    textAlign: "center",
                    color:"#fff"
                  },
                ]}
              >
              Thông tin Học vấn
              </Text>
            </View>
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Trường học</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.inforStudy.school}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Trình độ chuyên môn</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.inforStudy.levelWork}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Trình độ văn hoá</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.inforStudy.levelCulture}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Trình độ học vấn</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.inforStudy.levelStudy}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Ngôn ngữ</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.inforStudy.language}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Trình độ ngoại ngữ</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.inforStudy.certificate}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Xếp loại</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.inforStudy.rank}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
            </View>
          </View>

          <View style={[{ paddingHorizontal: 15, marginTop: 20 }]}> 
            <View style={[stylesGlobal.p_2, styles.boxContent,{backgroundColor:options.theme  === "Sáng" ?"#faf9ff" :"#2a2d41"}]}>
              
            <View style={[styles.chipHeader, { alignItems: "center", alignSelf: "flex-center" }]}>
              <Text
                style={[
                  {
                    fontWeight: "600",
                    fontSize: 15,
                    textTransform: "uppercase",
                    textAlign: "center",
                    color:"#fff"
                  },
                ]}
              >
              Sức khoẻ
              </Text>
            </View>
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Chiều cao</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.health.height}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Cân nặng</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.health.weight}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Nhóm máu</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.health.blood}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Thị lực</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.health.eyeSight}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
              <Text style={[styles.titleInput,{color:options.theme  === "Sáng" ?"#000" :"#fff"}]}>Tim</Text>
              <TextInput
                editable={false}
                style={[styles.input,{borderColor:options.theme  === "Sáng" ?"#e6e6ef" :"#2f3642",color:options.theme  === "Sáng" ?"#000" :"#fcfcfc",
    backgroundColor: options.theme  === "Sáng" ?"#fff" :"#2f3642"}]}
                value={user.health.heart}
                // onChangeText={field.onChange}
                // placeholder={placeholder}
                placeholderTextColor="#91919f"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default EditProfile

const styles = StyleSheet.create({  titleInput: {
    marginLeft: 10,
    marginBottom: 3,
    color: "#4f4f4f",
  },
  inputBox: {
    position: "relative",
  },
  input: {
    height: 50,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: "#e6e6ef",
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  icon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  chipHeader: {
    backgroundColor: "#c01e2e",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom:20,
  },
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
  },
});

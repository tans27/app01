import { StyleSheet, Text, View,FlatList,Dimensions,TextInput,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import React,{useContext,useState} from 'react'
import  {ITHelpDeskContext } from './Context'
import Card from './Card'
import Tag from './Tab'
import { searchData } from '../../extensions/searchData'
import styleGlobal from '../../assets/css/globalStyles'
import Feather from 'react-native-vector-icons/Feather'
const ITHelpDesk = ({navigation}) => {
  const {dataITHelpDesk,listRender } = useContext(ITHelpDeskContext)
  const [value, setValue] = useState("");
  const [targetSearch] = useState(["title","code"]);
  const [dataHande,setDataHanlde] = useState(dataITHelpDesk)
  React.useEffect(() => {
    if(listRender==="Được giao") { 
      setDataHanlde(dataITHelpDesk.filter(x => x.emp_id.id===506))
    }
    else if(listRender==="Yêu cầu") {
      setDataHanlde(dataITHelpDesk.filter(x => x.person_name.id===506))
    }
    else {
      setDataHanlde(dataITHelpDesk) 
    }
  },[listRender])
  const renderItem = ({ item }) => (
    <Card 
      nameRequire={item.person_name.name}
      avatar={item.avatar ? item.avatar :""} 
      from={item.department_person}
      nameHandle={item.emp_id.name}
      to={item.maintenance_team_id.name}
      priority={Number(item.priority)}
      request_date={item.request_date}
      the_average_time={item.the_average_time}
      completion_time={item.completion_time}
      close_date={item.close_date}  
      content={item.title}  
      state={item.state}
      navigation={() => navigation.navigate("Chi tiết Helpdesk",{
        item:item
      })}
    />
  );
  return (
    <View style={[{ flex: 1, backgroundColor: "#fff",justifyContent: "flex-start",alignItems: "center"}]}>  
      <Tag />
      <View style={[styleGlobal.inputBox,{paddingBottom:0,marginTop:15,marginBottom:5,backgroundColor:"transparent"}]}>
        <TextInput
          style={[styleGlobal.input,{width:Dimensions.get("window").width - 40,
          marginBottom: 0,}]}
          keyboardType={"default"}
          onChangeText={(val) => setValue(val)}
          placeholder={"Tìm kiếm yêu cầu"}
          placeholderTextColor="#91919f"
          defaultValue={value}
        />
        <TouchableOpacity 
          style={styles.icon}
        >
          <Feather name="search" size={20} color="#91919f" />
        </TouchableOpacity>
      </View>
      { dataHande.length > 0 && 
      <FlatList
        data={searchData(dataHande, targetSearch, value)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />}
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Tạo yêu cầu")}
      >
        <View style={[styleGlobal.flexCenter, styles.buttonFixed]}>
          <Feather name="plus" size={30} color={"#fff"}></Feather>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default ITHelpDesk

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  buttonFixed: {
    backgroundColor: "#c01e2e",
    width: 55,
    height: 55,  
    position: "absolute",
    bottom: 30,
    right: 30,
    opacity: 0.8,
    borderRadius:40,
  },
})
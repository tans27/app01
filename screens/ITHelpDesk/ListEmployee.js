import { StyleSheet,Text,TextInput , View,TouchableOpacity,FlatList,Image ,Dimensions} from 'react-native'
import React,{useLayoutEffect,useContext,useState} from 'react'
import styleGlobal from '../../assets/css/globalStyles'
import LineEmploy from '../../components/LineEmployee'
import { ITHelpDeskContext } from './Context'
import Feather from 'react-native-vector-icons/Feather'
import axios from 'axios' 
import { searchData } from '../../extensions/searchData'
import { arrayRemove} from '../../extensions/arrayRemoveSameID'
import notifyImage from '../../assets/images/nodata.png'
const ListEmployee = () => {
  const {supporter,setSuppoter,allSupporters,setAllSuppoter} = useContext(ITHelpDeskContext);
  const [value, setValue] = useState("");
  const [targetSearch] = useState(["name"]);
  const getSuppoter = async()=> {
    try {
      const response = await axios.get('http://test.diligo.vn:15000/api/v1/employee-info',{ 
      });
      setAllSuppoter(response.data.data); 
    } catch (error) {
      console.error(error);
    }
  } 
  useLayoutEffect(() => {
    getSuppoter()
  },[])   
    const renderItem = ({ item }) => (
        <LineEmploy
          name={item.name}
          key={item.id}
          avatar={item.avatar}
          position={item.inforWork[0].position.name}
          press={() => {
            !supporter.find(o => o.id === item.id)
              ? setSuppoter((prevState) => [...prevState, {id:item.id,name:item.name,avatar:item.avatar,position:item.inforWork[0].position.name}])
              : setSuppoter(arrayRemove(supporter,item.id).filter((e) => e.id !== item.id));
          }}
          active={supporter.find(o => o.id === item.id)}
        />
      );
  return (
    <View style={[{ flex: 1, backgroundColor: "#fff" }]}>
    <View style={[styleGlobal.inputBox,{paddingHorizontal: 20,}]}>
      <TextInput
        style={styleGlobal.input}
        keyboardType={"default"}
        onChangeText={(val) => setValue(val)}
        placeholder={"Tìm kiếm nhân viên"}
        placeholderTextColor="#91919f"
        defaultValue={value}
      />
      <TouchableOpacity 
        style={styles.icon}
      >
        <Feather name="search" size={20} color="#91919f" />
      </TouchableOpacity>
    </View> 
    {searchData(allSupporters, targetSearch, value).length > 0 ? 
    <FlatList
      data={searchData(allSupporters, targetSearch, value)}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />: <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: "#fff",
    }}
  >
    <Image source={notifyImage} style={{width:Dimensions.get("window").width / 2,height:Dimensions.get("window").width / 2}} alt="/" />
    <Text
      style={[
        {
          color: "#000",
          fontSize: 20,
          paddingBottom: 90,
          fontWeight: "700",
          marginTop:20
        },
      ]}
    >
      {"Không có thông báo nào!"}
    </Text>
  </View>}
  </View>
  )
}

export default ListEmployee

const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        right: 35,
        top: 15,
      },
})
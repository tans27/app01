import { StyleSheet, Text, View,FlatList,Alert ,TouchableOpacity,TextInput ,Image,Dimensions} from 'react-native'
import React,{useContext,useState} from 'react'
import Row from './Row'
import { NewsContext } from './Context'
import Feather from 'react-native-vector-icons/Feather'
import styleGlobal from '../../assets/css/globalStyles'
import { searchData} from '../../extensions/searchData'
import nodata from '../../assets/images/nodata.jpg'
const News = ({navigation}) => {
const {dataNews} = useContext(NewsContext)
const [value, setValue] = useState("");
const [targetSearch] = useState(["title"]);
// console.log(data)
const renderItem = ({ item }) => ( 
    <Row 
    image={item.avatar}
    title={item.title}
    navigation={() => {navigation.navigate("Chi tiết tin tức", {
      title: item.title,
      image: item.avatar, 
      author:item.create_by.name,
      avatar:'',
      date:item.create_date,
      content:item.content
    })}}
    tag={item.quiz_ids[0].name}
    date={item.create_date}
    /> 
  );
  return (
    <View style={[{ flex: 1, backgroundColor: "#fff",justifyContent: "center",alignItems: "center"}]}>
        {dataNews && dataNews.length > 0 ? <><View style={[styleGlobal.inputBox]}>
        <TextInput
          style={[styleGlobal.input,{width:Dimensions.get("window").width - 40}]}
          keyboardType={"default"}
          onChangeText={(val) => setValue(val)}
          placeholder={"Tìm kiếm bài viết"}
          placeholderTextColor="#91919f"
          defaultValue={value}
        />
        <TouchableOpacity
          onPress={() => Alert.alert("Tính năng đang được cập nhật!")}
          style={styles.icon}
        >
          <Feather name="search" size={20} color="#91919f" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchData(dataNews, targetSearch, value)}
        renderItem={renderItem}
        keyExtractor={(item) => item.title} 
  showsVerticalScrollIndicator ={false}
  showsHorizontalScrollIndicator={false}
      /></>  :  <View style={{flex: 1, justifyContent: "center",alignItems: "center",backgroundColor:"#fff",paddingBottom: 40 }}>
      <Image source={nodata} alt='/'/>
      <Text style={{fontSize:20,fontWeight:'700'}}>Không tìm thấy bài viết nào!</Text>
</View>
     }
    </View>
  )
}

export default News

const styles = StyleSheet.create({
     
  icon: {
    position: "absolute",
    right: 35,
    top: 15,
  },
})
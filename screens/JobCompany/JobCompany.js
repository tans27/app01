import {
  FlatList,
  ScrollView,
  View, 
  Image,
  Text,
  SafeAreaView
} from "react-native";
import React,{useContext} from "react";
import BoxJob from "../../components/BoxJob";
import styleGlobal from "../../assets/css/globalStyles";
// import { DetailJobContext } from './Context'
import { DataContext } from '../../data/dataProvider'
import nodata from '../../assets/images/nodata.jpg' 
const JobCompany = ({ navigation }) => {
  
  const { data } = useContext(DataContext) 
  // console.log(data)
  const renderItem = ({ item }) => (
    <BoxJob
      navigation={() =>
        navigation.navigate("Chi tiết công việc", {
          title: item.title,
          status: item.status,
          deadLine: item.date_start,
          member: item.member,
          listJob:item.list_jobs
        })
      }  
      index={item.id}
      listJob={item.list_jobs}
      deadLine={item.date}
      dateStart={item.date_start}
      title={item.title}
      description={item.description}
      status={item.status}
      member={item.member.slice(0, 5)}
    />
  );
  return (
    <> 
        <SafeAreaView style={[{ backgroundColor: "#faf9ff" }]}>
          <View style={[styleGlobal.px_2]}>
          {data.length > 0 ?       <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />: <View style={{flex: 1, justifyContent: "center",alignItems: "center",backgroundColor:"#fff" }}>
                <Image source={nodata} alt='/'/>
                <Text style={{fontSize:20,fontWeight:'700'}}>Không tìm thấy công việc nào!</Text>
          </View>
        }
        </View>
        </SafeAreaView> 
    </>
  );
};

export default JobCompany; 
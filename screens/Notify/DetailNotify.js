import { StyleSheet, Text, View,Image,Dimensions,ScrollView} from 'react-native'
import React,{useEffect} from 'react'
import notify from '../../assets/images/notify.png'
import { getParagraphs} from '../../extensions/regexTool' 
import DownLoadFile from '../../components/DownLoadFile'
const DetailNotify = ({ navigation, route }) => {
    useEffect(() => {
        navigation.setOptions({ title: route.params.title });
      }, []);
  return (
    <View
      style={[{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 }]}
    >
        <ScrollView>
        <View>
        <Image style={styles.image} source={notify} alt='/'/>
        </View>
        <View style={{marginTop:20}}>
        {getParagraphs(route.params.content).map((ele, index) => {
                return <Text style={[styles.description, { fontWeight:'400'}]}  key={index}>{ele.replace(new RegExp('<[^>]*>', 'g'), '')}</Text>
            })}
        </View>
        <Text>
        {route.params.file && <DownLoadFile listLink={route.params.file}/> }
        </Text>
        </ScrollView>
    </View>
  )
}

export default DetailNotify

const styles = StyleSheet.create({
    image:{
        width:Dimensions.get("window").width - 40,
        height:(Dimensions.get("window").width - 40 )/2,
        borderRadius:10,
    }
})
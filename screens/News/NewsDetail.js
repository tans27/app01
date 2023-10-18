import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native"; 
import React, { useEffect } from "react";
import Avatar from "../../components/Avatar";
import styleGlobal from "../../assets/css/globalStyles";
import moment from "moment";
import {getParagraphs} from '../../extensions/regexTool'
const NewsDetail = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({ title: route.params.title });
  }, []);
  // const [webViewHeight,setWebViewHeight] = useState(0)
  // const handleWebViewMessage = (e) => {
  //   const postMessage =JSON.parse(e)
  //   if(postMessage.type === 'dimensions') {
  //     const {height} = postMessage
  //     setWebViewHeight(height)
  //   }
  // }
  return (
    <ScrollView
      style={[{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 }]}
    >
      <Image
        style={[styles.image]}
        source={{ uri: route.params.image }}
        alt="/"
      />
      <View style={[styleGlobal.flexStart, { marginVertical: 5 }]}>
        <Avatar
          image={route.params.avatar}
          style={{ width: 48, height: 48 }}
          styleBox={{ width: 50, height: 50 }}
          styleText={{ fontSize: 18, fontWeight: "400" }}
          name={route.params.author}
        />
        <View style={[{ flexDirection: "column", marginLeft: 5 }]}>
          <Text style={[styles.name]}>{route.params.author}</Text>
          <Text style={[styles.date, styleGlobal.colorPrimary]}>
            {moment(route.params.date).format("DD/MM/YYYY")}
          </Text>
        </View>
      </View>
      <View
        style={[
          {
            flex: 1,
            width: Dimensions.get("window").width - 40,
          },
        ]} 
      >
        <Text style={[styles.title]}>{route.params.title}</Text>
        {getParagraphs(route.params.content).map((ele, index) => {
                return <Text style={[styles.description, { fontWeight:'400'}]}  key={index}>{ele.replace(new RegExp('<[^>]*>', 'g'), '')}</Text>
            })} 
      </View>
    </ScrollView>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "600",
    width: Dimensions.get("window").width - 20,
    marginVertical: 7,
  },
  image: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").height / 4,
    marginBottom: 15,
    borderRadius: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
  },
  content: {
    fontSize: 15,
  },
});

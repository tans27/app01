import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
  Animated,
} from "react-native";
import React,{useState,useEffect} from "react";
import styleGlobal from "../../assets/css/globalStyles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Member from "../../components/Member";
import { WebView } from "react-native-webview";
import Chat from "./Chat";
const DetailTask = ({ navigation, route }) => {
  const [showChat,setShowChat] = useState(false)
  const [opacity] = useState(new Animated.Value(0));
  const [height] = useState(new Animated.Value(0));
  const showContent = () => {
    Animated.timing(height, {
      toValue: showChat ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();

    Animated.timing(opacity, {
      toValue: showChat ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();
  };
  const maxHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300], // <-- value that larger than your content's height
  });
  useEffect(() => {
    showContent()
  },[showChat])
  return (
    <View style={[{ flex: 1, backgroundColor: "#fff", alignItems: "center" }]}>
      <Animated.View style={{height:maxHeight,opacity:opacity}}>
      <View style={[styleGlobal.p_2, styles.boxMain]}>
        <View
          style={[
            styleGlobal.flexBetween,
            {
              paddingBottom: 20,
              borderColor: "rgba(0,0,0,0.1)",
              borderBottomWidth: 1, 
            },
          ]}
        >
          <Text style={[styles.title]}>{route.params.title}</Text>
          <View>
            <AntDesign name="star" size={25} color={"#f3cc00"}></AntDesign>
          </View>
        </View>
        <View style={[styleGlobal.flexBetween, { paddingTop: 20 }]}>
          <Text style={[styles.titleSecond]}>Dự án</Text>
          <View>
            <Text>{route.params.project}</Text>
          </View>
        </View>
        <View style={[styleGlobal.flexBetween, { paddingTop: 20 }]}>
          <Text style={[styles.titleSecond]}>Ngày bắt đầu</Text>
          <View>
            <Text>{route.params.dateStart}</Text>
          </View>
        </View>
        <View style={[styleGlobal.flexBetween, { paddingTop: 20 }]}>
          <Text style={[styles.titleSecond]}>Ngày kết thúc</Text>
          <View>
            <Text>{route.params.dateEnd}</Text>
          </View>
        </View>
        <View style={[styleGlobal.flexBetween, { paddingTop: 20 }]}>
          <Text style={[styles.titleSecond]}>Người thực hiện</Text>
          <View>
            <Member member={route.params.member} />
          </View>
        </View>
      </View>
      </Animated.View>
      <View
        style={[
          {
            flex: 1,
            width: Dimensions.get("window").width,
            backgroundColor: "#fff"
          },
        ]}
      >
        <View style={[styleGlobal.flexCenter,{marginTop:10}]}>
        <TouchableOpacity
          onPress={() => setShowChat(false)}
          style={[styleGlobal.flexCenter,{borderWidth:1,borderColor:'#c01e2e',borderTopLeftRadius:10,borderBottomLeftRadius:10,width:80,height:35,backgroundColor: !showChat ? '#c01e2e' : null}]}
        >
         <Text style={[styles.titleSecond, {textAlign: "center",color: !showChat ? '#fff' : "#c01e2e"}]}> Mô tả</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowChat(true)}
          style={[styleGlobal.flexCenter,{borderWidth:1,borderColor:'#c01e2e',borderTopRightRadius:10,borderBottomRightRadius:10,width:80,height:35,backgroundColor: showChat ? '#c01e2e' : null}]}
        >
         <Text style={[styles.titleSecond, {textAlign: "center",color: showChat ? '#fff' : "#c01e2e" }]}> Chat</Text>
        </TouchableOpacity>
        </View>
        {!showChat ? 
        <View style={[{paddingHorizontal: 20,flex: 1,}]}>
        <WebView
          source={{
            html: `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <style>@import url('https://fonts.googleapis.com/css2?family=Hind&display=swap');body{margin:0;background: white;font-family: 'Hind', sans-serif;line-height:1px,height:100px}</style>
</head><body>${route.params.description}</body></html>`,
          }}
          style={{ width: "100%" }}
          originWhitelist={["*"]}
          domStorageEnabled={true}
          scalesPageToFit={true}
          decelerationRate="normal"
          javaScriptEnabledAndroid={true}
          javaScriptEnabled={true}
          scrollEnabled={false}
          // onMessage={handleWebViewMessage(route.params.content)}
        /></View>
        : <Chat />}
      </View> 
    </View>
  );
};

export default DetailTask;

const styles = StyleSheet.create({
  boxMain: {
    width: Dimensions.get("window").width - 40,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    maxWidth: "80%",
  },
  titleSecond: {
    fontSize: 16,
    fontWeight: "700",
  },
});

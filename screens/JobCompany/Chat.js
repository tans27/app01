import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
  Animated
} from "react-native";
import React, { useState,useEffect,useContext } from "react";
import {DetailJobContext} from "./Context";
import styleGlobal from "../../assets/css/globalStyles";
import Avatar from "../../components/Avatar";
import FontAwesome from "react-native-vector-icons/FontAwesome"; 
import Comment from '../../components/Comment'
import { data } from '../../data/dataComment'
const Chat = () => {
  const userJoin = [
    {
      id: "1",
      avatar: `https://kenh14cdn.com/thumb_w/600/2016/doctor-strange-movie-composer-cumberbatch-1477887793397-0-184-750-1384-crop-1477889820454.jpg`,
      name: "Nguyễn Huy Hoàng",
    },
    {
      id: "2",
      avatar: "",
      name: "Nguyễn Hữu Chí",
    },
    {
      id: "3",
      avatar: "",
      name: "Nguyễn Trần Nhiệm",
    },
  ]; 
  const [value, setValue] = useState("");
  const [showChat,setShowChat] = useState(false)
  const [opacity] = useState(new Animated.Value(0));
  const [height] = useState(new Animated.Value(0));
  const {inputRef}= useContext(DetailJobContext)
  const showContent = () => {
    Animated.timing(height, {
      toValue: !showChat ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();

    Animated.timing(opacity, {
      toValue: !showChat ? 0 : 1,
      duration: 200,
      useNativeDriver: false, // <-- neccessary
    }).start();
  };
  const maxHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 150], // <-- value that larger than your content's height
  });
  useEffect(() => {
    if(value!=="" && value[value.length-1]==="@") {
      setShowChat(true);
    }
    else {
      setShowChat(false);
    }
  },[value])
  useEffect(() => {
    showContent()
  },[showChat])
   
  const RemindUser = ({ avatar, name }) => {
    return (
      <TouchableOpacity
        style={[styleGlobal.flexBetween, styles.rowIcon, , { marginVertical: 5 }]}
        onPress={() => setValue(value.concat(name)) }
      >
        <View style={[styleGlobal.flexCenter]}>
          <Avatar
            image={avatar.toString()}
            style={{ width: 30, height: 30 }}
            styleBox={{ width: 32, height: 32 }}
            name={name}
            styleText={{ fontSize: 18, fontWeight: "600" }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.title}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }; 
  const renderItem = ({ item }) => (
    <Comment
      user={item.user}
      content={item.content}
      time={item.time}
      reply={item.reply}
    />
  );
  const renderUser = ({ item }) => (
    <RemindUser name={item.name} avatar={item.avatar} />
  ); 
  return (  
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? "60" : "height"}
        style={[
          styles.container,
          {
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: Dimensions.get("window").height,
            backgroundColor: "#fff",
          },
        ]}
      >
        <View
          style={{
            marginBottom: 0,
            position: "relative",
            flex: 1,
          }}
        >
          <FlatList
            data={data()}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.inputBox}>
            <TextInput 
              ref={inputRef} 
              style={styles.input}
              keyboardType={"default"}
              onChangeText={(val) => setValue(val)}
              placeholder={"Gửi tin tới những người tham gia"}
              placeholderTextColor="#91919f"
              defaultValue={value} 
            />
            <TouchableOpacity style={[styleGlobal.flexCenter, styles.icon]} onPress={() => {
              inputRef.current.focus()
            }}>
              <FontAwesome name="send" size={23} color="#fff" />
            </TouchableOpacity>
            <Animated.View style={[{ backgroundColor: "#faf9ff",borderTopRightRadius:10,borderTopLeftRadius:10,paddingHorizontal:10, paddingTop:10, position: "absolute",left: 27,bottom: 70,height:maxHeight,opacity:opacity,width:Dimensions.get("window").width - 120}]}>
              <FlatList
                data={userJoin}
                renderItem={renderUser}
                keyExtractor={(item) => item.id}
              />
            </Animated.View>
          </View>
        </View>
      </KeyboardAvoidingView> 
  );
};

export default Chat;

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
  title: {
    fontWeight: "600",
  },
  text: {
    fontSize: 13,
  },
  inputBox: {
    position: "relative",
    paddingHorizontal: 20,
    bottom: 0,
  },
  input: {
    height: 50,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: "#e6e6ef",
    borderWidth: 1,
    paddingHorizontal: 15,
    width: Dimensions.get("window").width - 100,
  },
  icon: {
    position: "absolute",
    right: 10,
    bottom: 21,
    backgroundColor: "#c01e2e",
    width: 45,
    height: 45,
    borderRadius: 15,
  },
});

  
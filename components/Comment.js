import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React,{useContext} from "react";
import styleGlobal from "../assets/css/globalStyles";
import Avatar from "../components/Avatar";
import {timeChat} from "../extensions/timeChat";  
import { DetailJobContext} from '../screens/JobCompany/Context'
const Comment = ({ user, time, content, reply }) => {
  const { inputRef} = useContext(DetailJobContext)
  const Child = ({ user, time, content,last }) => {
    return (
      <View
        style={[
          styleGlobal.flexRow,
          {
            left: 17, 
            paddingTop: 10,
          },
        ]}
      >
        <View style={[styleGlobal.flexRow, { alignItems: "flex-start" }]}>
          <View
            style={{
              width: 30,
              height: 30,
              borderBottomLeftRadius: 10,
              top: -15,
              marginLeft: -2, 
            }}
          ></View>
          <Avatar
            image={user.avatar.toString()}
            style={{ width: 28, height: 28 }}
            styleBox={{ width: 30, height: 30 }}
            name={user.name}
            styleText={{ fontSize: 18, fontWeight: "600" }}
          />
        </View>
        <View style={[{ flexDirection: "column" }]}>
          <View
            style={[
              {
                marginLeft: 10,
                backgroundColor: "#f8f9fa", 
                maxWidth: Dimensions.get("window").width - 110,
                borderRadius: 15,
                padding: 8,
              },
            ]}
          >
            <View style={[styleGlobal.flexRow, { flexDirection: "column" }]}>
              <Text style={[styles.title]}>{user.name}</Text>
              <Text style={[styles.text]}>{content}</Text>
            </View>
          </View>

          <View style={[styleGlobal.flexRow, { marginLeft: 10, marginTop: 5 }]}>
            <TouchableOpacity style={{ marginHorizontal: 20 }}>
              <Text style={[styles.infor]}>{
                timeChat(time) 
              }</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => inputRef.current.focus()}>
              <Text style={[styles.infor]}>{"Phản hồi"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={[{ paddingHorizontal: 0 }]}>
      <View style={[styles.row]}>
        <View style={[styleGlobal.flexRow]}>
          <View style={[{ alignItems: "flex-start" }]}>
            <Avatar
              image={user.avatar.toString()}
              style={{ width: 36, height: 36 }}
              styleBox={{ width: 38, height: 38 }}
              name={user.name}
              styleText={{ fontSize: 18, fontWeight: "600" }}
            />
            <View
              style={{
                marginLeft: 17,
                marginTop: 3,
                flex: 1, 
              }}
            ></View>
          </View>
          <View style={[{ flexDirection: "column" }]}>
            <View style={[{ flexDirection: "column" }]}>
              <View
                style={[
                  {
                    marginLeft: 10,
                    backgroundColor: "#f8f9fa",
                    alignSelf: "flex-start",
                    maxWidth: Dimensions.get("window").width - 80,
                    borderRadius: 15,
                    padding: 8,
                  },
                ]}
              >
                <View
                  style={[styleGlobal.flexRow, { flexDirection: "column" }]}
                >
                  <Text style={[styles.title]}>{user.name}</Text>
                  <Text style={[styles.text]}>{content}</Text>
                </View>
              </View>

              <View
                style={[styleGlobal.flexRow, { marginLeft: 10, marginTop: 5 }]}
              >
                <TouchableOpacity style={{ marginHorizontal: 20 }}>
                  <Text style={[styles.infor]}>{timeChat(time)}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[styles.infor]}>{"Phản hồi"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {reply.length > 0 && reply.map((ele,index) => {
          return <Child id={ele.id} last={index === reply.length - 1} user={ele.user} content={ele.content} time={ele.time} key={index}/>  
        }
        )}
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  row: {
    borderRadius: 10,
    padding: 10,
    width: Dimensions.get("window").width,
    paddingBottom: 0,
  },
  title: {
    fontWeight: "600",
  },
  text: {
    fontSize: 14,
    marginTop: 3,
  },
  infor:{
    fontWeight: "600",color:"rgba(0,0,0,0.6)",fontSize:13
  }
});

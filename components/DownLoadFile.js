import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  Linking,
  TouchableOpacity,
} from "react-native";
import React, { useCallback } from "react";
import Feather from "react-native-vector-icons/Feather";
import styleGlobal from "../assets/css/globalStyles";
import * as OpenAnything from "react-native-openanything";

const DownLoadFile = ({ listLink }) => {
  return (
    <View>
        {listLink.map((ele, index) => {
          return <TouchableOpacity
          onPress={() =>
            OpenAnything.Launch(ele.link ? ele.link : ele
            )
          }
          key={index}
        >
          <Text style={{ fontWeight: "700" }}>File Đính kèm: </Text>
          <View
            style={[
              styleGlobal.flexStart,
              {
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
                borderRadius: 12,
                padding: 10,
                marginVertical: 10,
                width:Dimensions.get("window").width - 75
              },
            ]}
          >
            <View
              style={[
                styleGlobal.flexCenter,
                {
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: "#FDD5D7",
                },
              ]}
            >
              <Feather name="file-text" size={25} color={"#FD3C4A"}></Feather>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontWeight: "700",
                  width: Dimensions.get("window").width - 150,
                }}
              >
                {ele.name ? ele.name : ele.split("&name=")[1]}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        })}
    </View>
  );
};

export default DownLoadFile; 

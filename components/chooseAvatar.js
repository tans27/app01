import React, { useState, useEffect, useContext } from "react";
import { Image, View, Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Feather from "react-native-vector-icons/Feather";
import stylesGlobal from "../assets/css/globalStyles";
import { DataContext } from "../data/dataProvider";
export default function ImagePickerExample() {
  const { setUser } = useContext(DataContext);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // setUser({user:result.uri});
      setUser((prevState) => ({
        inforPerson: {
          // object that we want to update
          ...prevState.inforPerson, // keep all other key-value pairs
          avatar: result.uri, // update the value of specific key
        },
        inforWork: {
          // object that we want to update
          ...prevState.inforWork, // keep all other key-value pairs
        },
        inforAccount: {
          // object that we want to update
          ...prevState.inforAccount, // keep all other key-value pairs
        },
        identification: {
          // object that we want to update
          ...prevState.identification, // keep all other key-value pairs
        },
        workPermit: {
          // object that we want to update
          ...prevState.workPermit, // keep all other key-value pairs
        },
        curriculumVitae: {
          // object that we want to update
          ...prevState.curriculumVitae, // keep all other key-value pairs
        },
        inforStudy: {
          // object that we want to update
          ...prevState.inforStudy, // keep all other key-value pairs
        },
        health: {
          // object that we want to update
          ...prevState.health, // keep all other key-value pairs
        },
      }));
    }
  }; 
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={pickImage}
        style={[
          stylesGlobal.flexCenter,
          {
            right: -60,
            top: -50,
            position: "absolute",
            // backgroundColor: "#c01e2e",
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: 90,
            width: 80,
            height: 80,
            marginRight: 20,
            marginTop: 10,
            zIndex: 10,
            elevation: 10,
          },
        ]}
      >
        <Feather name="camera" size={25} color="#fff" />
      </TouchableOpacity>
      {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
    </View>
  );
}

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Animated,
  Dimensions, 
  Alert,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { searchData } from "../../extensions/searchData";
import CardProduct from "../../components/CardProduct";
import Feather from "react-native-vector-icons/Feather";
import { ApproveContext } from "./Context";
import styleGlobal from "../../assets/css/globalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { data} from '../../data/dataProduct'
const AddProduct = ({ navigation }) => {
  
  const [opacity] = useState(new Animated.Value(0));
  const [height] = useState(new Animated.Value(0));
  const [flipBox] = useState(new Animated.Value(0));
  const [flipSmooth] = useState(new Animated.Value(0));
  const [showDropDown, setShowDropDown] = useState(false);
  const [value, setValue] = useState("");
  const [targetSearch] = useState(["name"]);
  const { listProductAdd } = useContext(ApproveContext); 
  const showContent = () => {
    Animated.timing(height, {
      toValue: !showDropDown ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();

    Animated.timing(opacity, {
      toValue: !showDropDown ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();
  };
  const flipContent = () => {
    Animated.timing(flipBox, {
      toValue: !showDropDown ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();

    Animated.timing(flipSmooth, {
      toValue: !showDropDown ? 0 : 1,
      duration: 600,
      useNativeDriver: false, // <-- neccessary
    }).start();
  };
  const maxHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 400], // <-- value that larger than your content's height
  });
  const maxPadding = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20], // <-- value that larger than your content's height
  });
  const maxSmoth = flipBox.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 180], // <-- value that larger than your content's height
  });
  useEffect(() => {
    showContent();
    flipContent();
  }, [showDropDown]);
  const renderItem = ({ item }) => (
    <CardProduct
      name={item.name}
      money={item.price}
      key={item.key}
      image={item.image}
      data={item}
    />
  );
  return (
    <View style={[{ flex: 1, backgroundColor: "#fff" }]}>
      <View style={[styleGlobal.flexRow]}>
        <View style={[styleGlobal.inputBox, { paddingHorizontal: 20 }]}>
          <TextInput
            style={[
              styleGlobal.input,
              { width: Dimensions.get("window").width - 110 },
            ]}
            keyboardType={"default"}
            onChangeText={(val) => setValue(val)}
            placeholder={"Tìm kiếm sản phẩm"}
            placeholderTextColor="#91919f"
            defaultValue={value}
          />
          <TouchableOpacity style={styles.icon}>
            <Feather name="search" size={20} color="#91919f" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setShowDropDown(!showDropDown)}
          style={[
            styleGlobal.flexCenter,
            {
              width: 50,
              height: 50,
              borderColor: "#e6e6ef",
              borderWidth: 1,
              borderRadius: 10,
            },
          ]}
        >
          <Ionicons name={!showDropDown?"ios-filter" :"close"} size={20} color="#c01e2e" />
        </TouchableOpacity>
      </View>
      <Animated.View style={{
              opacity: opacity,
              maxHeight: maxHeight, paddingBottom: maxPadding}}>
        <View
          style={[
            styleGlobal.flexCenter,
            styles.boxFilter,
            {
              backgroundColor: "#faf9ff", 
            },
          ]}
        >
          <View
            style={[
              styleGlobal.flexStart,
              { marginTop: 20, paddingBottom: 40, flexWrap: 'wrap' },
            ]}
          >
            <TouchableOpacity onPress={() => Alert.alert("Tính năng!")}>
              <Animated.View
                style={[
                  styleGlobal.flexBetween,
                  {
                    flexDirection: "column",
                    width: (Dimensions.get("window").width - 40) / 3,
                    opacity: flipSmooth,
                    maxHeight: maxSmoth,
                  },
                ]}
              >
                <Animated.View
                  style={[
                    styleGlobal.flexBetween,
                    styles.boxIcon,
                    {
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "#c01e2e",
                      borderWidth: 2,
                    },
                  ]}
                >
                  <AntDesign name="clockcircle" size={30} color="#c01e2e" />
                </Animated.View>
                <Text style={[styles.descript]}>Văn phỏng</Text>
              </Animated.View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Alert.alert("Tính năng đang")}>
              <Animated.View
                style={[
                  styleGlobal.flexBetween,
                  {
                    flexDirection: "column",
                    width: (Dimensions.get("window").width - 40) / 3,
                    opacity: flipSmooth,
                    maxHeight: maxSmoth,
                  },
                ]}
              >
                <Animated.View
                  style={[
                    styleGlobal.flexBetween,
                    styles.boxIcon,
                    {
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "#c01e2e",
                      borderWidth: 2,
                    },
                  ]}
                >
                  <FontAwesome name="power-off" size={30} color="#c01e2e" />
                </Animated.View>
                <Text style={[styles.descript]}>Điện</Text>
              </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Alert.alert("Tính năng đang được cập nhật!")}
            >
              <Animated.View
                style={[
                  styleGlobal.flexBetween,
                  {
                    flexDirection: "column",
                    width: (Dimensions.get("window").width - 40) / 3,
                    opacity: flipSmooth,
                    maxHeight: maxSmoth,
                  },
                ]}
              >
                <View
                  style={[
                    styleGlobal.flexBetween,
                    styles.boxIcon,
                    {
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "#c01e2e",
                      borderWidth: 2,
                    },
                  ]}
                >
                  <FontAwesome name="power-off" size={30} color="#c01e2e" />
                </View>
                <Text style={[styles.descript]}>...</Text>
              </Animated.View>
            </TouchableOpacity> 
          </View>
        </View>
      </Animated.View>
      <FlatList
        data={searchData(data(), targetSearch, value)}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
      {listProductAdd.length > 0 && (
        <TouchableOpacity
          style={[
            styleGlobal.flexBetween,
            styles.button,
            styleGlobal.backgroundColorPrimary,
          ]}
          onPress={() => navigation.navigate("Xác nhận danh sách sản phẩm")}
        >
          <Text style={[styles.text, { color: "#fff" }]}>{"Đơn hàng"}</Text>
          <Text style={[styles.text, { color: "#fff" }]}>
            {`${listProductAdd.map((o) => o.quantity).reduce((a, b) => a + b, 0)} sản phẩm`} 
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    right: 35,
    top: 15,
  },
  button: {
    position: "absolute",
    bottom: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: Dimensions.get("window").width - 40,
    marginHorizontal: 20,
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontWeight: "500",
  },
  boxFilter: {
    width: Dimensions.get("window").width - 40,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  descript: {
    fontSize: 15,
    marginTop: 5,
    textAlign: "center",
    fontWeight: "600",
  },
  boxIcon: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 0.6,
  },
});

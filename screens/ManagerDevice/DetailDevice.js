import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Animated
} from "react-native";
import React, { useState, useEffect,useLayoutEffect } from "react";
import styleGlobal from "../../assets/css/globalStyles";
import moment from "moment"; 
import AppIntroSlider from "react-native-app-intro-slider";
import UseProcess from "./UseProcess";
import Row from "./Row";
import NameContact from "../../components/NameContact";
import Feather from 'react-native-vector-icons/Feather'
import axios from 'axios'
// import { getParagraphs} from '../../extensions/regexTool'
const DetailDevice = ({ route, navigation }) => { 
  //Animated
  const [showDescription, setShowDescription] = useState(false);
  const [opacity] = useState(new Animated.Value(0));
  const [height] = useState(new Animated.Value(0));
  const [showProcess, setShowProcess] = useState(false);
  const [opacityProcess] = useState(new Animated.Value(0));
  const [heightProcess] = useState(new Animated.Value(0));
  const showUserProcess = () => {
    Animated.timing(heightProcess, {
      toValue: !showProcess ? 0 : 1,
      duration: 200,
      useNativeDriver: false, // <-- neccessary
    }).start();

    Animated.timing(opacityProcess, {
      toValue: !showProcess ? 0 : 1,
      duration: 200,
      useNativeDriver: false, // <-- neccessary
    }).start();
  };
  const showContent = () => {
    Animated.timing(height, {
      toValue: !showDescription ? 0 : 1,
      duration: 200,
      useNativeDriver: false, // <-- neccessary
    }).start();

    Animated.timing(opacity, {
      toValue: !showDescription ? 0 : 1,
      duration: 200,
      useNativeDriver: false, // <-- neccessary
    }).start();
  };
  const maxHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1000], // <-- value that larger than your content's height
  });
  const maxHeightProcess = heightProcess.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1000], // <-- value that larger than your content's height
  });
  useEffect(() => {
    showContent();
  }, [showDescription]);
  useEffect(() => {
    showUserProcess();
  }, [showProcess]);
  const [data, setData] = useState([]);
  const getDevice = async()=> {
    try {
      const response = await axios.get(`http://hrm.diligo.vn/api/v1/device/get-by?default_code=${route.params.code}`);
      setData(response.data.data); 
    } catch (error) {
      console.error(error);
    }
  } 
  useLayoutEffect(() => {
    getDevice()
  },[])  
  // useEffect(() => {
    
  //   setData(dataManagerDevice && dataManagerDevice.filter((x) => x.code === route.params.code)[0]);
  // }, []); 
  const slides = [
    {
      key: 0,
      image: require("../../assets/images/productDemo.png"),
    },
    {
      key: 1,
      image: require("../../assets/images/productDemo.png"),
    },
    {
      key: 2,
      image: require("../../assets/images/productDemo.png"),
    },
  ];
  const renderSlider = ({ item }) => {
    return (
      <View style={styles.slide} key={item.image}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };
  return (  
    <ScrollView
      style={[
        styles.box,
        { flex: 1, paddingHorizontal: 20, backgroundColor: "#fff" },
      ]}
    >
      <View>
        
    {(data && data.length > 0) ? 
    <View>
        <View
          style={[
            styleGlobal.flexCenter,
            styles.boxImage,
            { position: "relative" },
          ]}
        >
          <View style={[styles.image]}>
            <AppIntroSlider
              showNextButton={false}
              showDoneButton={false}
              showPrevButton={false}
              dotStyle={styles.dot}
              activeDotStyle={[
                styles.dotActive,
                styleGlobal.backgroundColorPrimary,
              ]}
              renderItem={renderSlider}
              data={data[0].image_device}
            />
          </View>
          {data[0].period !== "" && (
            <View
              style={[
                styles.textDecorationLine,
                { position: "absolute", top: 0, right: 0 },
              ]}
            >
              <Text style={[{ color: "#FCAC12", fontWeight: "600" }]}>
                {`Còn ${
                  Number(moment(data && data[0].period)) -
                  Number(new Date().getMonth()) +
                  1
                } tháng bảo hành`}
              </Text>
            </View>
          )}
        </View>
        <View
          style={[
            styleGlobal.flexLeft,
            {
              width: Dimensions.get("window").width - 40,
            },
          ]}
        >
          <Text style={[styles.title]}>{data[0].name}</Text>
          <View style={[styleGlobal.flexCenter]}>
            <Text style={[styles.description]}>Số seri:</Text>
            <View style={[styles.chip]}>
              <Text style={[{ color: "#00A86B" }]}>{data[0].serial}</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            {
              width: Dimensions.get("window").width - 40,
            },
          ]}
        ><View style={[styleGlobal.flexBetween, styles.rowInfor]}>
        <Text style={[styles.description]}>Mã thiết bị: </Text>
        <Text style={[styles.description, { fontWeight: "400" }]}>
          {data[0].code}
        </Text>
      </View>
          <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
            <Text style={[styles.description]}>Ngày bàn giao: </Text>
            <Text style={[styles.description, { fontWeight: "400" }]}>
              {moment(data[0].date_import).format("DD/MM/YYYY")}
            </Text>
          </View>
          <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
            <Text style={[styles.description]}>BP quản lý/bảo trì: </Text>
            <Text style={[styles.description, { fontWeight: "400" }]}>
              {(data[0].category.name!=="") ? data[0].category.name : "Đang cập nhật"}
            </Text>
          </View>
          <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
            <Text style={[styles.description]}>Đội phụ trách: </Text>
            <Text style={[styles.description, { fontWeight: "400" }]}>
              {(data[0].team_id.name !=='') ? data[0].team_id.name : "Đang cập nhật"}
            </Text>
          </View>
          <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
            <Text style={[styles.description]}>Phòng ban sử dụng: </Text>
            <Text style={[styles.description, { fontWeight: "400" }]}>
              {(data[0].department.name !=='') ? data[0].department.name : "Đang cập nhật"}
            </Text>
          </View>
          <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
            <Text style={[styles.description]}>Quản lý: </Text>
            <Text style={[styles.description, { fontWeight: "400" }]}>
              {data ? (
                <NameContact 
                  phoneNumber = {"0963395763"}
                  mail={"nguyenhuyhoangdevelop@gmail.com"}
                  
                  style={[styles.description, { fontWeight: "400" }]}
                  name={(data[0].parent.name !=='') ? data[0].parent.name :"Đang cập nhật"}
                />
              ) : (
                "Đang cập nhật"
              )}
            </Text>
          </View>
          <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
            <Text style={[styles.description]}>Người sử dụng: </Text>
            <Text style={[styles.description, { fontWeight: "400" }]}>
              {(data[0].employee.name  !=='') ? data[0].employee.name : "Đang cập nhật"}
            </Text>
          </View>
          <View style={[styleGlobal.flexBetween, styles.rowInfor]}>
            <Text style={[styles.description]}>BP quản lý/bảo trì: </Text>
            <Text style={[styles.description, { fontWeight: "400" }]}>
              {(data[0].category.name !=='') ? data[0].category.name : "Đang cập nhật"}
            </Text>
          </View>
          <View style={[styleGlobal.flexBetween, styles.rowInfor]}> 
            <Text style={[styles.description]}>Mô tả: </Text> 
            <View style={[styles.description, { fontWeight: "400" }]}>
            {data ?  <TouchableOpacity onPress={() =>{setShowDescription(!showDescription)}}>
               <View style={[styleGlobal.flexCenter]}>
               <Text style={[{marginRight:3,}]}> 
               Chi tiết
               </Text>
               <Feather name="chevron-right" size={18} color={"rgba(0,0,0,0.7)"}></Feather>
               </View>
               </TouchableOpacity>  :<Text>Đang cập nhật</Text>} 
            </View>
          </View>
          <Animated.View
        style={{
          opacity: opacity,
          maxHeight: maxHeight, 
        }}
      >
        <View style={{paddingVertical:20}}>
        {/* {getParagraphs((data && data.length > 0) ? data[0].description :"").map((ele, index) => {
                return <Text style={[styles.description, { fontWeight:'400'}]}  key={index}>{ele.replaceAll(new RegExp('<[^>]*>', 'g'), '')}</Text>
            })} */}
            <Text>{`*Hình ảnh sản phẩm và nội dung hiển thị trên các trang nêu trên chỉ nhằm mục đích tham khảo. Tính năng và thông số kỹ thuật của sản phẩm thực tế(bao gồm nhưng không giới hạn ở kiểu dáng, màu sắc và kích thước), cũng như nội dung hiển thị thực tế(bao gồm nhưng không giới hạn ở hình nền, giao diện người dùng và biểu tượng)có thể thay đổi.

**Tất cả dữ liệu trong các trang nêu trên là giá trị lý thuyết do các phòng nghiên cứu nội bộ của HUAWEI thu thập qua các thử nghiệm được thực hiện trong điều kiện cụ thể. Để biết thêm thông tin, hãy tham khảo chi tiết sản phẩm nêu trên. Dữ liệu thực tế có thể thay đổi do khác biệt về từng sản phẩm, phiên bản phần mềm, tình trạng ứng dụng và yếu tố môi trường. Mọi dữ liệu đều dựa trên sử dụng thực tế.

***Do các thay đổi trong thời gian thực liên quan đến các lô sản phẩm, yếu tố sản xuất và cung ứng nên để cung cấp thông tin, thông số kỹ thuật và tính năng sản phẩm chính xác, HUAWEI có thể điều chỉnh mô tả văn bản và hình ảnh trong các trang thông tin nêu trên theo thời gian thực sao cho tương ứng với hiệu suất sản phẩm, thông số kỹ thuật, chỉ số và cấu phần của sản phẩm thực tế. Thông tin sản phẩm có thể được thay đổi và điều chỉnh như trên mà không thông báo.

****Kích thước, cân nặng và thông số kỹ thuật của sản phẩm chi mang tính tương đối. Thông số kích thước của từng sản phẩm có thể khác nhau. Tất cả thông số kỹ thuật đều được dựa trên sản phẩm thực tế. Kích thước, trọng lượng và thông số kỹ thuật chỉ có tính chất tham khảo. Các thông số kỹ thuật và sản phẩm thực tế có thể khác biệt.

*****Dung lượng pin của sản phẩm là giá trị điển hình. Dung lượng pin thực tế cho từng sản phẩm riêng biệt có thể cao hoặc thấp hơn đôi chút so với dung lượng pin danh nghĩa.`}</Text>
        </View>

      </Animated.View> 
      
        </View>
        <View style={[styleGlobal.flexBetween, styles.rowInfor]}> 
            <Text style={[styles.description]}>Quá trình sử dụng: </Text> 
            <View style={[styles.description, { fontWeight: "400" }]}>
            {data ?  <TouchableOpacity onPress={() =>{setShowProcess(!showProcess)}} >
               <View style={[styleGlobal.flexCenter]}>
               <Text style={[{marginRight:3,}]}> 
               Chi tiết
               </Text>
               <Feather name="chevron-right" size={18} color={"rgba(0,0,0,0.7)"}></Feather>
               </View>
               </TouchableOpacity>  :<Text>Đang cập nhật</Text>} 
            </View>
          </View>
        <Animated.View
        style={{
          opacity: opacityProcess,
          maxHeight: maxHeightProcess, 
        }}
      >
        <View style={{paddingVertical:20}}>
          
        <UseProcess />
        </View>
        </Animated.View>
        <View
          style={[
            styleGlobal.flexBetween,
            styles.rowInfor,
            { borderBottomColor: "transparent" },
          ]}
        >
          <Text style={[styles.description]}>Thiết bị phụ tùng: </Text>
        </View> 
        {(data[0].device_extra.length) > 0 ? data[0].device_extra.map((ele, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("Chi tiết thiết bị", {
                  code: ele.code,
                })
              }
            >
              <Row
                name={ele.name}
                code={ele.code}
                image={ele.image}
                dateProvider={ele.date_import}
                data={ele}
              />
            </TouchableOpacity>
          )
        }) : <Text style={{marginBottom:20}}> Không có thiết bị nào</Text>}
          
      </View> : <Text>OK</Text> }
      </View>
    </ScrollView> 
  );
};

export default DetailDevice;

const styles = StyleSheet.create({
  boxImage: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").width - 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  image: {
    width: Dimensions.get("window").width - 100,
    height: Dimensions.get("window").width - 100,
  },
  textDecorationLine: {
    backgroundColor: "#FEEED0",
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
  },
  rowInfor: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  chip: {
    backgroundColor: "#CFFAEA",
    borderRadius: 10,
    paddingHorizontal: 8,
    marginLeft: 10,
  },
  dot: {
    backgroundColor: "#eee5ff",
    marginTop: 80,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 15,
    marginTop: 80,
  },
});

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import styleGlobal from "../../assets/css/globalStyles";
import RowInfor from "./RowInfor";
import SlideChip from "../../components/SlideChip";
import { DataContext } from "../../data/dataProvider";
import { SwipeListView } from "react-native-swipe-list-view";
import Ionicons from 'react-native-vector-icons/Ionicons'
const Job = ({ navigation }) => {
  const { statusJob } = useContext(DataContext);
  const [listData, setListData] = useState([
    {
     key: "0",
      status: "delivered",
      title: "Thêm list danh sách sản phẩm",
      dateCreat: "21/03/2022",
    },

    {
     key: "1",
      status: "delivered",
      title: "Sửa form không để tiếng anh",
      dateCreat: "21/03/2022",
    },

    {
     key: "2",
      status: "delivered",
      title: "Xóa bớt trường không cần thiết",
      dateCreat: "21/03/2022",
    },

    {
     key: "3",
      status: "doing",
      title: "Design form thi",
      dateCreat: "21/03/2022",
    },

    {
     key: "4",
      status: "doing",
      title: "Design form thi",
      dateCreat: "21/03/2022",
    },

    {
     key: "5",
      status: "alert",
      title: "Design form thi",
      dateCreat: "21/03/2022",
    },

    {
     key: "6",
      status: "alert",
      title: "Công việc đã hoàn thành",
      dateCreat: "21/03/2022",
    },

    {
     key: "7",
      status: "done",
      title: "Design form thi",
      dateCreat: "21/03/2022",
    },
  ]);

  const closeItem = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteItem = (rowMap, rowKey) => {
    closeItem(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onItemOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = (data) => (
    <TouchableHighlight
      onPress={() => console.log("You touched me")}
      style={styles.rowFront}
      underlayColor={"#fff"}
    >
      <RowInfor
        key={data.item.key}
        title={data.item.title}
        dateCreat={data.item.dateCreat}
        status={data.item.status}
        navigation={() => {
          navigation.navigate("Nhiệm vụ");
        }}
      />
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      {/* <TouchableOpacity
        style={[styles.actionButton, styles.closeBtn]}
        onPress={() => closeItem(rowMap, data.item.id)}
      >
        <View style={[styleGlobal.flexCenter, styles.boxIcon]}>
            <Ionicons name="finger-print-sharp" size={30} color={"#FD3C4A"}></Ionicons>
          </View>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={[styles.actionButton, styles.deleteBtn]}
        onPress={() => deleteItem(rowMap, data.item.key)}
      >
       <View style={[styleGlobal.flexCenter, styles.boxIcon,{backgroundColor:"#CFFAEA"}]}>
            <Ionicons name="checkmark-done-outline" size={30} color={"green"}></Ionicons>
          </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={[{ flex: 1, backgroundColor: "#fff" }]}>
      <View style={[styleGlobal.p_2]}>
        <SlideChip />
      </View> 
      <View style={styles.container}>
        <SwipeListView
          data={listData.filter(i => i.status === statusJob)}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-80}
          previewRowKey={"0"}
          previewOpenValue={0}
          previewOpenDelay={2000}
          onRowDidOpen={onItemOpen}
        />
      </View>
    </View>
  );
};

export default Job;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  list: {
    color: "#FFF",
  }, 
  
  boxIcon: {
    backgroundColor: "#FDD5D7",
    borderRadius: 10,
    width: 50,
    height: 50,
  },
  rowFront: {
    backgroundColor: "#fff",
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5,
  },
  actionButton: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  closeBtn: {
    backgroundColor: "#faf9ff",
    right: 65,
  },
  deleteBtn: {
    backgroundColor: "#faf9ff",
    right: 0,
  },
});

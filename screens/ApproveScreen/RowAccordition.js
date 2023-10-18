import React, { useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from "react-native";
import Collapsible from "react-native-collapsible";
import styleGlobal from "../../assets/css/globalStyles";
import Feather from "react-native-vector-icons/Feather";
import BoxApprorve from "../../components/BoxApprorve";
import nodata from "../../assets/images/nodata.png";
import { ApproveContext } from "./Context";
const RowAccordition = ({ title, index, category, onPress }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [targetShow, setTargetShow] = useState('');
  const [collapsedChildren, setCollapsedChildren] = useState(true);

  const { data, activeTab } = useContext(ApproveContext);
  React.useEffect(() => {
    setCollapsed(true);
  }, [activeTab]);
  return (
    <View key={index}>
      <TouchableWithoutFeedback onPress={() => setCollapsed(!collapsed)}>
        <View style={[styleGlobal.flexBetween, styles.rowDrop]}>
          <Text style={[styles.title]}>
            {title +
              " (" +
              data.filter(
                (approved) =>
                  category.includes(approved.category.name) &&
                  approved.state ===
                    (activeTab === "all" ? approved.state : activeTab)
              ).length +
              ")"}
          </Text>
          <TouchableWithoutFeedback onPress={onPress}>
            <View
              style={[
                styleGlobal.flexCenter,
                {
                  borderWidth: 2,
                  borderRadius: 20,
                  width: 23,
                  height: 23,
                  borderColor: "#c01e2e",
                },
              ]}
            >
              <Feather name="plus" size={15} color={"#c01e2e"}></Feather>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
      {["Ban CNTT", "Phòng Kinh Doanh"].map((ele, index) => {
        return (
          <View key={index}>
            <Collapsible collapsed={collapsed} align="center">
              <TouchableWithoutFeedback
                onPress={() => {
                  setTargetShow(ele)
                  setCollapsedChildren(false)

                }}
              >
                <View style={[styleGlobal.flexStart, styles.headerRoom]}>
                  <View
                    style={[
                      styleGlobal.flexBetween,
                      { width: Dimensions.get("window").width - 80 },
                    ]}
                  >
                    <Text style={[styles.title, { fontSize: 15 }]}>{ele}</Text>
                    <View style={[styleGlobal.flexCenter]}>
                      <Feather
                        name="chevron-right"
                        size={15}
                        color={"#c01e2e"}
                      ></Feather>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Collapsible>
            <Collapsible collapsed={(!collapsed && targetShow===ele) ? collapsedChildren : true} align="center">
              {data.filter(
                (approved) =>
                  category.includes(approved.category.name) &&
                  approved.state ===
                    (activeTab === "all" ? approved.state : activeTab)
              ).length > 0 ? (
                data
                  .filter(
                    (approved) =>
                      category.includes(approved.category.name) &&
                      approved.state ===
                        (activeTab === "all" ? approved.state : activeTab)
                  )
                  .map((ele, index) => {
                    return (
                      <BoxApprorve
                        key={index}
                        title={ele.title}
                        author={
                          ele.users_approval.length > 0
                            ? ele.users_approval[0].name.name
                            : ""
                        }
                        status={
                          ele.users_approval.length > 0
                            ? ele.users_approval[0].status
                            : ""
                        }
                      />
                    );
                  })
              ) : (
                <View
                  style={[styleGlobal.flexCenter, { flexDirection: "column" }]}
                >
                  <Image
                    style={{ width: 150, height: 150, marginVertical: 20 }}
                    source={nodata}
                    alt="/"
                  />
                  <Text style={{ fontWeight: "700", marginBottom: 20 }}>
                    Không tìm thấy phê duyệt nào!
                  </Text>
                </View>
              )}
            </Collapsible>
          </View>
        );
      })}
    </View>
  );
};

export default RowAccordition;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  boxChart: {
    backgroundColor: "#fff",
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  rowDrop: {
    backgroundColor: "#faf9ff",
    paddingVertical: 13,
    paddingHorizontal: 13,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  headerRoom: {
    height: 35,
    paddingLeft: 20,
    marginBottom: 10,
  },
});

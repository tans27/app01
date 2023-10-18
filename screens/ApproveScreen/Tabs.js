import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React,{useContext} from "react";
import styleGlobal from "../../assets/css/globalStyles";
import { ApproveContext } from './Context'
const Tabs = () => {
    const {activeTab,setActiveTab} = useContext(ApproveContext)
  return (
    <View style={[styleGlobal.flexBetween, styles.boxContainer]}>
      <TouchableOpacity
        style={[
          styleGlobal.flexCenter,
          activeTab === 'all' && styles.activeChip,
          { borderColor: "#c01e2e", borderWidth: 1, borderRadius: 5 },
        ]}
        onPress={() => setActiveTab("all")}
      >
        <View style={[styleGlobal.flexCenter]}>
          <Text
            style={[
              { paddingVertical: 8, paddingHorizontal: 10, color: activeTab === 'all' ? "#fff" : '#c01e2e' },
            ]}
          >
            Tất cả
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styleGlobal.flexCenter,
          activeTab === "pending" && styles.activeChip,
          { borderColor: "#c01e2e", borderWidth: 1, borderRadius: 5 },
        ]}
        onPress={() => setActiveTab("pending")}
      >
        <View style={[styleGlobal.flexCenter]}>
          <Text
            style={[
              { paddingVertical: 8, paddingHorizontal: 10, color: activeTab === 'pending' ? "#fff" : '#c01e2e' },
            ]}
          >
            Chờ duyệt
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styleGlobal.flexCenter,
          activeTab === 'doing' && styles.activeChip,
          { borderColor: "#c01e2e", borderWidth: 1, borderRadius: 5 },
        ]}
        onPress={() => setActiveTab('doing')}
      >
        <View style={[styleGlobal.flexCenter]}>
          <Text
            style={[
              { paddingVertical: 8, paddingHorizontal: 10, color: activeTab === 'doing' ? "#fff" : '#c01e2e' },
            ]}
          >
            Đang làm
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styleGlobal.flexCenter,
          activeTab === 'cancel' && styles.activeChip,
          { borderColor: "#c01e2e", borderWidth: 1, borderRadius: 5 },
        ]}
        onPress={() => setActiveTab('cancel')}
      >
        <View style={[styleGlobal.flexCenter]}>
          <Text
            style={[
              { paddingVertical: 8, paddingHorizontal: 10, color: activeTab === 'cancel' ? "#fff" : "#c01e2e" },
            ]}
          >
            Từ chối
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: "#faf9ff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  activeChip: {
    backgroundColor: "#c01e2e",
  },
});

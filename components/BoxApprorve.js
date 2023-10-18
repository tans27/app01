import { StyleSheet, Text, View,Dimensions } from "react-native";
import React from "react"; 
import styleGlobal from "../assets/css/globalStyles";
const BoxApprorve = ({ title, author, status }) => {
  return (
    <View>
      <View style={[styleGlobal.flexBetween, styles.rowIcon ]}>
        <View style={[styleGlobal.flexBetween,{paddingVertical:10}]}> 
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{author}</Text>
          </View>
        </View>
<View style={[styleGlobal.flexStart]}>
        {status === "new" && (
          <View style={[styles.chipPendsing,styles.chip]}>
            
            <Text style={styles.pending}>Đang chờ duyệt</Text>
          </View>
        )}

        {status === "approved" && (
          <View style={[styles.chipApprsoved,styles.chip]}>
            
            <Text style={styles.approved}>Đã duyệt</Text>
          </View>
        )}

        {status === "refused" && (
          <View style={[styles.chipRefussed,styles.chip]}>
            
            <Text style={styles.refused}>Từ chối</Text>
          </View>
        )}</View>
      </View>
    </View>
  );
};

export default BoxApprorve;

const styles = StyleSheet.create({ 
  rowIcon: {
    backgroundColor: "#fff",
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1,
    paddingHorizontal:10, 
  },
  title: {
    fontSize: 19,
    fontWeight: "700", 
    maxWidth:Dimensions.get("window").width - 150
  },

  description: {
    fontSize: 12,
    color: "#4f4f4f",
  },
  chip: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 8, 
  },
  // chipPending: {
  //   backgroundColor: "#FEEED0",
  // },
  // chipApproved: {
  //   backgroundColor: "#CFFAEA",
  // },
  // chipRefused: {
  //   backgroundColor: "#FDD5D7",
  // },
  pending: {
    color: "#FCAC12",
  },
  approved: {
    color: "#00A86B",
  },
  refused: {
    color: "#FD3C4A",
  },
});

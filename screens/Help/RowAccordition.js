import React, { useState } from "react";
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import Collapsible from "react-native-collapsible";
import styleGlobal from "../../assets/css/globalStyles"; 
import Feather from "react-native-vector-icons/Feather"; 
const RowAccordition = ({ title, question, answer }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  return (<View>
         <TouchableWithoutFeedback  onPress={() =>toggleExpanded()}>
         <View style={[styleGlobal.flexBetween,styles.rowDrop]}>
                  <Text style={[styles.title]}>{question}</Text> 
                  <TouchableOpacity onPress={() => navigation.navigate(`${title}`)}>
                    <Feather name="chevron-right" size={20} color={"#c01e2e"}></Feather> 
                  </TouchableOpacity> 
              </View>
        </TouchableWithoutFeedback>
        <Collapsible collapsed={collapsed} align="center">
        <View style={[{backgroundColor:'#faf9ff',borderRadius:10,padding:15,marginTop:10}]}>
            {answer}
          </View>
        </Collapsible>
      </View> 
  );
};

export default RowAccordition;

const styles = StyleSheet.create({
    rowDrop: {
        backgroundColor:'#faf9ff',
        paddingVertical: 13,
        paddingHorizontal: 13,
        borderRadius:10,
        marginTop: 10,
      },
});

import {
  StyleSheet,  
  View, 
  ScrollView, 
} from "react-native";
import React  from "react";
import Box from "../../components/Box"; 
import styleGlobal from "../../assets/css/globalStyles";   
import MaterialIcons from "react-native-vector-icons/MaterialIcons";  
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const ManagerDevice = ({navigation}) => { 
  return ( 
    <> 
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
      >
        <View style={{ backgroundColor: "#fff",borderTopRightRadius:20,borderTopLeftRadius:20,}}>
          <View
            style={[
              styleGlobal.flexBetween,
              styleGlobal.px_2,
              {
                flex: 1,  
                marginVertical: 20,
              },
            ]}
          ><Box
          icon={<MaterialCommunityIcons name="office-building-marker" size={35} color={"#c01e2e"} />}
          title="Văn phòng"
          description="Thiết bị sử dụng tại các phòng ban"
          borderColor="#c01e2e"
          navigation={() => navigation.navigate('Danh sách thiết bị')}
        />
            <Box
              icon={
                <MaterialIcons
                  name="room-preferences"
                  size={35}
                  color={"#c01e2e"}
                ></MaterialIcons>
              }
              title="Nhà Máy"
              description="Máy móc, dụng cụ hỗ trợ sản xuất,..."
              navigation={() => navigation.navigate('Danh sách thiết bị')}
              borderColor="#c01e2e"
            />
            
          </View>
          <View
            style={[
              styleGlobal.flexBetween,
              styleGlobal.px_2,
              { flex: 1,marginBottom:20},
            ]}
          >
            <Box
              icon={
                <MaterialIcons
                  name="storage"
                  size={35}
                  color={"#c01e2e"}
                  backgroundColor="#1b66f6"
                ></MaterialIcons>
              }
              title="Kho"
              description="Vật tư, thiết bị lưu trữ tại các kho,..."
              borderColor="#c01e2e"
              navigation={() => navigation.navigate('Danh sách thiết bị')}
            />
             <Box
              icon={
                <MaterialCommunityIcons name="ballot-recount" size={35} color={"#c01e2e"}></MaterialCommunityIcons>
              }
              title="Tất cả"
              description="Danh sách tất cả thiết bị trên toàn quốc,..."
              borderColor="#c01e2e"
              navigation={() => navigation.navigate('Danh sách thiết bị')}
            />
          </View>
          
        </View>
      </ScrollView></>
  );
};

export default ManagerDevice; 
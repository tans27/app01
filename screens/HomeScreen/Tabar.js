import React,{ useContext} from "react";
import {
  Platform, 
  View, 
  StyleSheet,
  Animated,
  Image
} from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";  
import Feather from "react-native-vector-icons/Feather"; 
import Ionicons from "react-native-vector-icons/Ionicons";
//TAB SCREEN
import Notify from "../Notify/Notify";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import SettingsScreen from "../SettingsScreen/SettingsScreen";
import Job from "../Job/Job";
import HomeScreen from "../HomeScreen/Main";
import logo from '../../assets/images/logo.png' 
import { SettingContext } from '../SettingsScreen/Context'; 
const Tab = createBottomTabNavigator();

export default function Tabar({navigation}) { 
  const {options} = useContext(SettingContext)
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: "#c01e2e",
        tabBarInactiveTintColor: "#c6c6c6",
        tabBarShadowVisible: false,
        // Floating Tab Bar...
        tabBarStyle: {
          backgroundColor: options.theme  === "Sáng" ? "#faf9ff" :"#1a1d27",
          position: "relative",
          bottom: 0,
          marginHorizontal: 0,
          // Max Height...
          height: 60,
          // Shadow... 
          borderBottomWidth: 0,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          padding: 0,
          paddingBottom: 10,
        },
      }}
    >
      {
        // Tab Screens....
        // Tab ICons....
      }
      <Tab.Screen
        name={"Trang chủ"}
        component={HomeScreen}  
        options={{ 
          headerShadowVisible: false, 
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 10,
              }}
            >
              <Ionicons
                name="home"
                size={23}
                color={focused ? "#c01e2e" : "#c6c6c6"}
              ></Ionicons>
            </View>
          ),
          headerTitle: () => (
            <Image style={{ width: 150, height: 40, }} source={logo} />
            // <Text style={{fontSize:25,fontWeight:'700',color:"#fff"}}>D-HRM</Text>
          ), 
          headerStyle:{
            backgroundColor: options.theme  === "Sáng" ?"#fff":"#24283b",
            height:105,
          }
        }}
      ></Tab.Screen>

      <Tab.Screen
        name={"Thông báo"}
        component={Notify} 
        options={{ 
          headerShadowVisible: false, 
          headerStyle:{
            backgroundColor: options.theme  === "Sáng" ?"#fff":"#24283b", 
          },
          headerTitleStyle:{
            color:options.theme  === "Sáng" ?"#000":"#fff"
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 10,
              }}
            >
              <Ionicons
                name="notifications"
                size={25}
                color={focused ? "#c01e2e" : "#c6c6c6"}
              ></Ionicons>
            </View>
          ),
        }}
      ></Tab.Screen>

      {
        // Extra Tab Screen For Action Button..
      }

      <Tab.Screen
        name={"Công việc"}
        component={Job} 
        options={{
          tabBarLabelStyle: {
            display: "none",
          },
          headerStyle:{
            backgroundColor: options.theme  === "Sáng" ?"#fff":"#24283b", 
          },
          headerTitleStyle:{
            color:options.theme  === "Sáng" ?"#000":"#fff"
          },
          tabBarIcon: ({ focused }) => (
            <> 
                <View
                  style={[
                    {
                      backgroundColor: options.theme  === "Sáng" ?"#fff":"#24283b",
                      borderRadius: 60,
                      height: 70,
                      width: 70,
                      marginBottom: Platform.OS == "android" ? 50 : 30,
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  ]}
                >
                  <View
                    style={{
                      width: 55,
                      height: 55,
                      backgroundColor: "#c01e2e",
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Animated.View>
                      <Feather name="file-text" size={28} color={"#fff"}></Feather>
                    </Animated.View>
                  </View>
                </View> 
            </>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name={"Hồ sơ"}
        component={ProfileScreen}
        options={{
          headerTitleStyle: {
            color: '#fff', 
          },
          headerShadowVisible: false,  
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 10,
              }}
            >
              <Ionicons
                name="person"
                size={25}
                color={focused ? "#c01e2e" : "#c6c6c6"}
              ></Ionicons>
            </View>
          ),
          
          headerStyle:{
            backgroundColor:options.theme  === "Sáng" ?"transparent":"#24283b",
            height:80, 
          }
        }}
      ></Tab.Screen>

      <Tab.Screen
        name={"Cài đặt"}
        component={SettingsScreen} 
        options={{ 
          headerShadowVisible: false, 
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 10,
              }}
            >
              <Ionicons
                name="settings"
                size={25}
                color={focused ? "#c01e2e" : "#c6c6c6"}
              ></Ionicons>
            </View>
          ), 
          headerStyle:{
            backgroundColor: options.theme  === "Sáng" ?"#fff":"#24283b", 
          },
          headerTitleStyle:{
            color:options.theme  === "Sáng" ?"#000":"#fff"
          }
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
});

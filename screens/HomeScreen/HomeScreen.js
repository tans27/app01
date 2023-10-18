import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import React, { useState,useContext } from "react";
import Tabar from "./Tabar"; 
import ModalBottomSalary from "../Salary/ModalBottom";
import ModalBottomTimeKeeping from "../Timekeeping/ModalBottom";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SettingContext} from '../SettingsScreen/Context'
//Screen Settings
import SettingsScreen from "../SettingsScreen/SettingsScreen"; 
import LanguageChooseScreen from "../SettingsScreen/LanguageChooseScreen";
import SecurityChooseScreen from "../SettingsScreen/SecurityChooseScreen";
import NotifycationScreen from "../SettingsScreen/NotifycationScreen";
import ModeThemeScreen from "../SettingsScreen/ModeThemeScreen";
import InforVersion from "../SettingsScreen/InforVersion";
import FeedbackApp from '../SettingsScreen/Feedback'

//Job Settings
import Job from "../Job/Job"; 
import ManagerJob from "../Job/ManagerJob";
import PDF from '../../components/PDFLink'
//Screen Account 
const Stack = createNativeStackNavigator(); 

//ApproveScreen
import ApproveScreen from "../ApproveScreen/ApproveScreen"
import OrderCar from "../ApproveScreen/OrderCar"
import OrderStationery from "../ApproveScreen/OrderStationery";
import OrderRoom from "../ApproveScreen/OrderRoom";
import BusinessTravel from "../ApproveScreen/BusinessTravel";
import AddProduct from '../ApproveScreen/AddProduct'
import ConfirmListProduct from '../ApproveScreen/ConfirmListProduct'
import FormAddJob from '../ApproveScreen/FormAddJob'
//Timekeeping
import Timekeeping from "../Timekeeping"
import RegisterLate from '../Timekeeping/RegisterLate'
import RegisterAbsent from '../Timekeeping/RegisterAbsent'
import RegisterPermision from '../Timekeeping/RegisterPermision'
//Salary 
import Salary from '../Salary/Salary'

//Feedback
import Feedback from "../Feedback/Feedback"

//JobCompany
import JobCompany from '../JobCompany/JobCompany'
import AddJob from '../JobCompany/AddJob'
import DetailJob from '../JobCompany/DetailJob'
import DetailTask from '../JobCompany/DetailTask'
import AddEmployee from '../JobCompany/AddEmployee'
//News
import News from "../News/News";
import NewsDetail from '../News/NewsDetail'

//Help
import Help from '../Help/Help'
import DetailsHelp from '../Help/DetailsHelp'

//ManagerDevice
import ManagerDevice from '../ManagerDevice/ManagerDevice'
import DeviceScanQR from '../ManagerDevice/DeviceQR'
import DetailCategory from '../ManagerDevice/DetailCategory'
import DetailDevice from '../ManagerDevice/DetailDevice'
//HelpDesk
import ITHelpDesk from '../ITHelpDesk/ITHelpDesk'
import AddRequired from '../ITHelpDesk/AddRequired'
import DetailHelpDesk from '../ITHelpDesk/DetailHelpDesk'
import ListEmployee from '../ITHelpDesk/ListEmployee'
//Profile
import EditProfile from '../ProfileScreen/EditProfile'
//SuccessScreen
import SuccessScreen from '../SuccessScreen/SuccessScreen'
//DetailNotify
import DetailNotify from '../Notify/DetailNotify'
const screens = [ 
  {
    name: "Settings",
    component: SettingsScreen,
  }, 
  {
    name: "Ngôn ngữ",
    component: LanguageChooseScreen,
  },
  {
    name: "Hiển thị",
    component: ModeThemeScreen,
  },
  {
    name: "Bảo mật",
    component: SecurityChooseScreen,
  },
  {
    name: "Cài đặt thông báo",
    component: NotifycationScreen,
  }, 
  
  {
    name: "Thông tin ứng dụng",
    component: InforVersion,
  },
  
  {
    name: "Hợp đồng",
    component: PDF,
  },
  {
    name: "Job",
    component: Job,
  }, 
  {
    name: "Tin tức",
    component: News,
  }, 
  {
    name: "Chi tiết tin tức",
    component: NewsDetail,
  }, 
  {
    name: "Quản lý công việc",
    component: ManagerJob,
  }, 
  {
    name: "Phê duyệt",
    component: ApproveScreen,
  }, 
  {
    name: "Tạo phê duyệt",
    component: FormAddJob,
  }, 
  {
    name: "Đi công tác",
    component: BusinessTravel,
  }, 
  {
    name: "Mua sắm & Cung ứng",
    component: OrderStationery,
  }, 
  {
    name: "Xác nhận danh sách sản phẩm",
    component: ConfirmListProduct,
  }, 
  
  {
    name: "Đặt phòng họp",
    component: OrderRoom,
  }, 
  {
    name: "Đặt xe",
    component: OrderCar,
  }, 
  {
    name: "Thêm sản phẩm",
    component: AddProduct,
  }, 
  {
    name: "Lịch sử chấm công",
    component: Timekeeping,
  }, 
  {
    name: "Đăng ký đi muộn",
    component: RegisterLate,
  },
  {
    name: "Đăng ký vắng mặt",
    component: RegisterAbsent,
  },
  {
    name: "Đăng ký nghỉ phép",
    component: RegisterPermision,
  },
  {
    name: "Bảng lương",
    component: Salary,
  }, 
  {
    name: "Đánh giá KPI",
    component: Feedback,
  },  
  {
    name: "Công việc chung",
    component: JobCompany,  
  },  
  {
    name: "Thêm công việc",
    component: AddJob,
  }, 
  {
    name: "Chọn nhân viên",
    component: AddEmployee,
  }, 
  {
    name: "Chi tiết công việc",
    component: DetailJob,
  },  
  {
    name: "Nhiệm vụ",
    component: DetailTask,
  },  
  {
    name: "Trợ giúp",
    component: Help,
  },  
  {
    name: "Góp ý & Báo lỗi",
    component: FeedbackApp,
  },  
  {
    name: "Chi tiết Trợ giúp",
    component: DetailsHelp,
  }
  ,  
  {
    name: "Quản lý thiết bị",
    component: ManagerDevice,
  },  
  {
    name: "Quét thiết bị",
  component: DeviceScanQR,
  },
  {
    name: "Danh sách thiết bị",
  component: DetailCategory,
  },
  {
    name: "Chi tiết thiết bị",
  component: DetailDevice,
  },
  {
    name: "IT Helpdesk",
    component: ITHelpDesk,
  },
  
  {
    name: "Chi tiết Helpdesk",
    component: DetailHelpDesk,
  },
  {
    name: "Danh sách nhân sự",
    component: ListEmployee,
  },
  {
    name: "Chỉnh sửa Hồ sơ",
    component: EditProfile,
  },
  {
    name: "Thành công",
    component: SuccessScreen,
  },
  {
    name: "Chi tiết thông báo",
    component: DetailNotify,
  },
  {
    name:"Tạo yêu cầu",
    component:AddRequired,
  }
];

const HomeScreen = () => {
  const routeSpecial = [
     
  ];
  const [modal, setModal] = useState(false);
  const [modalOption, setModalOption] = useState(false);
  const { options} = useContext(SettingContext)
  return (
    // <SafeAreaView style={['route.params.caption' !=="Edit account" ? styleGlobal.backgroundColorTheme :"red", { flex: 1 }]}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScreensMain"
          component={Tabar}
          options={() => ({
            headerShown: false,
            headerShadowVisible: false,  
          })}
        />
        {screens.map((ele, index) => {
          return (
            <Stack.Screen
              key={index}
              name={ele.name}
              component={ele.component}
              options={({ navigation, route }) => ({
                title: !["Chi tiết tin tức","Chi tiết Trợ giúp","Thêm phê duyệt"].includes(ele.name) ? ele.name : '',
                tabBarStyle: { display: "none" },
                headerShadowVisible: false,
                headerShown:
                  ele.name === "Thành công" || ele.name === "Story"
                    ? false
                    : true,
                headerStyle: { 
                  backgroundColor: options.theme  === "Sáng" ?"#fff":"#24283b",
                }, 
                headerLeft: () => {
                  if(ele.name !== "Chỉnh sửa Hồ sơ") {
                   return (<TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon
                      name="arrow-left"
                      size={25}
                      color={options.theme  === "Sáng" ?"#000":"#fff"}
                    />
                  </TouchableOpacity>
                  )
                  }
                },
                headerRight: () => {
                  if (ele.name === "Bảng lương") {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setModal(!modal);
                        }}
                      >
                        <Ionicons name="calendar" size={24} color={options.theme  === "Sáng" ?"#0D0E0F":"#fff" }/>
                        <ModalBottomSalary
                          status={modal}
                          press={() => setModal(!modal)}
                          title="Chọn tháng lương"
                          message={
                            "Chọn tháng lương bạn muốn \n xem lại thông tin"
                          }
                          acceptText="Chọn"
                          denyText="Đóng"
                        />
                      </TouchableOpacity>
                    );
                  }   
                  if (ele.name === "Lịch sử chấm công") {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setModalOption(!modalOption);
                        }}
                      >
                        <Icon name="more-vertical" size={24} color="#0D0E0F" />
                        <ModalBottomTimeKeeping
                          status={modalOption}
                          press={() => setModalOption(!modalOption)} 
                          registerLate={() => {setModalOption(false);navigation.navigate("Đăng ký đi muộn")}}
                          registerAbsent={() => {setModalOption(false);navigation.navigate("Đăng ký vắng mặt")}}
                          registerPermission={() => {setModalOption(false);navigation.navigate("Đăng ký nghỉ phép")}}
                        />
                      </TouchableOpacity>
                    );
                  }   
                  if (ele.name === "Quản lý thiết bị") {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Quét thiết bị");
                        }}
                      >
                        <Ionicons name="qr-code" size={24} color="#0D0E0F" /> 
                      </TouchableOpacity>
                    );
                  }  
                },
                headerTintColor: routeSpecial.includes(ele.name)
                  ? "#fff"
                  : (ele.name==="Income" ? "#fff" : "#000"),
                headerTitleStyle: {
                  fontWeight: "bold", 
                  color:options.theme  === "Sáng" ?"#000":"#fff" 
                },
              })}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

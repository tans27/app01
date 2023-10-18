import React,{useContext} from 'react';
import { View,TouchableHighlight,StatusBar, StyleSheet, Alert ,ScrollView , SafeAreaView} from 'react-native';
import { withTheme } from 'react-native-paper';
import { SettingContext } from './Context';  
import InforLine from '../../components/InforLine';  
import PDFLink from '../../components/PDFLink'
function SettingsScreen({ navigation,theme }) { 
    const settings = useContext(SettingContext) 
    // const { logout } = useUserActions() 
    return (
        <>
        <View style={{height:'100%'}}>
        
        <StatusBar barStyle={"dark-content"} 
                    translucent = {true} />
            <SafeAreaView style={{backgroundColor:settings.options.theme  === "Sáng" ? "#fff":'#24283b',height:'100%'}}>
        <ScrollView  >
             <View  style={{backgroundColor:settings.options.theme  === "Sáng" ? "#fff":'#24283b',flex:1,height:'100%'}}>  
                <TouchableHighlight onPress={() => navigation.navigate('Ngôn ngữ')} underlayColor="#ffffff00">  
                    <InforLine 
                        title="Ngôn ngữ"    
                        value={
                            settings.options.language 
                        }
                        stack={true}
                    /> 
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('Hiển thị')} underlayColor="#ffffff00">  
                    <InforLine 
                        title="Chế độ hiển thị"    
                        value={
                            settings.options.theme 
                        }
                        stack={true}
                    /> 
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('Bảo mật')} underlayColor="#ffffff00">  
                    <InforLine 
                        title="Bảo mật"    
                        value={
                            settings.options.security 
                        }
                        stack={true}
                    /> 
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('Cài đặt thông báo')} underlayColor="#ffffff00">  
                    <InforLine 
                        title="Thông báo"    
                        value={''}
                        stack={true}
                    /> 
                </TouchableHighlight>
                
                    <PDFLink 
                        title="Hợp đồng"    
                        pdfURL={'http://samples.leanpub.com/thereactnativebook-sample.pdf'} 
                    />  


                <TouchableHighlight style={{marginTop:20}} onPress={() => navigation.navigate('Thông tin ứng dụng')} underlayColor="#ffffff00">  
                    <InforLine 
                        title="Thông tin ứng dụng"    
                        value={''}
                        stack={true}
                    /> 
                </TouchableHighlight>
                <TouchableHighlight onPress={() =>  navigation.navigate('Trợ giúp')} underlayColor="#ffffff00">  
                    <InforLine 
                        title="Trợ giúp"    
                        value={''}
                        stack={true}
                    /> 
                </TouchableHighlight>
                <TouchableHighlight onPress={() =>  navigation.navigate('Góp ý & Báo lỗi')} underlayColor="#ffffff00">  
                    <InforLine 
                        title="Góp ý & Báo lỗi"    
                        value={''}
                        stack={true}
                    /> 
                </TouchableHighlight>
                <TouchableHighlight onPress={() =>  navigation.navigate('IntroScreen')} underlayColor="#ffffff00">  
                    <InforLine 
                        title="Đăng xuất"    
                        value={''}
                        stack={true}
                    /> 
                </TouchableHighlight>
            </View>

             
            </ScrollView> 
        </SafeAreaView> 
        </View></>
    );
}
export default withTheme(SettingsScreen) 
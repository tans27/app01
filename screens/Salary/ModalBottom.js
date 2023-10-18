import { StyleSheet, Text, View,Modal,Dimensions,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import styleGlobal from '../../assets/css/globalStyles' 
import ScrollPicker from './ScrollPicker';

const ModalBottom = ({onPress ,status,press,title,message,acceptText,denyText}) => {
    const [modalLogout,setShowModalLogout] = useState(status)
    useEffect(() => {
        setShowModalLogout(status)
    },[status]) 
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={modalLogout}
        onRequestClose={() => {
          // this.closeButtonFunction()
        //   press
        }} 
      >
        <View
          style={{
            height: "100%",
            marginTop: "auto",
            backgroundColor: "#06060682",
          }}
        >
          <View style={styles.mainModal}>
            <Text style={[styles.headerModal]}>{title}</Text>
            <Text style={styles.textModal}>
              {message}
            </Text>
            <View>
            <ScrollPicker />
            </View>
            <View>
              <View style={styleGlobal.flexBetween}>
                <TouchableOpacity
                  style={[
                    styleGlobal.flexCenter,
                    styles.button,{borderColor:'#c01e2e',borderWidth:2,}
                  ]}
                  onPress={press}
                >
                  <Text style={[styles.text, { color: "#c01e2e" }]}>{denyText}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styleGlobal.flexCenter,
                    styles.button,{borderColor:'#c01e2e',borderWidth:2,backgroundColor:'#c01e2e'} 
                  ]}
                  onPress={onPress}
                >
                  <Text style={[styles.text, { color: "#fff" }]}>{acceptText}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default ModalBottom

const styles = StyleSheet.create({
    mainModal: {
        backgroundColor: "#fff",
        bottom: 0,
        position: "absolute",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 30,
        paddingBottom: 20,
        paddingHorizontal: 20,
        width: Dimensions.get("window").width,
      },
      headerModal: { 
        fontSize: 20,
        textAlign: "center",
        fontWeight:"600"
      },
      textModal: {
        fontWeight: "400",
        fontSize: 15,
        marginTop: 20,
        marginBottom: 35,
        color: "#91919f",
        textAlign: "center",
      },
      button: {
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 15,
        width: Dimensions.get("window").width / 2 - 30, 
      },
      text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
      }
})
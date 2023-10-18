import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Feather"; 
import React ,{ useState }from 'react'

const CheckBox = () => {
  const [ isSelected, setSelection] = useState(false)
  return (
    <TouchableOpacity onPress={() => setSelection(!isSelected)}>
    <View style={[styles.box,isSelected ? {backgroundColor:"#c01e2e"} : {backgroundColor:"#fff"}]}>
      {
        isSelected && <Icon
        name="check" 
        size={15}
        color="#fff" 
      />
      }
      
    </View>
    </TouchableOpacity>
  )
}

export default CheckBox

const styles = StyleSheet.create({
    box: {
        width:18,
        height:18,
        marginHorizontal:5,
        marginTop:3,
        borderRadius: 5,
        borderColor:"#c01e2e",
        borderWidth:2, 
    }
})
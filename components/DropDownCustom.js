import { StyleSheet, Text, View,Animated,TouchableOpacity,SafeAreaView ,ScrollView } from 'react-native'
import React,{ useState, useEffect} from 'react' 
import styleGlobal from '../assets/css/globalStyles'
import Feather from 'react-native-vector-icons/Feather'
import { convertNameOdoo } from '../extensions/convertNameOdoo' 
const DropDown = ({listOption,placeholder,options,setOptions,targetKey}) => {
  const [option,setOption] = useState('') 
  const [opacity] = useState(new Animated.Value(0));
  const [height] = useState(new Animated.Value(0));
  const [showDropDown, setShowDropDown] = useState(false);
  const showContent = () => {
    Animated.timing(height, {
      toValue: !showDropDown ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();
  
    Animated.timing(opacity, {
      toValue: !showDropDown ? 0 : 1,
      duration: 400,
      useNativeDriver: false, // <-- neccessary
    }).start();
  };
  const maxHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // <-- value that larger than your content's height
  });
  useEffect(() => {
    showContent();
  }, [showDropDown]);
  const RowDrop = ({label,value}) => { 
    return   <TouchableOpacity onPress={() => {
      setOption(label);
      setShowDropDown(false); 
        if(targetKey==="type") { 
          setOptions({
            ...options,
            type:value,
          })
        }
        else if(targetKey==="name") {
          setOptions({
            ...options,
            name:value,
          })
        }
        else if(targetKey==="area") {
          setOptions({
            ...options,
            area:value,
          })
        }
        else {
          return false
        } 
      }} style={{borderBottomWidth:1,borderBottomColor:"#e6e6ef",}}>
            <View style={{paddingHorizontal:10,paddingVertical:15}}><Text style={{color:'#000'}}>{label}</Text></View>
      </TouchableOpacity> 
  } 
  return (
    <SafeAreaView > 
      <Text style={{marginLeft:10,marginBottom:5,fontWeight:'600'}}>{placeholder}</Text>
      <TouchableOpacity
                style={[styleGlobal.inputBox]}
                onPress={() => {setShowDropDown(!showDropDown)}}
              >
                <View
                  style={[
                    styleGlobal.flexBetween,
                    styleGlobal.input,
                    { marginBottom: 0 },
                  ]}
                >
                  <Text style={[styleGlobal.inputButton,{color:option === "" ? "#91919f"  :"#000"}]}>
                    {targetKey==="type" && (options.type === "" ? `Chọn ${placeholder}` : convertNameOdoo(options.type).name)}
                    {targetKey==="name" && (options.name === "" ? `Chọn ${placeholder}` : convertNameOdoo(options.name).name)}
                    {targetKey==="area" && (options.area === "" ? `Chọn ${placeholder}` : convertNameOdoo(options.area).name)}
                    {targetKey==="team_maintain" && (options.area === "" ? `Chọn ${placeholder}` : convertNameOdoo(options.team_maintain).name)}
                  </Text>
                  {!showDropDown ? (
                    <Feather
                      name="chevron-right"
                      size={20}
                      color={"#9e9ea7"}
                    ></Feather>
                  ) : (
                    <Feather
                      name="chevron-down"
                      size={20}
                      color={"#9e9ea7"}
                    ></Feather>
                  )}
                </View>
              </TouchableOpacity>
              <ScrollView>
              <Animated.ScrollView style={{ opacity: opacity, maxHeight: maxHeight,marginTop: 5,borderRadius:10,borderWidth:1,borderColor:"#e6e6ef"}}>
             
             {
        listOption.filter(e => e !== undefined).map((ele, index) => {
          return <RowDrop 
                key={index}
                label={convertNameOdoo(ele).name} 
                value={ele}
          />
        })
      }
     
              </Animated.ScrollView>
             </ScrollView>
    </SafeAreaView>
  )
}

export default DropDown

const styles = StyleSheet.create({})
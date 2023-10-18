import { StyleSheet ,ScrollView } from 'react-native'
import React,{useEffect} from 'react' 
import styleGlobal from '../../assets/css/globalStyles' 
import Row from './RowAccordition'
const DetailsHelp = ({navigation,route}) => {
    useEffect(() => {
        navigation.setOptions({ title: route.params.title})
    },[])
  return (
    <ScrollView style={[styleGlobal.px_2,{flex: 1, backgroundColor: "#fff" }]}>
      {
           route.params.data.map((ele,index)=>{
              return <Row  key={index} question={ele.question} answer={ele.answer} /> 
           })

      } 
    </ScrollView>
  )
}

export default DetailsHelp

const styles = StyleSheet.create({
  rowDrop: {
    backgroundColor:'#faf9ff',
    paddingVertical: 13,
    paddingHorizontal: 13,
    borderRadius:10,
    marginTop: 10,
  },
})
import { StyleSheet } from 'react-native';    
export default StyleSheet.create({
  font400:{ 
    fontFamily:'Inter_400Regular',
  },
  font600:{ 
    fontFamily:'Inter_600SemiBold',
  },
  font700:{ 
    fontFamily:'Inter_700Bold',
  },
  font900:{ 
    fontFamily:'Inter_900Black',
  },
  backgroundColorPrimary: {
    backgroundColor:"#c01e2e",
  },
  backgroundColorSecondary: {
    backgroundColor:"#eee5ff",
  },
  backgroundColorThird: {
    backgroundColor:"#00A86B",
  },
  backgroundColorFourth: {
    backgroundColor:"#f4cfd1",
  },
  colorPrimary: {
    color:"#c01e2e",
  },
  backgroundColorTheme: {
    backgroundColor:'#fff',
  }, 
  flexCenter: {
    alignItems: "center",  
    justifyContent: "center", 
    flexDirection: "row",  
  },
  flexLeft: {
    alignItems: "center",  
    justifyContent: "flex-start",  
    paddingVertical:10, 
  },
  flexRow: {
    flexDirection: "row",
  },
  flexBetween: {
    alignItems: "center",  
    justifyContent: "space-between", 
    flexDirection: "row", 
  },
  flexStart: {
    alignItems: "center",  
    justifyContent: "flex-start", 
    flexDirection: "row", 
  }, 
  p_2: {
    padding:20,
  },
  pl_2: {
    paddingLeft:20,
  },
  py_2: {
    paddingVertical:20,
  },
  px_2: {
    paddingHorizontal:20,
  },
  m_2: {
    margin:20,
  },
  mr_1:{
    marginRight:10,
  },
  positionAbsolute:{
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  iconCheck:{
    width:20,
    height:20,  
    borderRadius:20,
  },
  inputBox: {
    position: "relative",
  },
  input: {
    height: 50,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: "#e6e6ef",
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  textArea:{  
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: "#e6e6ef",
    borderWidth: 1,
    padding: 15,
    paddingVertical:20,
  },
  inputButton:{
    color:"#91919f"
  }
});
import RootScreen from './screens/UserConfirm/RootScreen' 
import HomeScreen from './screens/HomeScreen/HomeScreen'  
import {useContext} from 'react'
import {UserContext} from './screens/UserConfirm/Context'  

export default function App() {
  const {isUser} = useContext(UserContext) 
  return ( 
    <> 
      {/* {
      isUser ? <HomeScreen /> : <RootScreen/>
    }      */}
     <HomeScreen />
    </>
  );
} 
 
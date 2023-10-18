import AsyncStorage from '@react-native-async-storage/async-storage'
const Storage = async (userInfor) => {   
    try {
        await AsyncStorage.setItem('userToken', userInfor);
    } catch(e) {
        console.log(e);
    }
} 
const checkStorageUser = async (target) => {   
    let userToken = null; 
    try {
        userToken = await AsyncStorage.getItem(target);
    } catch(e) {
        console.log(e);
    }
    return userToken;
} 
const clearStorageUser = async (target) => {
    try {
        await AsyncStorage.removeItem('userToken');
    } catch(e) {
        console.log(e);
    }
}
const UserActions = (prevState, action) => {
    switch( action.type ) {
        case 'RETRIEVE_TOKEN': 
            return {
            ...prevState, 
            // Handle Token is here 
            
        };
        case 'LOGIN':
            Storage(action.payload.emailUser)
            return {
            ...prevState,
            userName:action.payload.emailUser,
            passWord: action.payload.passwordUser, 
            isLoading: false,
            isUser:true, 
        };
        case 'LOGOUT':  
        clearStorageUser()
            return {
            ...prevState,
            userName: null,
            userToken: null,
            isUser:false, 
            isLoading: false,
        };
        case 'REGISTER': 
            return {
            ...prevState,
            userName: prevState.userName,
            userToken: prevState.token,
            isLoading: false,
        };
        case 'REDIRECT_USER':  
        console.log( 'ok')
            checkStorageUser('userToken').then(data => {
                if(dataUser.includes(data,0)) { 
                    return {
                        ...prevState,
                        isLoading: false,
                        isUser:true,
                    };  
                }
                else {
                    return {
                        ...prevState,
                        userName: null,
                        passWord: null,  
                        isLoading: false,
                        isUser:false,
                    };
                } 
            })
        default:
            return prevState
    }
  };

export {UserActions,checkStorageUser,Storage}
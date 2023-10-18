import React, { createContext,useReducer } from 'react';
import { UserActions } from '../../actions/UserActions';  
const UserContext = createContext() 
const initialState = {
    isLoading: true,
    isUser:false, 
    userName: null,
    userToken: null,
};

const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserActions, initialState) 

    const redirectUser = payload => {
        dispatch({type: 'REDIRECT_USER',payload});
    }

    const retrieveToken = payload => {
        dispatch({type: 'RETRIEVE_TOKEN', payload})  
    }

    const login = payload => {
        dispatch({type: 'LOGIN', payload})
    }

    const logout = payload => {
        dispatch({type: 'LOGOUT', payload})
    }

    const register = payload => {
        dispatch({type: 'REGISTER', payload})
    }  
    const contextValues = {
        redirectUser,
        retrieveToken,
        login,
        logout,
        register, 
        ...state, 
    } 

    return ( 
        <UserContext.Provider value={contextValues} >
            { children }
        </UserContext.Provider>
     );
}
 
export { UserContext, UserProvider };
import React, { useState ,  createContext } from 'react'    
const SettingContext = createContext() 
function SettingProvider({children}) {  
    const [options , setOptions] = useState({
        language: 'Tiếng Việt', 
        theme: 'Sáng',
        security:"Mã PIN", 
    }) 
    const [notifycationExpense,setNotifycationExpense] = useState(true)
    const [notifycationBudget,setNotifycationBudget] = useState(true)
    const [notifycationTips,setNotifycationTips] = useState(false) 
    const chooseLanguage = (language) => {
        setOptions({
            ...options,
            language: language, 
        })
    }  
    const chooseSecurity = (security) => {
        setOptions({
            ...options,
            security: security, 
        })
    } 
    const chooseTheme = (theme) => { 
        setOptions({
            ...options,
            theme: theme, 
        })  
    } 
    
    const value = { 
        chooseLanguage, 
        chooseTheme,
        chooseSecurity,
        
        options,   
        notifycationExpense,
        setNotifycationExpense,
        notifycationBudget,
        setNotifycationBudget,
        notifycationTips,
        setNotifycationTips

    }
    return (
        <SettingContext.Provider value={value}> 
            {children}
        </SettingContext.Provider> 
    )
}
export { SettingProvider, SettingContext }
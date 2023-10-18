import React, { useState ,useEffect,  createContext } from 'react'   
import axios from 'axios'  
const DataNotifyContext = createContext() 
function DataNotifyProvider({children}) {  
    const [dataNotify,setDataNotify] = useState([])
    const getNotify = async()=> {
      try {
        const response = await axios.get('http://hrm.diligo.vn/api/v1/announcement',{ 
        });
        setDataNotify(response.data.data); 
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
      getNotify()
    },[]) 
    const value = { 
      dataNotify,setDataNotify,  
    } 
    return (
        <DataNotifyContext.Provider value={value}> 
            {children}
        </DataNotifyContext.Provider>  
    )
}
export { DataNotifyProvider, DataNotifyContext }
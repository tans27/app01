import React, { useState ,  createContext,useLayoutEffect } from 'react'   
import axios from 'axios' 
const DetailJobContext = createContext() 
function DetailJobProvider({children}) {   
    const inputRef = React.useRef(); 
    const [loading,setLoading] = useState(false)
    const [tabs,setTabs] = useState("Nhiệm vụ")
    const [data,setData] = useState([]) 
    const [allEmploy,setAllEmploy] = useState([])
    const [status,setStatus] = useState("Tất cả") 
    const [time , setTime] = useState({
        from: '', 
        to: '', 
    })  
    const [employees , setEmployees] = useState([])
    const [prioritize,setPrioritize] = useState(false)   
    const getNotify = async()=> {
        setLoading(true)
        try {
          const response = await axios.get('http://hrm.diligo.vn/api/v1/employee-info',{ 
          });
          setAllEmploy(response.data.data); 
          setLoading(false)
        } catch (error) {
          console.error(error);
        }
      }
      useLayoutEffect(() => {
        getNotify()
      },[])  
    const value = { 
      inputRef,
        loading,
        data,setData,
        status, setStatus,
        time,setTime,  
        employees,setEmployees,
        prioritize,setPrioritize,
        allEmploy,setAllEmploy,
        tabs,setTabs
    }
    return (
        <DetailJobContext.Provider value={value}> 
            {children}
        </DetailJobContext.Provider> 
    )
}
export { DetailJobProvider, DetailJobContext }
import React, { useState ,useEffect,  createContext } from 'react'    
import axios from 'axios'
const ITHelpDeskContext = createContext() 
function ITHelpDeskProvider({children}) {  
    const [supporter,setSuppoter] = useState([])
    const [allSupporters,setAllSuppoter] = useState([])
    const [dataITHelpDesk,setITHelpDesk] = useState([])
    const [listRender, setListRender ] = useState("Tất cả")
    const [options,setOptions] = useState({
      type:'',
      name:'',
      area:'',
      team_maintain:""
    })
    useEffect(() => {
      setOptions({
        ...options,
        name:'',
        area:'',
      })
    },[options.type])
    useEffect(() => {
      setOptions({
        ...options, 
        area:'',
      })
    },[options.type,options.name])
    const getITHelpDesk = async()=> {
      try {
        const response = await axios.get('http://test.diligo.vn:15000/api/v1/helpdesk',{ 
        });
        setITHelpDesk(response.data.data); 
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
      getITHelpDesk()
    },[])    
    const value = { 
      dataITHelpDesk,setITHelpDesk,  
      listRender, setListRender  ,
      options,setOptions,
      supporter,setSuppoter,
      allSupporters,setAllSuppoter
    } 
    return (
        <ITHelpDeskContext.Provider value={value}> 
            {children}
        </ITHelpDeskContext.Provider>  
    )
}
export { ITHelpDeskProvider, ITHelpDeskContext }
import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
const ManagerDeviceContext = createContext();
function ManagerDeviceProvider({ children }) {
  const [dataManagerDevice, setDataManagerDevice] = useState([]); 
  const getDevice = async()=> {
    try {
      const response = await axios.get('http://hrm.diligo.vn/api/v1/device',{ 
      });
      setDataManagerDevice(response.data.data); 
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getDevice()
  },[]) 
  const value = {
    dataManagerDevice,
  };
  return (
    <ManagerDeviceContext.Provider value={value}>
      {children}
    </ManagerDeviceContext.Provider>
  );
}
export { ManagerDeviceProvider, ManagerDeviceContext };
